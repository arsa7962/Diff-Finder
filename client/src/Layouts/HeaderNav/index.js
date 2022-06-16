import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useTheme } from '@material-ui/core/styles';


const HeaderNav = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{background: theme.palette.secondary.main}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AccountTreeIcon sx={{ display: {  md: 'flex' }, mr: 2, color: theme.palette.primary.main }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {  md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '1px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Diff Finder
          </Typography>

   
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderNav;
