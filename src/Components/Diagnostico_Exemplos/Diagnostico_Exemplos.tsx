import Logo_icon from '../../assets/Logo_icon/Logo_icon'
import './Diagnostico_Exemplos.css'
import { IoMdArrowRoundForward } from "react-icons/io";



const Diagnostico_Exemplos = () => {
    return(
        <>
        <div id='Diagnostico_Exemplos'>
            <Logo_icon width='90px' height='89px'></Logo_icon>
            <div>
                <button type="button" aria-label="Exemplo 'Direção pesada'">
                    <h3>Direção pesada</h3>
                    <p>A direção do meu carro está ficando pesada e difícil de manusear</p>
                    <IoMdArrowRoundForward  aria-hidden="true"/>
                </button>
                <button type="button" aria-label="Exemplo 'Barulho estranho'">
                    <h3>Barulho estranho</h3>
                    <p>Estou ouvindo um barulho estranho vindo do motor</p>
                    <IoMdArrowRoundForward  aria-hidden="true"/>
                </button>
                <button type="button" aria-label="Exemplo 'Luzes não funcionam'">
                    <h3>Luzes não funcionam</h3>
                    <p>As luzes do meu carro não estão funcionando corretamente.</p>
                    <IoMdArrowRoundForward  aria-hidden="true"/>
                </button>
            </div>
        </div>
        </>
    )
}

export default Diagnostico_Exemplos