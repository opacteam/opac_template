import { AppbarContainer, AppbarHeader } from "./AppBar.style";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";


export default function AppbarMobile({ matches }) {
  
    return (
        <AppbarContainer>
            <IconButton >
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">
                My Bags
            </AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>

        </AppbarContainer>
    );
}