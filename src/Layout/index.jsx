import Footer from "../components/Footer"
import AppBar from "../components/AppBar"
import { Box } from "@mui/material";
import { LayoutMainBox } from "./Layout.style";

const Layout = ({ children }) => {
    return (
        <>
            <AppBar />
            <LayoutMainBox>{children}</LayoutMainBox>
            <Footer />
        </>
    )

}
export default Layout;
