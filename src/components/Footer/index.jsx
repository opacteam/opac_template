


import React from 'react'
import { Typography, Link, Box, Container } from '@mui/material'
import { useSelector } from 'react-redux';
export const Copyright = () => {
    const TEMPLATE = useSelector((state) => state.template);
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                {TEMPLATE.siteName}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (<Box
        component="footer"
        sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
        }}
    >
        <Container maxWidth="sm">
            <Typography variant="body1">
                {/* My sticky footer can be found here. */}
            </Typography>
            <Copyright />
        </Container>
    </Box>)



}

export default Footer;

