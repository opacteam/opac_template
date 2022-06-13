import React from 'react'
import { SubDescription, SubHeading } from '../../styles';
import { Typography, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { AboutContainer } from './About.style'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
const About = () => {
    const { t } = useTranslation();
    const TEMPLATE = useSelector(state => state.template);
    const about = TEMPLATE.pages.home.about;
    console.log(about)
    return (
        <AboutContainer maxWidth={'xl'} banner={about.banner}>
            <Grid container >
                <Grid item lg={6} md={6} sm={0} />

                <Grid item lg={6} md={6} sm={12}>

                    <SubHeading>{t(about.heading)}</SubHeading>
                    <SubDescription>{t(about.description)}</SubDescription>
                    <Typography style={{
                        display: 'flex',
                        justifyContent: 'left',
                        marginTop: '80px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                    }} as="div"> {t('viewMore')}<span style={{ display: 'flex', alignItems: 'center', }}><ArrowRightAltIcon /></span></Typography>
                </Grid>

            </Grid>
        </AboutContainer>
    )
}

export default About