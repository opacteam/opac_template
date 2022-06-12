import { Box, Button, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BANNER_HEIGHT = '80vh';
export const BannerContainer = styled(Container)(({ theme, banner }) => ({
    padding: '150px 20px',
    height: BANNER_HEIGHT,
    position: 'relative',
    backgroundImage: `url('${banner}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxHeight: '800px',
    [theme.breakpoints.down('md')]: {
        padding: '200px 20px',

    },
    filter: 'brightness(100%)',
    color: 'white',
    textAlign: "left"
}))



export const ShadowLayerBox = styled(Box)(_ => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: BANNER_HEIGHT,
    backgroundColor: 'rgba(12, 12, 12, 0.7)',
    zIndex: "-1"

}))



export const SearchBar = styled(Box)(({ theme }) => ({

    height: '40px',
    display: 'flex',

    width: '100%',
    margin: '0 auto',
    boxShadow: '0px 0px 4px 4px rgba(55,55,55,0.6)',


    padding: '0'
}));

export const InputSearch = styled('input')(({ theme }) => ({
    height: '100%',
    width: '100%',
    '&:focus': {
        outline: 'none',
    }
}));

export const SubmitSearch = styled(Button)(_ => ({
    flexGrow: '1',
    borderRadius: 0

}))
export const SiteHeading = styled(Typography)(({ theme }) => ({
    fontSize: '80px',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '40px',

    },
}))

export const SiteDescription = styled(Typography)(({ theme }) => ({
    fontSize: '16px',


}))