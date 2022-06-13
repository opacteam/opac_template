import { Typography } from "@mui/material";
import styled from "@emotion/styled";


export const SubHeading = styled(Typography)(_ => ({
    opacity: '.5',
    color: "#111111",
    fontSize: '13px',
    textTransform: 'uppercase',
    textAlign: 'left'
}));


export const SubDescription = styled(Typography)(({ theme }) => ({
    marginTop: '25px',
    color: 'black',
    lineHeight: '1.3',
    letterSpacing: '1.5px',
    textAlign: 'left',
    fontFamily: "'Overlock', cursive",
    fontWeight:'600',
 
    [theme.breakpoints.down('md')]: {
        fontSize: '1.8rem',

    },
    [theme.breakpoints.only('md')]: {
        fontSize: '2.5rem',

    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',

    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',

    },

}))