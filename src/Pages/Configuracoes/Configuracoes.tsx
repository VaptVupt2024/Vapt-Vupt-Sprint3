import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import { TbUserEdit } from "react-icons/tb";
import { PiCarSimpleBold } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import Opcao_config_perfil from "../../Components/Opcao_config_perfil/Opcao_config_perfil";

const Configuracoes = () => {
    return (
        <>
            <section>
                <Cabecalho titulo='Configurações' />
                <div className='dentro_section'>
                    <p className="titulo_config_perfil">Editar dados</p>
                    <Opcao_config_perfil nome="Editar dados Pessoais" icone={<TbUserEdit size={24}/>} />
                    <Opcao_config_perfil nome="Editar dados do Carro" icone={<PiCarSimpleBold size={24}/>} />
                    <Opcao_config_perfil nome="Editar Endereço" icone={<MdOutlineLocationOn size={24}/>} />

                    <p className="titulo_config_perfil">Ajuda</p>
                    <Opcao_config_perfil nome="Help Center" icone={<RiQuestionLine size={24}/>} />

                    <p className="titulo_config_perfil">Sair</p>
                    <Opcao_config_perfil nome="Sair" icone={<FiLogOut size={24}/>} sair/>
                </div>
            </section>
        </>
    )
}

export default Configuracoes