import { useState } from 'react';
import { FaCar } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { PiHandWavingBold } from "react-icons/pi";
import Logo_icon from '../../assets/Logo_icon/Logo_icon';
import './Tutorial.css';

const Tutorial = () => {
    const [etapa, setEtapa] = useState(0);
    return (
        <>
            <div className={etapa <= 3 ? "Tutorial" : "Tutorial close"}>
                <div className={etapa == 0 ? "etapa etapa1" : etapa == 1 ? "etapa etapa2" : etapa == 2 ? "etapa etapa3" : etapa == 3 ? "etapa etapa4" : "etapa etapa_close"}>
                    <div className='tutorial_images'>
                        <img src="https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/tutorial/uvmkxwftosqyhrewpqdf" alt="vídeo 3D Vapt-Vupt" className={etapa == 0 ? "i_etapa i_ativado" : "i_etapa"} />
                        <img src="https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/tutorial/fhxqtyhlwqj6rybjlocc" alt="vídeo 3D Vapt-Vupt" className={etapa == 1 ? "i_etapa i_ativado" : "i_etapa"} />
                        <img src="https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/tutorial/e0eeicvo3hjlu4twsvhs" alt="vídeo 3D Vapt-Vupt" className={etapa == 2 ? "i_etapa i_ativado" : "i_etapa"} />
                        <img src="https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/tutorial/qptt679uomay9nngbzfv" alt="vídeo 3D Vapt-Vupt" className={etapa >= 3 ? "i_etapa i_ativado" : "i_etapa"} />
                    </div>
                    <ul className='tutorial_textos' role='list'>
                        <li className={etapa == 0 ? "t_etapa t_ativado" : "t_etapa t_desativado"}>
                            <h1><PiHandWavingBold />Bem-vindo ao Vapt-Vupt!</h1>
                            <p>A Vapt-Vupt facilita sua vida quando o assunto é cuidar do seu carro. Para te ajudar a navegar pela plataforma, preparamos este guia rápido:</p>
                        </li>
                        <li className={etapa == 1 ? "t_etapa t_ativado" : "t_etapa t_desativado"}>
                            <h1><Logo_icon width='28px' height='26px' />Diagnóstico Inteligente</h1>
                            <p>Comece selecionando o sintoma que seu carro está apresentando. Nossa IA inteligente te guiará com perguntas simples para chegar a um pré-diagnóstico, te dando mais clareza sobre o problema.</p>
                        </li>
                        <li className={etapa == 2 ? "t_etapa t_ativado" : "t_etapa t_desativado"}>
                            <h1><HiMiniWrenchScrewdriver size={28} />Oficinas Verificadas</h1>
                            <p>Após o diagnóstico, explore nossa rede de oficinas parceiras. Filtre por localização, especialidade ou serviço e compare preços e avaliações para encontrar a melhor opção para seu carro.</p>
                        </li>
                        <li className={etapa >= 3 ? "t_etapa t_ativado" : "t_etapa t_desativado"}>
                            <h1><FaCar size={30} />Seu Carro Mais Seguro</h1>
                            <p>Cadastre seu(s) carro(s) para ter acesso a um histórico completo de manutenções, diagnósticos e gastos. Acompanhe a quilometragem, agende revisões e tenha tudo organizado em um só lugar!</p>
                        </li>
                    </ul>
                    <div className='controles_tutorial'>
                        <div className="bolas">
                            <div className={etapa == 0 ? "bola b_ativado" : "bola"} onClick={() => setEtapa(0)} tabIndex={1}></div>
                            <div className={etapa == 1 ? "bola b_ativado" : "bola"} onClick={() => setEtapa(1)} tabIndex={1}></div>
                            <div className={etapa == 2 ? "bola b_ativado" : "bola"} onClick={() => setEtapa(2)} tabIndex={1}></div>
                            <div className={etapa >= 3 ? "bola b_ativado" : "bola"} onClick={() => setEtapa(3)} tabIndex={1}></div>
                        </div>
                        <div className='controles'>
                            <button type='button' className='pular' onClick={() => setEtapa(4)} tabIndex={1}>pular</button>
                            <button type='button' className='proximo' onClick={() => setEtapa(etapa + 1)} tabIndex={1}>{etapa == 0 ? "Tutorial" : etapa == 1 ? "Próximo" : etapa == 2 ? "Próximo" : "Entendi!"}</button>
                        </div>
                    </div>
                </div>
                <div className='fechar_tutorial' onClick={() => setEtapa(4)} tabIndex={1}></div>
            </div>
        </>
    )
}

export default Tutorial