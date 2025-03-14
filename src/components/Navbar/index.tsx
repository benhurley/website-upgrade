import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import { useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { IconButton } from '@mui/material';

const tabs = [
    { name: 'Home', path: '/' },
    { name: 'Websites', path: '/websites' },
    { name: "Chatbots", path: "/chatbots" },
    { name: "Save Your Balls", path: '/saveyourballs'},
    { name: 'Contact', path: '/contact' },
    { name: 'Donate', path: 'https://pay.justben.fyi' }
];

const MUINavBar = styled(AppBar)`
position: sticky;
background-color: transparent !important;
`

export const NavBar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleTabSelection = (tabPath: string) => {
        navigate(tabPath);
        setTimeout(() => setMenuOpen(false), 200)
    }

    const muiStyleOverrides = {
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: 'white'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            width: '55%',
            maxWidth: '250px',
            left: '0',
            borderRight: '0.5px solid #44464B'
        },
        bmMenu: {
            background: 'black',
            padding: '2em 1.5em 0',
            overflow: 'none !important'
        },
        bmMorphShape: {
            fill: 'white'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.5em',
        },
        bmItem: {
            color: 'white',
            margin: '0.5em 0',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.4)'
        }
    }

    return (
        <FadeInComponent>
            <MUINavBar>
                <Container maxWidth="xl" sx={{backgroundColor: 'black'}}>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => setMenuOpen(!menuOpen)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                isOpen={menuOpen}
                                onClose={() => setMenuOpen(false)}
                                styles={muiStyleOverrides}
                                customBurgerIcon={false}
                            >
                                {tabs.map((tab, index) => {
                                    return tab.path.includes('https') ?
                                        (<a style={{ top: 0,  marginTop: 3, marginBottom: 3, marginLeft: 8, color: 'white', display: 'flex', justifyContent: 'left', fontSize: 20 }}
                                            aria-label="coffee link" target="_blank" rel="noopener noreferrer" href={tab.path}>{tab.name}</a>)
                                        :
                                        (<div onClick={() => handleTabSelection(tab.path)}>
                                            <FadeInComponent key={index}>
                                                <Button
                                                    key={index}
                                                    onClick={() => handleTabSelection(tab.path)}
                                                    sx={{ my: 3, color: 'white', display: 'block', fontSize: 20, textAlign: 'left', textTransform: 'capitalize'}}
                                                >
                                                    {tab.name}
                                                </Button>
                                            </FadeInComponent>
                                        </div>)
                                })}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </MUINavBar>
        </FadeInComponent>
    );
}
