import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";

export const BannerContainer = styled(Container)(_ => ({
    padding: '0 !important',

    position: 'relative'
}))

export const BannerBox = styled(Box)(({ banner }) => ({
    position: 'absolute',
    top: '0',
    backgroundImage: `url('${banner}')`,
    width: "100%",
    height: "500px",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '-2'
}));

export const ShadowLayerBox = styled(Box)(_ => ({
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '600px',
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
    fontSize:'2rem'
   
}))