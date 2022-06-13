import React from 'react'
import { SubDescription, SubHeading, ViewMore } from '../../styles';
import { FeatureCollectionContainer } from './FeaturedCollection.style'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FeaturedCollectionCard from './FeaturedCollectionCard'
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
const FeaturedCollection = () => {
    const TEMPLATE = useSelector(state => state.template);
    const fc = TEMPLATE.pages.home.featuredCollection;
    const { t } = useTranslation();
    return (
        <FeatureCollectionContainer maxWidth={'false'}>


            <Container maxWidth="lg">
                <SubHeading style={{ color: 'white' }} as="h2">{t(fc.heading)}</SubHeading>
                <SubDescription style={{ color: 'white' }} as="p">{t(fc.description)}</SubDescription>
                <ViewMore href="/" text={t('viewMore')} />
                <Grid container spacing={2}>
                    {fc.items.map((item, i) => {
                        let { title, author, tag, thumbnail } = item;
                        return (
                            <Grid item sx={12} md={6}>
                                <FeaturedCollectionCard item={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

        </FeatureCollectionContainer>
    )
}

export default FeaturedCollection;