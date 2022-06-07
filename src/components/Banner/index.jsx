
import React from 'react';
import { TEMPLATE } from '../../constant';
import { BannerContainer, BannerBox, ShadowLayerBox, BannerContent, SearchBar, InputSearch, SubmitSearch } from './Banner.style';
import { Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux/';
import { setHeading } from '../../constant'
const Banner = () => {

    const TEMPLATE = useSelector((state) => state.template);
    const { banner, heading, description } = TEMPLATE;
    return (
        <BannerContainer maxWidth="false" className="bannerContainer">
            <BannerBox banner={banner}></BannerBox>
            <BannerContent>
                <Typography variant="h1" style={{ fontSize: '50px', wordBreak: 'break-word' }}  >
                    {heading}
                </Typography>
                {/*
                <Typography variant="h2"  >
                    {description}
                </Typography> */}
                <SearchBar>
                    <InputSearch placeholder='Enter your keyword' />
                    <SubmitSearch variant="contained">Search</SubmitSearch>
                </SearchBar>

            </BannerContent>
            <ShadowLayerBox />
        </BannerContainer>
    )
}


export default Banner