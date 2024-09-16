import { SetStateAction, useState } from 'react';
import './MeuCarro_Tabela.css';
import { FaCar } from "react-icons/fa";
import { PiSpeedometerBold } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbPigMoney } from "react-icons/tb";
import Logo_icon_porto from '../../assets/Logo_icon_porto/Logo_icon_porto';
import { TiPlus } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";


const carros = [
  {
    apelido: "McQueen",
    quilometragem: 85000,
    gastos: 12500,
    prox_revi: '15/12/24',
    seguro: true,
    diagnosticos: [
      {
        titulo: "Troca de óleo e filtro",
        data: "10/09/24",
        hora: "10:30",
      },
      {
        titulo: "Revisão do sistema de freios",
        data: "05/08/24",
        hora: "14:00",
      },
    ]
  },
  {
    apelido: "Batmóvel",
    quilometragem: 150000,
    gastos: 35000,
    prox_revi: '22/01/25',
    seguro: true,
    diagnosticos: [
      {
        titulo: "Manutenção preventiva",
        data: "18/10/24",
        hora: "09:00",
      },
      {
        titulo: "Troca de pneus",
        data: "02/09/24",
        hora: "16:30",
      },
      {
        titulo: "Reparo do sistema de escape",
        data: "25/07/24",
        hora: "11:45",
      },
    ]
  },
];

const MeuCarro_Tabela = () => {
  const [selectedCar, setSelectedCar] = useState(carros[0]); // Initialize with the first car

  const handleCarSelection = (carro: SetStateAction<{ apelido: string; quilometragem: number; gastos: number; prox_revi: string; seguro: boolean; diagnosticos: { titulo: string; data: string; hora: string; }[]; }>) => {
    setSelectedCar(carro);
  };

  return (
    <div className='container' aria-label="Tabela de informações do meu carro">
      <div className="Carros" aria-label="Lista de carros">
        <ul role="list">
          {carros.map((carro, index) => (
            <li 
            key={index}
            tabIndex={3} 
            onClick={() => handleCarSelection(carro)} 
            className={selectedCar.apelido === carro.apelido ? 'selected' : ''}
            aria-label={`Selecionar carro ${carro.apelido}`}
            >
              <FaCar aria-hidden="true"/>{carro.apelido}
            </li>
          ))}
        </ul>
        <button tabIndex={3} aria-label="Adicionar novo carro"><TiPlus className='novo' aria-hidden="true"/><p>Novo</p></button>
      </div>
      {selectedCar && (
        <div className='infos'>
          <div className="quilometragem">
          <p><PiSpeedometerBold />Quilometragem:</p> <span>{selectedCar.quilometragem}</span>
          </div>
          <div className="prox_revi">
            <p><AiOutlineSchedule />Próxima revisão:</p> <span>{selectedCar.prox_revi}</span>
          </div>
          <div className="gastos">
            <p><TbPigMoney />Gastos:</p> <span>{selectedCar.gastos}</span>
          </div>
          <div className="seguro">
            <p><Logo_icon_porto width='13px' height='13px'/> Seguro:</p> <span>{selectedCar.seguro ? 'ATIVO' : 'VENCEU'}</span>
          </div>
          <div className="diag_salvos" aria-label="Lista de diagnósticos salvos">
            <p>Diagnósticos salvos:</p>
            <ul role="list">
              {selectedCar.diagnosticos.map((diagnostico, index) => (
                <li tabIndex={3} role="button" key={index}><h3>{diagnostico.titulo}</h3><p>{diagnostico.data} • {diagnostico.hora}</p><IoIosArrowForward aria-hidden="true" /></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeuCarro_Tabela;