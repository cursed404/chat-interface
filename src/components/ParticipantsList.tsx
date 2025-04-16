import { IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Participant } from '../types/types';

interface ParticipantsListProps {
  participants: Participant[];
  onDelete: (id: string) => void;
}

export const ParticipantsList = ({ participants, onDelete }: ParticipantsListProps) => (
  <div style={{ overflowY: 'auto', padding: 16, width: '100%' }}>
    <Typography variant="h6" gutterBottom>
      Участники ({participants.length})
    </Typography>
    <List>
      {participants.map(participant => (
        <ListItem
          key={participant.id}
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => onDelete(participant.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={participant.name}
            secondary={participant.isOnline ? 'Online' : 'Offline'}
          />
        </ListItem>
      ))}
    </List>
  </div>
);