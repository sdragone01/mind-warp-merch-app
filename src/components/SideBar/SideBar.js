import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// mock
import account from './account';
// hooks
import useResponsive from './useResponsive';
// components
import Logo from './Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import AvatarImg from '../../assets/illustration_avatar.png';
import userAvatar from '../../assets/avatar_default.jpeg';
//
import navConfig from './NavConfig';
import Fire from '../../config/Fire'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
    },
}));

const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
    isOpenSidebar: PropTypes.bool,
    onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
    const { pathname } = useLocation();

    const isDesktop = useResponsive('up', 'lg');

    const logOut = () => {
        Fire.auth().signOut();
    };


    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
            }}
        >
            <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
                <h1>Mind Warp Merch</h1>
            </Box>


            <Box sx={{ mb: 5, mx: 2.5, backgroundColor: '#e0e0e0', borderRadius: '20px' }}>
                <Link underline="none" component={RouterLink} to="#">
                    <AccountStyle >
                        <Avatar src={userAvatar} alt="photoURL" />
                        <Box sx={{ ml: 2, }}>
                            <Typography variant="subtitle2" sx={{ color: '#212121' }}>
                                {account.displayName}
                            </Typography>

                        </Box>
                    </AccountStyle>
                </Link>
                <Button variant="contained" sx={{ width: '100%', backgroundColor: '#212121', color: '#fff' }} onClick={logOut} > Logout </Button>

            </Box>

            <NavSection navConfig={navConfig} />

            <Box sx={{ flexGrow: 1 }} />


        </Scrollbar>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: DRAWER_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: 'background.default',
                            borderRightStyle: 'dashed',
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
}

