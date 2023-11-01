import { Box, CssBaseline, Divider, 
  IconButton, List, ThemeProvider, Toolbar, 
  Typography, createTheme } from "@mui/material";
import React from "react";
import AppBar from "./components/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';import Drawer from "./components/Drawer";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './components/listItems';
import Dashboard from "./pages/Dashboard";
import StickyFooter from "./components/StickyFooter";
import Container from '@mui/material/Container';

import { logout } from "./services/auth.service";
import { Outlet } from "react-router-dom";

export default function Layout() {
const defaultTheme = createTheme();

const [open, setOpen] = React.useState(true);
const toggleDrawer = () => {
setOpen(!open);
};
    return(
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Aboho Sales Dashboard
            </Typography>
            <IconButton color="inherit" onClick={logout}>
              <LogoutSharpIcon/>
            </IconButton>      


          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>

            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {/*Router Here */}
                  <Outlet></Outlet>
                </Container>
                <StickyFooter/>
            </Box>
        </Box>
    </ThemeProvider>
    );
}