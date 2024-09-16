// src/types/watson-assistant.d.ts

declare module '@ibm-watson/assistant-web-chat' {
    // Define types for WatsonAssistantInstance, etc.
    export interface WatsonAssistantInstance {
      render: (options: { element: HTMLElement }) => void;
      // ... other methods and properties
    }
  
    // ... other types
  }