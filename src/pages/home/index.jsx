import React from "react";
import { Button } from "@mui/material";
import Banner from "../../components/Banner";
import Latest from '../../components/Latest'
import ExploreCollection from '../../components/ExploreCollection'
const Home = () => {
    return (
        <>
            <Banner />
            <Latest />
            <ExploreCollection/>
        </>
    );
};

export default Home;
