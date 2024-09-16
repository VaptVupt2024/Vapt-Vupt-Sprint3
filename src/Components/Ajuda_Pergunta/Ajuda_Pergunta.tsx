import { useState } from 'react';
import './Ajuda_Pergunta.css'
import { MdKeyboardArrowDown } from "react-icons/md";


interface Propriedades {
    key: string;
    titulo: string;
    texto: string;
}

const Ajuda_Pergunta = (props: Propriedades) => {
    const [aberto, setAberto] = useState(false);

    const handleToggle = () => {
        setAberto(!aberto);
    };

    return (
        <>
        <div className='pergunta' onClick={handleToggle} aria-expanded={aberto} tabIndex={3}>
            <div>
                <h3 className={aberto ? "aberto_h3" : ""}>{props.titulo}</h3>
                <p className={aberto ? "aberto" : ""}>{props.texto}</p>
            </div>
            <MdKeyboardArrowDown className={aberto ? "aberto_svg" : ""} />
        </div>
        </>
    )
}

export default Ajuda_Pergunta