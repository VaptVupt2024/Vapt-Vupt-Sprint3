import { useEffect, useState } from 'react';
import { BiUniversalAccess } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { MdAccountCircle, MdOutlineDarkMode, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
import Logo_icon from "../../assets/Logo_icon/Logo_icon";
import './Menu.css';

const Menu = () => {
  //TROCA A CLASSE AO CLICAR NO LINK
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  }


  //TROCA A CLASSE AO CLICAR NO BOTÃO
  const menu_hide = () => {
    document.getElementById("header")?.classList.toggle("header_closed")
    document.getElementById("header_open")?.classList.toggle("header_closed")
    document.getElementById("sombra_menu")?.classList.toggle("sombra_menu_open")
  }
  const acessibilidade = () => {
    document.getElementById("acessibilidade")?.classList.toggle("closed")
  }


  //DEIXA CLASSE FECHADA COMO PADRÃO QUANDO TIVER MOBILE
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 888px)');
    const header = document.getElementById('header');
    const header2 = document.getElementById('header_open');
    const sombra_menu = document.getElementById('sombra_menu');

    if (header && header2 && sombra_menu) {
      if (mediaQuery.matches) {
        header.classList.add('header_closed');
        header2.classList.add('header_closed');
        sombra_menu.classList.remove('sombra_menu_open');
      }
  
      mediaQuery.addEventListener('change', () => {
        if (mediaQuery.matches) {
          header.classList.add('header_closed');
          header2.classList.add('header_closed');
          sombra_menu.classList.remove('sombra_menu_open');
        } else {
          header.classList.remove('header_closed');
          header2.classList.remove('header_closed');
          sombra_menu.classList.add('sombra_menu_open');
        }
      });
    } else {
      console.error("Tanto 'header' ou 'header_open' nao foram encontrados.");
    }
  }, []);

  // Estado para armazenar o modo atual (light ou dark)
  const [darkMode, setDarkMode] = useState(false);

  // Função para trocar o modo
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
    document.documentElement.classList.toggle('dark-mode');
  };

  // Verificar se o usuário já havia escolhido o modo escuro anteriormente
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  // Verificar se o sistema do usuário está em modo escuro e aplicar automaticamente
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode && !localStorage.getItem('darkMode')) {
      setDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  return (
    <>
      <div id='header_open'></div>
      <header id="header" role="navigation">
        <nav>
          <div>
            <button onClick={menu_hide} tabIndex={1}><GiHamburgerMenu size={20} /><p>Menu</p></button>
            <div className='links'>
              <Link to="/" tabIndex={1} className={activeLink === '/' ? 'ativo' : ''} onClick={() => {handleLinkClick('/'); if (window.matchMedia("(max-width: 888px)").matches) {menu_hide();}}}>
                <Logo_icon width='18px' height='16px' /><p>Diagnóstico</p>
              </Link>
              <Link to="/Oficinas" tabIndex={1} className={activeLink === '/Oficinas' ? 'ativo' : ''} onClick={() => {handleLinkClick('/'); if (window.matchMedia("(max-width: 888px)").matches) {menu_hide();}}}>
                <HiMiniWrenchScrewdriver size={18} /><p>Oficinas</p>
              </Link>
              <Link to="/MeuCarro" tabIndex={1} className={activeLink === '/MeuCarro' ? 'ativo' : ''} onClick={() => {handleLinkClick('/'); if (window.matchMedia("(max-width: 888px)").matches) {menu_hide();}}}>
                <FaCar size={18} /><p>Meu Carro</p>
              </Link>
            </div>
          </div>
          <ul>
            <Link to="/Ajuda" tabIndex={1} className={activeLink === '/Ajuda' ? 'ativo' : ''} onClick={() => {handleLinkClick('/'); if (window.matchMedia("(max-width: 888px)").matches) {menu_hide();}}}><RiQuestionLine size={24} /><p>Ajuda</p></Link>
            <button type='button' onClick={acessibilidade} tabIndex={1}><BiUniversalAccess size={24} /><p>Acessibilidade</p></button>
            <button type='button' onClick={toggleDarkMode} tabIndex={1}><MdOutlineDarkMode size={24} /><p>Dark Mode</p></button>
            <Link to="/Configuracoes" tabIndex={1} className={activeLink === '/Configuracoes' ? 'ativo' : ''} onClick={() => {handleLinkClick('/'); if (window.matchMedia("(max-width: 888px)").matches) {menu_hide();}}}><TbSettings size={24} /><p>Configurações</p></Link>
          </ul>
        </nav>
        <Link to="/Perfil" tabIndex={1} className={activeLink === '/Perfil' ? 'ativo' : ''} onClick={() => {handleLinkClick('/'); if (window.matchMedia("(max-width: 888px)").matches) {menu_hide();}}} id='perfil'>
          <div><MdAccountCircle size={30} /><p>Perfil</p></div>
          <p><MdOutlineKeyboardArrowRight size={18} /></p>
        </Link>
      </header>
      <div className='sombra_menu_closed' id='sombra_menu' onClick={menu_hide}></div>
    </>
  )
}

export default Menu