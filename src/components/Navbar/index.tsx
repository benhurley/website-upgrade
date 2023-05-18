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

const linkedinLogo = require('../../img/linkedinLogo.png')
const githubLogo = require('../../img/githubLogo.png')
const mediumLogo = require('../../img/mediumLogo.png')

const tabs = [{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }, { name: 'Domains', path: '/domains' }];

const MUINavBar = styled(AppBar)`
position: sticky;
background-color: black !important;
font-family: 'Kdam Thmor Pro', sans-serif;
`

const IconDesktop = styled.img`
display: flex;
padding-top: 20px;
padding-left: 25px;
height: 20px;
`

const LogoContainer = styled.div`
display: flex;
justify-content: end;
width: 100%;
`

const IconMobile = styled.img`
display: flex;
padding-top: 12px;
padding-left: 25px;
height: 20px;
`

export const NavBar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleTabSelection = (tabPath: string) => {
        navigate(tabPath);
        setTimeout(() => setMenuOpen(false), 200)
    }

    var styles = {
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
            width: '50%',
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
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.4)'
        }
    }

    return (
        <FadeInComponent>
            <MUINavBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                isOpen={menuOpen}
                                onStateChange={() => setMenuOpen(menuOpen)}
                                styles={styles}
                                customBurgerIcon={false}
                            >
                                {tabs.map((tab, index) => (
                                    <FadeInComponent key={index}>
                                        <Button
                                            key={index}
                                            onClick={() => handleTabSelection(tab.path)}
                                            sx={{ my: 3, color: 'white', display: 'block', fontFamily: 'Kdam Thmor Pro, sans-serif', fontSize: 20 }}
                                        >
                                            {tab.name}
                                        </Button>
                                    </FadeInComponent>
                                ))}
                            </Menu>
                            <LogoContainer>
                                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@benfromtech">
                                    <IconMobile src={mediumLogo} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/benjamin-hurley">
                                    <IconMobile src={linkedinLogo} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/benhurley">
                                    <IconMobile src={githubLogo} />
                                </a>
                            </LogoContainer>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {tabs.map((tab, index) => (
                                <FadeInComponent key={index}>
                                    <Button
                                        key={index}
                                        onClick={() => handleTabSelection(tab.path)}
                                        sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Kdam Thmor Pro, sans-serif' }}
                                    >
                                        {tab.name}
                                    </Button>
                                </FadeInComponent>
                            ))}
                            <LogoContainer>
                                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@benfromtech">
                                    <IconDesktop src={mediumLogo} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/benjamin-hurley">
                                    <IconDesktop src={linkedinLogo} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/benhurley">
                                    <IconDesktop src={githubLogo} />
                                </a>
                            </LogoContainer>
                        </Box>
                    </Toolbar>
                </Container>
            </MUINavBar>
        </FadeInComponent>
    );
}
