import React from 'react';
import { Box, Container } from '@mui/material'
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
const LATEST_HEIGHT = 700;
export const LatestContainer = styled(Container)(_ => ({
    height: `${LATEST_HEIGHT}px`,
    padding: '100px 0px',
    position: 'relative',
}))


export const LatestBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '-100px',
    height: `${LATEST_HEIGHT - 100}px`,
    background: 'blue',
    width: '80vw',
    maxWidth: '1000px',
    left: 0,
    right: 0,
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },

}))

export const CarouselBox = styled(Box)(({ theme, dimension, thumbnail }) => {
    let { width, height } = dimension;
    return ({
        backgroundImage: `url("${thumbnail}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: (_ => {
            if (width <= 600)
                return '100vw'
            if (width > 600 && width <= 1000)
                return '50vw'
            if (width > 1000 && width <= 1200)
                return `${100 / 3}vw`
            else
                return '25vw'
        })(),
    })
});

CarouselBox.propTypes = {
    dimension: PropTypes.object,
    thumbnail: PropTypes.string
}