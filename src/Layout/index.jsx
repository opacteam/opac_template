import Footer from "../components/Footer"
import Header from "../components/AppBar"

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <div class="layout-main">
                {children}
            </div>
            <Footer />
        </>
    )

}
export default Layout;
