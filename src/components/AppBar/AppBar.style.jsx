import { Container, IconButton, List, Typography, Box, AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppbarRoot = styled(AppBar)(({ isScroll, theme }) => ({
    backgroundColor: !isScroll ? 'transparent' : theme.palette.primary.main,
    boxShadow: 'none'
}))
export const AppbarContainer = styled(Container)(() => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    height: '80px',

}));

export const AppbarLogoBox = styled(Box)(_ => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'

}));


export const AppbarLogo = styled(Box)(() => ({

    height: '50px'

}));