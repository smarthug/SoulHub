import { Outlet, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Container, IconButton } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const linkBase: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  marginRight: '1rem'
};

export default function RootLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuBookIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>SoulHub</Typography>
          <NavLink to="/" style={({isActive}) => ({...linkBase, fontWeight: isActive ? 700 : 400})}>Home</NavLink>
          <NavLink to="/explore" style={({isActive}) => ({...linkBase, fontWeight: isActive ? 700 : 400})}>Explore</NavLink>
          <NavLink to="/characters" style={({isActive}) => ({...linkBase, fontWeight: isActive ? 700 : 400})}>Characters</NavLink>
          <NavLink to="/create" style={({isActive}) => ({...linkBase, fontWeight: isActive ? 700 : 400})}>Create</NavLink>
          <NavLink to="/dashboard" style={({isActive}) => ({...linkBase, fontWeight: isActive ? 700 : 400})}>Dashboard</NavLink>
          <NavLink to="/about" style={({isActive}) => ({...linkBase, fontWeight: isActive ? 700 : 400})}>About</NavLink>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'grey.100', mt: 'auto' }}>
        <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} SoulHub</Typography>
      </Box>
    </Box>
  );
}
