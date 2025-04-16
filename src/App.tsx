import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ParticipantsList } from './components/ParticipantsList';
import { ChatMessages } from './components/ChatMessages';
import { Message, Participant } from './types/types';
import './styles/global.less';

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([
    { id: '1', name: 'User 1', isOnline: true },
    { id: '2', name: 'User 2', isOnline: true },
    { id: '3', name: 'User 3', isOnline: true },
    { id: '4', name: 'User 4', isOnline: true },
    { id: '5', name: 'User 5', isOnline: true },
  ]);

  const handleSendMessage = (text: string) => {
    const newParticipantId = `user-${Date.now()}`;
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      text,
      senderId: newParticipantId,
      timestamp: new Date(),
    };

    setParticipants(prev => [
      ...prev,
      { id: newParticipantId, name: `User ${prev.length + 1}`, isOnline: true }
    ]);

    setMessages(prev => [...prev, newMessage]);
  };

  const handleDeleteParticipant = (participantId: string) => {
    setParticipants(prev => prev.filter(p => p.id !== participantId));
    setMessages(prev => prev.filter(msg => msg.senderId !== participantId));
  };

  return (
    <div className="chat-container">
      <Header />
      <div className="main-content">
        <ParticipantsList 
          participants={participants}
          onDelete={handleDeleteParticipant}
        />
        <ChatMessages messages={messages} />
      </div>
      <Footer onSend={handleSendMessage} />
    </div>
  );
}