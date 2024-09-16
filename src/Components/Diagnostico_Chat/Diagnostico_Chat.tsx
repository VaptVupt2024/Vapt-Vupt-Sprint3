import React, { useEffect, useRef } from 'react';
import LogoIcon from '../../assets/Logo_icon/Logo_icon';
import './Diagnostico_Chat.css';

const DiagnosticoChat: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const initializeChat = () => {
    // Remove existing Watson Assistant Chat if already initialized
    if (window.watsonAssistantChatOptions) {
      const watsonChatHost = document.querySelector('.WatsonAssistantChatHost');
      if (watsonChatHost && watsonChatHost.parentNode) {
        watsonChatHost.parentNode.removeChild(watsonChatHost);
      }
      window.watsonAssistantChatOptions = undefined; // Set to undefined
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
              } else {
                console.error("Chatbot host or target container not found!");
              }
              resolve();
            }, 200);
          } else {
            console.error("Initial chat container not found!");
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

  // Initialize Watson chat on component mount
  useEffect(() => {
    initializeChat();
    
    // Clean up the chat when component unmounts
    return () => {
      const watsonChatHost = document.querySelector('.WatsonAssistantChatHost');
      if (watsonChatHost && watsonChatHost.parentNode) {
        watsonChatHost.parentNode.removeChild(watsonChatHost);
      }
      window.watsonAssistantChatOptions = undefined;
    };
  }, []);

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
