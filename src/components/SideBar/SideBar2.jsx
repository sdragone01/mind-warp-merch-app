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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
const drawerWidth = 240;
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SideBar2() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const logout = () => {
        Fire.auth().signOut();
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>

                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        Mindwarp Merch
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="add job"
                        edge='end'
                        sx={{ mr: 2 }}
                        onClick={handleOpen}
                    >

                        <AddIcon />

                    </IconButton>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <List>
                                <ListItemButton component={Link} to="/spjob" >Screen Print</ListItemButton>
                                <ListItemButton component={Link} to="/embjob" >Embroidery</ListItemButton>
                                <ListItemButton component={Link} to="/hpjob" >Heat Press</ListItemButton>
                                <ListItemButton component={Link} to="/customjob" >Custom</ListItemButton>

                            </List>

                        </Box>
                    </Modal>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{

                    width: drawerWidth,
                    flexShrink: 0,

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
