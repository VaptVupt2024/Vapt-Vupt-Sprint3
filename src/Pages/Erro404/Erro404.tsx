import { Link } from "react-router-dom";
import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import './Erro404.css'

const Erro404 = () => {
    return (
        <>
            <section>
                <Cabecalho titulo='Tente novamente' />
                    <div className="Erro404">
                        <img src="https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/erro404/yxkck5km0hpa6y1sv3xq" alt="Imagem de Erro com ferramentas voando e um mecânico tentando pegalas, dando a sensação de caos."/>
                        <h1>Tivemos um problema por aqui.</h1>
                        <p>Por favor, aguarde ou tente novamente.</p>
                        <Link to="/">Tentar novamente</Link>
                    </div>
            </section>
        </>
    )
}

export default Erro404