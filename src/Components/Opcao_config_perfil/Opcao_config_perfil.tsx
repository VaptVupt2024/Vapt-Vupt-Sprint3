import { ReactNode } from 'react';
import './Opcao_config_perfil.css'
import { IoIosArrowForward } from "react-icons/io";

interface Propriedades {
  nome: string;
  icone: ReactNode;
  sair?: boolean;
  outro?: boolean;
}

const Opcao_config_perfil = (props: Propriedades) => {
  const className = props.sair ? 'campo_config sair' : props.outro ? 'campo_config outro' : 'campo_config';

  return (
    <button type='button' className={className} role="button" tabIndex={3} aria-label={props.nome} >
        <div>
          {props.icone}
          {props.nome}
        </div>
      <IoIosArrowForward size={16} className="seta_config" />
    </button>
  );
};

export default Opcao_config_perfil;