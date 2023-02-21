import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { FadeInComponent } from '../../helpers/FadeInComponent';
import { useNavigate } from 'react-router-dom';

const twitterLogo = require('../../img/twitterLogo.png')
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
height: 25px;
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
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleTabSelection = (tabPath: string) => {
        navigate(tabPath);
        handleCloseNavMenu();
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
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {tabs.map((tab, index) => (
                                    <MenuItem key={index} onClick={() => handleTabSelection(tab.path)}>
                                        <Typography textAlign="center">{tab.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <LogoContainer>
                                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@benfromtech">
                                    <IconMobile src={mediumLogo} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/benhurley">
                                    <IconMobile src={githubLogo} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/10x_ben">
                                    <IconMobile src={twitterLogo} />
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
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/benhurley">
                                    <IconDesktop src={githubLogo} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/10x_ben">
                                    <IconDesktop src={twitterLogo} />
                                </a>
                            </LogoContainer>
                        </Box>
                    </Toolbar>
                </Container>
            </MUINavBar>
        </FadeInComponent>
    );
}
