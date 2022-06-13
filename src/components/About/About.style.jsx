import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutContainer = styled(Container)(({ banner, theme }) => ({
    backgroundImage: `url("${banner}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    height: '80vh',
    width: '100vw',
    paddingTop: '100px',
    paddingBottom: '100px',
}))
