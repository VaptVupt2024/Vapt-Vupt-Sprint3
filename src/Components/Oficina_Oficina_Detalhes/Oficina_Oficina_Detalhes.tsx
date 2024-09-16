import './Oficina_Oficina_Detalhes.css'
import { FaLocationDot } from "react-icons/fa6";    
import { LuSearch } from "react-icons/lu";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiPasswordFill } from "react-icons/pi";


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
}

const Oficina_Oficina_Detalhes = (props: Propriedades) => {
    return (
        <>
            <div className='oficina_detalhes' aria-label={`Detalhes da oficina ${props.oficina.nome}`}>
                <div className='mais_infos'>
                    <div className="Endereco">
                        <a>
                            <FaLocationDot size={18} />
                            <div>
                                Endereço
                                {props.oficina.localizacao == "" ? <p>Esta oficina não informou a localização</p> : <p>{props.oficina.localizacao}</p>}
                            </div>
                        </a>
                        <a>
                            <FaLocationArrow size={18} />
                            <div>
                                Referência
                                {props.oficina.referência == "" ? <p>Esta oficina não informou a referência</p> : <p>{props.oficina.referência}</p>}
                            </div>
                        </a>
                    </div>
                    <div className='Telefone'>
                        <a>
                            <BsFillTelephoneFill size={18} />
                            <div>
                                Telefone
                                {props.oficina.telefone == "" ? <p>Esta oficina não informou o telefone</p> : <p>{props.oficina.telefone}</p>}
                            </div>
                        </a>
                        <a>
                            <PiPasswordFill size={18} />
                            <div>
                                CEP
                                {props.oficina.CEP == "" ? <p>Esta oficina não informou o CEP</p> : <p>{props.oficina.CEP}</p>}
                            </div>
                        </a>
                    </div>
                    <div className='Atendimento'>
                        <a>
                            <MdOutlineAccessTimeFilled size={20} />
                            <div>
                                Atendimento
                                {props.oficina.atendimento == "" ? <p>Esta oficina não informou o atendimento</p> : <p>{props.oficina.atendimento}</p>}
                            </div>
                        </a>
                    </div>
                </div>
                <div className='servicos_detalhes'>
                    <div className='busca_servicos_detalhes'>
                        <h3>Serviços</h3>
                        <form action="" aria-label="Buscar serviços">
                            <label htmlFor="buscar_detalhes">
                                <input type="text" placeholder='Buscar' id='buscar_detalhes'/>
                                <LuSearch size={20}/>
                            </label>
                        </form>
                    </div>
                    <div className='lista_servicos_detalhes'>
                        <ul role="list">
                          {props.oficina.oficinaServices.flatMap((oficinaServices) => oficinaServices.services).map((services) => (
                            <li key={services}>{services}</li>
                          ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Oficina_Oficina_Detalhes