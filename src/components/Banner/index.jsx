
import React from 'react';
import { TEMPLATE } from '../../constant';
import { BannerContainer, BannerBox, ShadowLayerBox, BannerContent, SearchBar, InputSearch, SubmitSearch, SiteHeading, SiteDescription } from './Banner.style';
import { Typography, Button, Grid, Paper, InputBase, IconButton, } from '@mui/material';
import { useSelector } from 'react-redux/';
import SearchIcon from '@mui/icons-material/Search';
import { setHeading } from '../../constant'
const Banner = () => {

    const TEMPLATE = useSelector((state) => state.template);
    const { banner, heading, description } = TEMPLATE;
    return (
        // <BannerContainer maxWidth="false" className="bannerContainer">
        //     <BannerBox banner={banner}></BannerBox>
        //     <BannerContent>
        //         <Typography variant="h1" style={{ fontSize: '50px', wordBreak: 'break-word' }}  >
        //             {heading}
        //         </Typography>
        //         {/*
        //         <Typography variant="h2"  >
        //             {description}
        //         </Typography> */}
        //         <SearchBar>
        //             <InputSearch placeholder='Enter your keyword' />
        //             <SubmitSearch variant="contained">Search</SubmitSearch>
        //         </SearchBar>

        //     </BannerContent>
        //     <ShadowLayerBox />
        // </BannerContainer>
        <BannerContainer maxWidth={false} className="bannerContainer" banner={banner}>

            <Grid container spacing={2}>
                <Grid item md={6} sm={12}>
                    <SiteHeading variant="h1" >
                        {heading}
                    </SiteHeading>
                    <SiteDescription variant="p"  >
                        {description}
                    </SiteDescription>
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12} style={{ width: '100%' }}>

                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '500px', marginTop:'80px' }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Enter your search"
                            inputProps={{ 'aria-label': 'enter your search' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>

                    </Paper>

                </Grid>
            </Grid>
        </BannerContainer>
    )
}


export default Banner