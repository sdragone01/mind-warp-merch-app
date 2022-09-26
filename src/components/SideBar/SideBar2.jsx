import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
import Fire from '../../config/Fire';


import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

export default function SideBar2() {

    const logout = () => {
        Fire.auth().signOut();
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },

                }}
            >
                <Toolbar>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />


                    </ListItemButton>

                </Toolbar>
            </AppBar>


            <Drawer
                sx={{

                    width: drawerWidth,
                    flexShrink: 0,
                    zIndex: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >

                <Toolbar />
                <Divider />
                <List>
                    <ListItemButton component={Link} to='/'>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        Home
                    </ListItemButton>
                    <br />

                    <ListItemButton component={Link} to='/calendar'>

                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        Calendar
                    </ListItemButton>


                    <br />
                    <ListItemButton component={Link} to="/jobs" >
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        Jobs
                    </ListItemButton>
                    <br />
                    <ListItemButton component={Link} to="/artwork" >
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        Artwork
                    </ListItemButton>
                    <br />
                    <ListItemButton >
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        Customers
                    </ListItemButton>


                </List>
                <Divider />
                <List>
                    <ListItemButton onClick={logout} >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        Logout
                    </ListItemButton>
                </List>

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />

            </Box>
        </Box >
    );
}
