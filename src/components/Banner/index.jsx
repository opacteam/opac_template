
import React from 'react';
import { TEMPLATE } from '../../constant';
import { BannerContainer, BannerBox, ShadowLayerBox, BannerContent } from './Banner.style';

const Banner = () => {
    const { banner, heading } = TEMPLATE;
    return (
        <BannerContainer maxWidth="false" className="bannerContainer">
            <BannerBox banner={banner}></BannerBox>
            <BannerContent><h1>{heading}</h1></BannerContent>
            <ShadowLayerBox />
        </BannerContainer>
    )
}


export default Banner