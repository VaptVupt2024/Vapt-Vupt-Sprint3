import { useRef, useState } from 'react';
import './Diagnostico_Input.css';
import { BiSolidSend } from "react-icons/bi";

const Diagnostico_Input = () => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [response, setResponse] = useState<string | null>(null);
  const maxLength = 500;

  const handleContentChange = (event: React.FormEvent<HTMLSpanElement>) => {
    let newContent = event.currentTarget.textContent || "";
    if (newContent.length > maxLength) {
      newContent = newContent.slice(0, maxLength);
    }
    if (spanRef.current) {
      spanRef.current.textContent = newContent;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Evita o envio do formulário padrão

    const userInput = spanRef.current?.textContent || "";
    if (userInput.trim() === "") return; // Verifica se o campo não está vazio

    try {
      const response = await fetch('http://127.0.0.1:5000/api/diagnostico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: userInput }),
      });
    
      if (!response.ok) {
        throw new Error('Erro ao enviar o diagnóstico');
      }
    
      const data = await response.json();
      setResponse(data.result); // Atualiza o estado com a resposta do backend
    
      // Verifica se spanRef.current não é nulo antes de acessá-lo
      if (spanRef.current) {
        spanRef.current.textContent = ""; // Limpa o campo após envio
      }
    } catch (error) {
      console.error('Erro:', error);
    }
    
  };

  return (
    <>
      <div id='Diagnostico_Input'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="span_textarea">
            <span 
              id='span_textarea' 
              role="textbox" 
              contentEditable 
              ref={spanRef} 
              aria-label="Digite sua pergunta aqui"
              onInput={handleContentChange}
            ></span>
            <button type="submit" id='enviar_diagnostico' aria-label="Enviar pergunta">
              <BiSolidSend size={20} style={{ transform: 'rotate(-45deg)' }} aria-hidden="true" />
            </button>
          </label>
        </form>
        {response && <p>{response}</p>}
        <script>
          <>
          {console.log(response)}
          </>
        </script>
        <p>A AI do Vapt-Vupt pode apresentar informações imprecisas. Por isso, cheque as respostas.</p>
      </div>
    </>
  );
}

export default Diagnostico_Input;
