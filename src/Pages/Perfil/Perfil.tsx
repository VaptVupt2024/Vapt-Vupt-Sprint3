import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import { RiQuestionLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import Opcao_config_perfil from "../../Components/Opcao_config_perfil/Opcao_config_perfil";
import { BiBell } from "react-icons/bi";
import { TiStarOutline } from "react-icons/ti";
import { PiGift } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";
import Perfil_Nome from "../../Components/Perfil_Nome/Perfil_Nome";

const Perfil = () => {
    return (
        <>
            <section>
                <Cabecalho titulo='Perfil' />
                <div className='dentro_section'>
                    <Perfil_Nome nome="Ana da Silva"/>
                    <p className="titulo_config_perfil"></p>
                    <Opcao_config_perfil nome="Notificações" icone={<BiBell size={24}/>} />
                    <Opcao_config_perfil nome="Favoritos" icone={<TiStarOutline size={24}/>} />
                    <Opcao_config_perfil nome="Benefícios" icone={<PiGift size={24}/>} />
                    <Opcao_config_perfil nome="Editar dados pessoais" icone={<BiPencil size={24}/>} />

                    <p className="titulo_config_perfil"></p>
                    <Opcao_config_perfil nome="Help Center" icone={<RiQuestionLine size={24}/>} outro/>
                    <Opcao_config_perfil nome="Configurações" icone={<TbSettings size={24} />} outro/>
                </div>
            </section>
        </>
    )
}

export default Perfil