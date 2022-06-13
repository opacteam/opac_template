import { Card, CardMedia, Container } from "@mui/material";
import { styled } from "@mui/material";

export const FeatureCollectionContainer = styled(Container)(({ theme }) => ({
    height: 'auto',
    minHeight: '600px',
    paddingTop: '120px',
    paddingBottom: '120px',
    backgroundColor: theme.palette.secondary.dark,
    width: '100%',
    color: 'white',
}))



export const FCCard = styled(Card)(({ theme }) => ({
    cursor:'pointer',
    marginTop:'100px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.secondary.dark,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
    
}))


export const FCCardMedia = styled(CardMedia)(({ theme }) => ({
    width: '50%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))


