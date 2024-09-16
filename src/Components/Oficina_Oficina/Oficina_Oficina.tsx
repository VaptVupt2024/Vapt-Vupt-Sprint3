import './Oficina_Oficina.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";


interface Propriedades {
    oficina: {
        id: string;
        imagem1: string;
        nome: string;
        localizacao: string;
        referência: string;
        telefone: string;
        CEP: string;
        atendimento: string;
        oficinaServices: { services: string[] }[];
      };
      onOficinaClick: (id: string) => void;
}

const Oficina_Oficina = (props: Propriedades) => {
    const handleClick = () => {
        props.onOficinaClick(props.oficina.id);
    };
    return (
        <>
        <button type='button' className='oficina' onClick={handleClick} role="button" tabIndex={3} aria-label={`Detalhes da oficina ${props.oficina.nome}`}>
            <img src={props.oficina.imagem1} alt={props.oficina.nome} title={props.oficina.nome} />
            <div>
                <ul role="list">
                    {props.oficina.oficinaServices.flatMap((oficinaServices) => oficinaServices.services).map((services) => (
                        <li key={services}>{services}</li>
                    ))}
                </ul>
                <h2>{props.oficina.nome}</h2>
                <div className='project_title'>
                    <p><FaLocationDot />{props.oficina.localizacao}</p>
                    <p><MdOutlineAccessTimeFilled />{props.oficina.atendimento}</p>
                </div>
            </div>
        </button>
        </>
    )
}

export default Oficina_Oficina