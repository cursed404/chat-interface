import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Message } from '../types/types';

interface ChatMessagesProps {
  messages: Message[];
}

export const ChatMessages = ({ messages }: ChatMessagesProps) => (
  <div style={{ overflowY: 'auto', height: '100%', padding: 16 }}>
    <Typography variant="h6" gutterBottom>
      Сообщения ({messages.length})
    </Typography>
    <List>
      {messages.map(message => (
        <ListItem key={message.id}>
          <ListItemText
            primary={message.text}
            secondary={`${new Date(message.timestamp).toLocaleTimeString()}`}
          />
        </ListItem>
      ))}
    </List>
  </div>
);