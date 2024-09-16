// src/global.d.ts

export {};

declare global {
    interface WatsonAssistantInstance {
        render: (options: { element: HTMLElement }) => void;
      }
      
      interface WatsonAssistantChatOptions {
        integrationID: string;
        region: string;
        serviceInstanceID: string;
        clientVersion?: string;
        onLoad: (instance: WatsonAssistantInstance) => Promise<void>;
      }
      
      // Extend the Window interface to include the optional watsonAssistantChatOptions
      interface Window {
        watsonAssistantChatOptions?: WatsonAssistantChatOptions;
      }
}
