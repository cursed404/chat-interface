import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => (
  <AppBar position="static" sx={{ height: 50, flexShrink: 0 }}>
    <Toolbar>
      <Typography variant="h6">Чат комнаты</Typography>
    </Toolbar>
  </AppBar>
);