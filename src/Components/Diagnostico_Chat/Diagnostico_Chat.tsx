import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../assets/Logo_icon/Logo_icon';
import './Diagnostico_Chat.css';

const DiagnosticoChat: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const initializeChat = () => {
    if (window.watsonAssistantChatOptions) {
      const watsonChatHost = document.querySelector('.WatsonAssistantChatHost');
      if (watsonChatHost && watsonChatHost.parentNode) {
        watsonChatHost.parentNode.removeChild(watsonChatHost);
      }
      window.watsonAssistantChatOptions = undefined;
    }

    window.watsonAssistantChatOptions = {
      integrationID: "22698e0d-9273-4815-aaa7-e41b1d4d9f59",
      region: "us-south",
      serviceInstanceID: "fff86d85-1a9e-4e63-b2e5-22495dbd3b6d",
      onLoad: (instance) => {
        return new Promise<void>((resolve) => {
          if (chatContainerRef.current) {
            instance.render({ element: chatContainerRef.current });

            setTimeout(() => {
              const watsonChatHost = document.querySelector('.WatsonAssistantChatHost');
              if (watsonChatHost && chatContainerRef.current && watsonChatHost instanceof HTMLElement) {
                chatContainerRef.current.appendChild(watsonChatHost);
                watsonChatHost.style.width = '100%';
              }
              resolve();
            }, 200);
          }
        });
      },
    };

    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
      window.watsonAssistantChatOptions.clientVersion || 'latest'
    }/WatsonAssistantChatEntry.js`;
    document.head.appendChild(script);
  };

  // Attach event listener when button is available
  useEffect(() => {
    const observeButton = () => {
      const buttonClass = "WAC__button-0.cds--chat-btn.cds--chat-btn--quick-action.cds--btn.cds--btn--sm.cds--layout--size-sm.cds--btn--ghost";
      
      // MutationObserver to detect when the button is added to the DOM
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (mutation.type === 'childList') {
            const button = document.querySelector(`button.${buttonClass}`);
            if (button) {
              button.addEventListener('click', () => {
                navigate('/Oficinas');
              });
              observer.disconnect(); // Stop observing once the button is found
            }
          }
        });
      });

      // Start observing the chat container for changes
      if (chatContainerRef.current) {
        observer.observe(chatContainerRef.current, { childList: true, subtree: true });
      }
    };

    initializeChat();
    observeButton();

    // Clean up on unmount
    return () => {
      const watsonChatHost = document.querySelector('.WatsonAssistantChatHost');
      if (watsonChatHost && watsonChatHost.parentNode) {
        watsonChatHost.parentNode.removeChild(watsonChatHost);
      }
      window.watsonAssistantChatOptions = undefined;
    };
  }, [navigate]);

  return (
    <div className="TUDO_CHATBOT ani_entra2">
      <div className="dentro_chatbot">
        <div className='itens_antes_chat'>
            <LogoIcon width="90px" height="89px"/>
            <p className="titu_chat">Vapt-Vupt</p>
            <p className="sub_titu">Tudo pronto para começar?</p>
        </div>
        <div ref={chatContainerRef} id="watson-chat-container">
          </div> 
      </div>
    </div>
  );
};

export default DiagnosticoChat;
