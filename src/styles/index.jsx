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
    lineHeight: '1.1',
    letterSpacing: '1px',
    textAlign: 'left',

    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',

    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.25rem',

    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.8rem',

    },

}))