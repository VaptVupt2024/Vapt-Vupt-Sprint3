import React from 'react';
import './Tela_Carregamento.css';
import Logo_icon from '../../assets/Logo_icon/Logo_icon';

interface LoadingScreenProps {
  loading: boolean;
  progress?: number;
}

const Tela_Carregamento: React.FC<LoadingScreenProps> = ({ loading, progress }) => {
  if (!loading) {
    return (
      <div className="loading-screen fade-out">
        <Logo_icon width='50px' height='50px' />
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress || 0}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="loading-screen">
      <Logo_icon width='50px' height='50px' />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress || 0}%` }} />
      </div>
    </div>
  );
};

export default Tela_Carregamento;
