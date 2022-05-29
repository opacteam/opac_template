


import React from 'react';
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import {
    AppbarActionIcons,
    AppbarContainer,
    AppbarHeader,
    MyList,
} from './AppBar.style'
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PropTypes from 'prop-types'

const AppbarDesktop = ({ links }) => {

    return (
        <AppbarContainer>
            <AppbarHeader variant="h4">My Bags</AppbarHeader>
            <MyList type="row">
                {links.map((link, i) => <ListItemText key={`AppbarDesktopList-${i}`} primary={link.title} />)}
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>

        </AppbarContainer>
    )
}

AppbarDesktop.propTypes = {
    links: PropTypes.array.isRequired
};

export default AppbarDesktop;

