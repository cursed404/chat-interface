import { useState } from 'react';
import { TextField, Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface FooterProps {
  onSend: (text: string) => void;
}

export const Footer = ({ onSend }: FooterProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <Box sx={{ 
      height: 100, 
      borderTop: '1px solid #ddd',
      padding: 2,
      flexShrink: 0,
      display: 'flex',
      gap: 2
    }}>
      <TextField
        fullWidth
        label="Введите сообщение"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <IconButton 
        color="primary" 
        onClick={handleSubmit}
        disabled={!message.trim()}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};