import { useState } from 'react';
import './Em_Desenvolvimento.css'

const Em_Desenvolvimento = () => {
    const [isEmDesenvolvimento, setIsEmDesenvolvimento] = useState(true);


    if (!isEmDesenvolvimento) {
        return null;
    }
    
    return(
        <>
        <div className={isEmDesenvolvimento ? "em_Desenvolvimento" : "fechar_em_Desenvolvimento"}>
            <div className={isEmDesenvolvimento ? "em_Desenvolvimento_dentro" : "em_Desenvolvimento_dentro_fecha"}>
                <img src="https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/erro404/yxkck5km0hpa6y1sv3xq" alt="Em desenvolvimento"/>
                <h2>Esta funcionalidade está em desenvolvimento</h2>
                <p>Estamos trabalhando duro para que tudo ocorra da melhor maneira possível.</p>
                <button type='button' onClick={() => setIsEmDesenvolvimento(!isEmDesenvolvimento)}>Entendi</button>
            </div>
            <div className='fechar_em_Desenvolvimento' onClick={() => setIsEmDesenvolvimento(!isEmDesenvolvimento)} tabIndex={1}></div>
        </div>
        </>
    )
}

export default Em_Desenvolvimento