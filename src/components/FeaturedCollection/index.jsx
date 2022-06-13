import React from 'react'
import { SubDescription, SubHeading } from '../../styles';
import { FeatureCollectionContainer } from './FeaturedCollection.style'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
const FeaturedCollection = () => {
    const TEMPLATE = useSelector(state => state.template);
    const fc = TEMPLATE.pages.home.featuredCollection;
    const { t } = useTranslation();
    return (
        <FeatureCollectionContainer maxWidth={'false'}>


            <SubHeading style={{ color: 'white' }} as="h2">{t(fc.heading)}</SubHeading>
            <SubDescription style={{ color: 'white' }} as="p">{t(fc.description)}</SubDescription>
        </FeatureCollectionContainer>
    )
}

export default FeaturedCollection;