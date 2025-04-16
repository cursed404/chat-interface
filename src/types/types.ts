export interface Message {
    id: string;
    text: string;
    senderId: string;
    timestamp: Date;
  }
  
  export interface Participant {
    id: string;
    name: string;
    isOnline: boolean;
  }