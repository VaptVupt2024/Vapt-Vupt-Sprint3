import { FaStar } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import './Oficina_Barra_Busca.css';

const Oficina_Barra_Busca = () => {
    return (
        <>
            <form id='Oficina_Barra_Busca' aria-label="Buscar Oficinas">
                <label className='label_barra_busca' htmlFor="Busca">
                    <LuSearch />
                    <input type="text" id='Busca' placeholder='Busque'></input>
                </label>
                <div className='ofi_favo'>
                    <a>
                        <input type="radio" name="oficinas" id="odici" value="Oficinas" aria-label="Oficinas" defaultChecked></input>
                        <label htmlFor="odici"><HiMiniWrenchScrewdriver width='18px' height='16px' /><p>Oficinas</p></label>
                    </a>
                    <a>
                        <input type="radio" name="oficinas" id="favo" value="Favoritos" aria-label="Favoritos"></input>
                        <label htmlFor="favo"><FaStar size={18} /><p>Favoritos</p></label>
                    </a>
                </div>
            </form>
        </>
    )
}

export default Oficina_Barra_Busca