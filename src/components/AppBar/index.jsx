import React, { useEffect, useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { Box, Button, } from "@mui/material";
import { AppbarContainer, AppbarLogo, AppbarLogoBox, AppbarRoot } from "./AppBar.style";

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
const Appbar = () => {
    const TEMPLATE = useSelector((state) => state.template);
    const [isScroll, setIsScroll] = useState(false);
    const [isClicked, setIsClicked] = useState(false)
    const AppbarConstant = TEMPLATE.components.AppBar;
    const { t } = useTranslation();


    const pages = AppbarConstant.AppBarLinks;
    const { logo, siteName, baseURL } = TEMPLATE;
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 80

            if (scrolled) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <>
            <AppbarRoot position="fixed" className="header" scroll={isScroll} >
                <AppbarContainer maxWidth={true}  >
                    <AppbarLogoBox onClick={_ => window.location = baseURL} >
                        <AppbarLogo component="img" src={logo} alt={`${siteName} logo`}></AppbarLogo>
                    </AppbarLogoBox>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
                        {pages.map((page, i) => (
                            <Button
                                key={`${page}-${i}`}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {t(page.title)}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }} style={{ alignItems: 'center' }}>
                        <div id="nav-icon4" className={isClicked ? 'open' : ''} onClick={_ => setIsClicked(!isClicked)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div></Box>
                </AppbarContainer>
            </AppbarRoot>
        </>
    );
}
export default Appbar;
