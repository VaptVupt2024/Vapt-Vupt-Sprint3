import { useRef } from 'react';
import './Diagnostico_Input.css'
import { BiSolidSend } from "react-icons/bi";

const Diagnostico_Input = () => {

  // Define spanRef type as HTMLSpanElement or null
  const spanRef = useRef<HTMLSpanElement>(null);
  const maxLength = 500; // Set your desired maximum length here

  // Define the type of event parameter
  const handleContentChange = (event: React.FormEvent<HTMLSpanElement>) => {
    let newContent = event.currentTarget.textContent || "";

    // Truncate the content if it exceeds the maximum length
    if (newContent.length > maxLength) {
      newContent = newContent.slice(0, maxLength);
    }

    // Update the span's text content (this is important for reactivity)
    if (spanRef.current) {
      spanRef.current.textContent = newContent;
    }
  };

  return (
    <>
      <div id='Diagnostico_Input'>
        <label htmlFor="span_textarea">
          <span 
            id='span_textarea' 
            role="textbox" 
            contentEditable 
            ref={spanRef} 
            aria-label="Digite sua pergunta aqui"
            onInput={handleContentChange}
          ></span>
          <button type="submit" id='enviar_diagnostico' aria-label="Eviar pergunta" >
            <BiSolidSend size={20} style={{ transform: 'rotate(-45deg)' }} aria-hidden="true" />
          </button>
        </label>
        <p>A AI do Vapt-Vupt pode apresentar informações imprecisas. Por isso, cheque as respostas.</p>
      </div>
    </>
  );
}

export default Diagnostico_Input;
