import React, { useEffect, useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { Box, Button, } from "@mui/material";
import { AppbarContainer, AppbarLogo, AppbarLogoBox, AppbarRoot } from "./AppBar.style";

import { useSelector } from 'react-redux';

const Appbar = () => {
    const TEMPLATE = useSelector((state) => state.template);
    const [isScroll, setIsScroll] = useState(false)
    const AppbarConstant = TEMPLATE.components.AppBar;
    const theme = useTheme();

    const pages = AppbarConstant.AppBarLinks;
    const { logo, siteName, baseURL } = TEMPLATE;
    useEffect(() => {
        const handleScroll = () => {

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
