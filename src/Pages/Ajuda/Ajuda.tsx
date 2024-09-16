import Ajuda_Banner from "../../Components/Ajuda_Banner/Ajuda_Banner"
import Ajuda_Form from "../../Components/Ajuda_Form/Ajuda_Form";
import Ajuda_Pergunta from "../../Components/Ajuda_Pergunta/Ajuda_Pergunta";
import Cabecalho from "../../Components/Cabecalho/Cabecalho"

const Ajuda = () => {
    const perguntasFrequentes = [
      {
        id: "1",
        titulo: 'Como funciona o diagnóstico do Vapt-Vupt?',
        texto: 'O Vapt-Vupt utiliza inteligência artificial para analisar as informações que você fornece sobre os sintomas do seu carro. Nosso sistema inteligente cruza esses dados com um vasto banco de dados de problemas comuns, gerando um pré-diagnóstico rápido e confiável. É importante lembrar que este pré-diagnóstico não substitui a avaliação de um mecânico profissional, mas serve como um guia para te ajudar a entender melhor o problema do seu carro.'
      },
      {
        id: "2",
        titulo: 'Quais as vantagens de usar o Vapt-Vupt?',
        texto: 'Com o Vapt-Vupt, você economiza tempo e dinheiro, pois não precisa mais ir de oficina em oficina para obter orçamentos. Você pode comparar preços e serviços de diversas oficinas parceiras em um único lugar. Além disso, você tem acesso a dicas de manutenção preventiva e alertas personalizados, para cuidar do seu carro da melhor maneira possível. E se precisar de ajuda, o Vapt-Vupt te coloca em contato com um mecânico 24 horas por dia.'
      },
      {
        id: "3",
        titulo: 'Como encontro oficinas perto de mim?',
        texto: 'No Vapt-Vupt, você pode buscar oficinas por localização, especialidade ou serviço. Basta inserir seu CEP ou endereço e a plataforma te mostrará as oficinas parceiras mais próximas de você. Você pode visualizar a localização das oficinas no mapa, comparar preços e serviços, e até mesmo agendar um horário diretamente pelo aplicativo.'
      },
      {
        id: "4",
        titulo: 'O que faço se meu carro quebrar na estrada?',
        texto: 'Se seu carro quebrar na estrada, não se preocupe! O Vapt-Vupt te ajuda a encontrar um serviço de guincho próximo de você e te coloca em contato com um mecânico 24 horas por dia para te auxiliar. Você também pode acessar dicas de segurança e primeiros socorros no aplicativo para lidar com a situação de forma mais tranquila e segura.'
      },
    ];
    return (
        <>
        <section>
            <Cabecalho titulo='Ajuda'/>
            <div className='dentro_section'>
                <Ajuda_Banner titulo="Conheça melhor quem somos!" link="https://vapt-vupt.vercel.app/" image="https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/ajuda/ebdx9p8rccmqzxudjba0"></Ajuda_Banner>
                <p className="titulo_catego_pag">Perguntas frequentes</p>
                {perguntasFrequentes.map(pergunta =>
                <Ajuda_Pergunta
                    key={pergunta.id}
                    titulo={pergunta.titulo}
                    texto={pergunta.texto}             
                />)}
                <p className="titulo_catego_pag">Faça sua pergunta aqui!</p>
                <Ajuda_Form/>
            </div>
        </section>
        </>
    )
}

export default Ajuda