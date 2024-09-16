import { IoFilterSharp } from "react-icons/io5";
import './Oficina_titulo_filtro.css';


const Oficina_titulo_filtro = () => {
    return (
        <>
            <div className='Oficina_titulo_filtro' aria-label="Título da seção: Oficinas">
                <h2>Oficinas</h2>
                <button type="button" aria-label="Abrir filtros"><IoFilterSharp /></button>
            </div>
        </>
    )
}

export default Oficina_titulo_filtro