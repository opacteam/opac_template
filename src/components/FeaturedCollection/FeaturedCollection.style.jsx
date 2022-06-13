import { Container } from "@mui/material";
import { styled } from "@mui/material";

export const FeatureCollectionContainer = styled(Container)(({ theme }) => ({
    height: '80vh',
    minHeight: '600px',
    backgroundColor: theme.palette.secondary.dark,
    width: '100%',
    color: 'white',
}))