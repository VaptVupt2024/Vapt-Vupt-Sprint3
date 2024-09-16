import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Rodape/Rodape";
import Configuracoes from "./Pages/Configuracoes/Configuracoes";
import Diagnostico from "./Pages/Diagnostico/Diagnostico";
import MeuCarro from "./Pages/MeuCarro/MeuCarro";
import Oficinas from "./Pages/Oficinas/Oficinas";
import Ajuda from "./Pages/Ajuda/Ajuda";
import Perfil from "./Pages/Perfil/Perfil";
import Tela_Carregamento from "./Components/Tela_Carregamento/Tela_Carregamento";
import { useState, useEffect } from "react";
import Tutorial from "./Components/Tutorial/Tutorial";
import Erro404 from "./Pages/Erro404/Erro404";

function App() {
  const [, setDarkMode] = useState(false);
  // Verificar se o usuário já havia escolhido o modo escuro anteriormente
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true); // Add a new state to track if the tutorial should be shown

  useEffect(() => {
    const storedTutorialSeen = localStorage.getItem('tutorialSeen');
    if (storedTutorialSeen === 'true') {
      setShowTutorial(false); // If the tutorial has already been seen, don't show it again
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Simular carregamento de recursos com fetch ou Promise
        const fetchData = new Promise((resolve) => {
          const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
              const newProgress = prevProgress + 10;
              if (newProgress >= 100) {
                clearInterval(intervalId);
                resolve(true);
              }
              return newProgress;
            });
          }, 100);
        });

        await fetchData;

        // Após o carregamento, aguardar um tempo mínimo para garantir a visibilidade da tela de carregamento
        setTimeout(() => {
          setLoading(false);
        }, 500); // tempo de carregamento mínimo de 500ms
      } catch (error) {
        console.error("Error during loading:", error);
        setLoading(false); // Em caso de erro, também remover a tela de carregamento
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (showTutorial) {
      localStorage.setItem('tutorialSeen', 'true'); // Set the tutorial as seen after it's shown
    }
  }, [showTutorial]);
  

  return (
    <>
      <BrowserRouter>
        <Tela_Carregamento loading={loading} progress={progress} />
        {!loading && (
          <>
            {showTutorial && <Tutorial />}
            <Menu />
            <section className="section">
              <Routes>
                <Route path="/" element={<Diagnostico />} />
                <Route path="/Oficinas" element={<Oficinas />} />
                <Route path="/MeuCarro" element={<MeuCarro />} />
                <Route path="/Ajuda" element={<Ajuda />} />
                <Route path="/Configuracoes" element={<Configuracoes />} />
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/*" element={<Erro404 />} />
              </Routes>
              <Footer />
            </section>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
