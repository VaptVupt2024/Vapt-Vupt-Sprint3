import { useState, useEffect } from 'react';
import Em_Desenvolvimento from '../../Components/Em_Desenvolvimento/Em_Desenvolvimento';

const Indicador_Desenvolvimento = ({ children }: { children: React.ReactNode }) => {
  const [isEmDesenvolvimento, setIsEmDesenvolvimento] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target instanceof HTMLAnchorElement && !target.href) {
        event.preventDefault();
        setIsEmDesenvolvimento(!isEmDesenvolvimento);
      } else if (target.tagName === 'BUTTON' && !target.onclick) {
        event.preventDefault();
        setIsEmDesenvolvimento(!isEmDesenvolvimento);
      }
    };
  
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isEmDesenvolvimento]);

  return (
    <>
      {children}
      {isEmDesenvolvimento && <Em_Desenvolvimento />}
    </>
  );
};

export default Indicador_Desenvolvimento;