import React, { useEffect, useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { AppBar, Container, useMediaQuery, Box, Button, Typography } from "@mui/material";
import { AppbarContainer, AppbarLogo, AppbarLogoBox, AppbarRoot } from "./AppBar.style";
import { TEMPLATE } from '../../constant';

const Appbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const AppbarConstant = TEMPLATE.components.AppBar;
    const theme = useTheme();

    /**
     * A boolean indicates viewport, 
     * return true if meets the condition
     */
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const pages = AppbarConstant.AppBarLinks;
    const { logo, siteName, baseURL } = TEMPLATE;
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            const scrolled = window.scrollY > 80
            console.log(scrolled)
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
                <AppbarContainer >
                    <AppbarLogoBox onClick={_ => window.location = baseURL} >
                        <AppbarLogo component="img" src={logo} alt={`${siteName} logo`}></AppbarLogo>
                    </AppbarLogoBox>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
                        {pages.map((page, i) => (
                            <Button
                                key={`${page}-${i}`}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                </AppbarContainer>
            </AppbarRoot>
        </>
    );
}
export default Appbar;
