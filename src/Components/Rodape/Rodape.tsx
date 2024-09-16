import './Rodape.css'

import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer>
            <div className="rodape_todos_links">
                <div className="rodape_links">
                    <div className="links">
                        <div className="sitemap">
                            <p className="sitemap_titu">Empresa</p>
                            <a href="https://vapt-vupt.vercel.app/#solucao" className="anchor2 menu-item2" role="link" aria-label="Ir para a seção 'Sobre'" tabIndex={5}>Sobre</a>
                            <a href="https://vapt-vupt.vercel.app/#section1" className="anchor2 menu-item2" role="link" aria-label="Ir para a seção 'Vantagens'" tabIndex={5}>Vantagens</a>
                            <a href="https://vapt-vupt.vercel.app/#video_pitch" className="anchor2 menu-item2" role="link" aria-label="Ir para a seção 'Vídeo Pitch'" tabIndex={5}>Vídeo Pitch</a>
                            <a href="https://vapt-vupt.vercel.app/#equipe" className="anchor2 menu-item2" role="link" aria-label="Ir para a seção 'Equipe'" tabIndex={5}>Equipe</a>
                        </div>
                        <div className="sitemap4">
                            <p className="sitemap_titu">Links</p>
                            <a href="" className="anchor2 menu-item2" role="link" aria-label="Ir para o perfil do Instagram de @Vapt-Vupt" tabIndex={5}>Instagram</a>
                            <a href="https://youtu.be/ZoeoYKEFKxc?si=5JMdihVcnd5PidSc" className="anchor2 menu-item2" role="link" aria-label="Ir para o canal do Youtube de @Vapt-Vupt" tabIndex={5}>Youtube</a>
                            <a href="https://github.com/VaptVupt2024/Vapt-Vupt-Challenge" className="anchor2 menu-item2" role="link" aria-label="Ir para o perfil do GitHub de @Vapt-Vupt" tabIndex={5}>GitHub</a>
                        </div>
                    </div>
                    <div className="redes_sociais_rodape">
                        <a href="" className="redes_sociais" tabIndex={5}>
                            <RiInstagramFill size={18} />                              
                        </a>
                        <a href="https://youtu.be/ZoeoYKEFKxc?si=5JMdihVcnd5PidSc" className="redes_sociais" tabIndex={5}>
                            <FaYoutube size={18} />                                                         
                        </a>
                        <a href="https://github.com/VaptVupt2024/Vapt-Vupt-Challenge" className="redes_sociais" tabIndex={5}>
                            <FaGithub size={18} />                                                       
                        </a>
                    </div>
                </div>
            </div>  
            <div className="tudo_rodape_baixo">
                <div className="logo_rodape">
                    <a href="" className="logo_vapt_rodape"><img src='https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/logos_footer/jixtx5raeuaea9khqd0e' className="logo_nav" alt="Logo do Vapt-Vupt - menu" title="Logo do Vapt-Vupt - menu" role="link" aria-label="Ir para o começo da página" tabIndex={5}></img></a>
                    <svg width="4" height="32" className="linha_divide" viewBox="0 0 4 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L2 30" stroke="#00113A" strokeWidth="3" strokeLinecap="round"/>
                    </svg>                        
                    <a href="https://www.portoseguro.com.br/" className="logo_porto_rodape" role="link" aria-label="Ir para o site da Porto Seguro"><img src='https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/logos_footer/ismg7ulfzgdsomlum9ml' className="logo_nav" alt="Logo da Porto Seguro - menu" title="Logo da Porto Seguro - menu" tabIndex={5}></img></a>
                </div>
                <a href="" className="lerami" role="link" aria-label="Ir para a página da LERAMI" tabIndex={5}>© 2024 LERAMI</a>
            </div>
        </footer>
        </>
    )
}

export default Footer