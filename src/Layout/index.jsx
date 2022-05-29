import Footer from "../components/Footer"
import Header from "../components/AppBar"
import { Box } from "@mui/material";

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <Box sx={{
                display: 'flex',
                minHeight: '100vh',
            }} className="layout-main">
                {children}
            </Box>
            <Footer />
        </>
    )

}
export default Layout;
