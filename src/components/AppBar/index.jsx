import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import AppbarMobile from "./AppBarMobile";
import AppbarDesktop from "./AppbarDesktop";
import { TEMPLATE } from '../../constant';

const Appbar = () => {
    const AppbarConstant = TEMPLATE.components.AppBar
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop links={AppbarConstant.AppBarLinks} matches={matches} />}
        </>
    );
}
export default Appbar;
