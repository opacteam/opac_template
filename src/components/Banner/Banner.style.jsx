import { autocompleteClasses, Box, Button, Container } from "@mui/material";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const BANNER_HEIGHT = '600px';
export const BannerContainer = styled(Container)(_ => ({
    padding: '0 !important',
    height: BANNER_HEIGHT,
    position: 'relative'
}))

export const BannerBox = styled(Box)(({ banner }) => ({
    position: 'absolute',
    top: '0',
    backgroundImage: `url('${banner}')`,
    width: "100%",
    height: BANNER_HEIGHT,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '-2',
    
}));

export const ShadowLayerBox = styled(Box)(_ => ({
    position: 'absolute',
    top: '0',
    width: '100%',
    height: BANNER_HEIGHT,
    backgroundColor: 'rgba(12, 12, 12, 0.7)',
    zIndex: "-1"

}))

export const BannerContent = styled(Box)(_ => ({
  
    position: 'absolute',
    textAlign: 'center',
    top: '100px',
    left: 0,
    right: 0,
    color: 'white',

}))

export const SearchBar = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '100px',
    height: '40px',
    display: 'flex',
    top: '100px',
    left: 0,
    right: 0,
    width: '50vw',
    margin: '0 auto',
    boxShadow: '0px 0px 4px 4px rgba(55,55,55,0.6)',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },

    padding: '0'
}));

export const InputSearch = styled('input')(({ theme }) => ({
    height: '100%',
    width: '80%',
    '&:focus': {
        outline: 'none',
    }
}));

export const SubmitSearch = styled(Button)(_ => ({
    flexGrow: '1',
    borderRadius: 0

}))