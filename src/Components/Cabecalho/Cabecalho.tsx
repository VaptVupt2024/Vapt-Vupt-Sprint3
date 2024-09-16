import './Cabecalho.css'
import { MdOutlineHistory } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react'

interface Propriedades {
    titulo: string;
}

const Cabecalho = (props: Propriedades) => {
    const [notificacao, setNotificacao] = useState(false);
    const [historico, setHistorico] = useState(false);
    const historicoRef = useRef<HTMLButtonElement>(null);
    const notificacaoRef = useRef<HTMLButtonElement>(null);
  
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (historicoRef.current && !historicoRef.current.contains(event.target as Node)) {
            setHistorico(false);
          }
          if (notificacaoRef.current && !notificacaoRef.current.contains(event.target as Node)) {
            setNotificacao(false);
          }
        };
      
        if (historico || notificacao) {
          document.addEventListener('click', handleOutsideClick);
        }
      
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [historico, notificacao]);

    return(
        <>
        <div id='cabecalho' role="banner">
                <button type='button' onClick={() => setHistorico(!historico)} className={historico ? "cabecalho_ativa" : ""} ref={historicoRef} tabIndex={2}>
                    <div>
                        <MdOutlineHistory size={24} aria-hidden="true"/>
                        <h2 onClick={() => setNotificacao(!historico)}>
                            Histórico
                            <IoClose size={24} aria-hidden="true"/>
                        </h2>
                    </div>
                    <ul>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                    </ul>
                </button>
                <h1>{props.titulo}</h1>
                <button type='button' onClick={() => setNotificacao(!notificacao)} className={notificacao ? "cabecalho_ativa" : ""} ref={notificacaoRef} tabIndex={2}>
                    <div>
                        <MdNotificationsNone size={24} aria-hidden="true"/>
                        <h2 onClick={() => setNotificacao(!notificacao)}>
                            Notificações
                            <IoClose size={24} aria-hidden="true"/>
                        </h2>
                    </div>
                    <ul>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                        <li tabIndex={2}>
                            <h3>Meu carro está fazendo um barulho</h3>
                            <p>29/08/24 • 17:50</p>
                        </li>
                    </ul>
                </button>
        </div>
        </>
    )
}

export default Cabecalho