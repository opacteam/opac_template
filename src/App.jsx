import React, { Suspense, } from 'react';
import './App.css';
import { lightTheme, darkTheme } from "./theme/";
import { ROUTES } from "./utils/routes";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector, } from 'react-redux';
import './i18n/config';

import Counter from './components/Counter';
import Layout from './Layout';
import i18n from './i18n/config';
function App() {
    const theme = useSelector((state) => state.theme);
   

    const {language} = useSelector((state)=>state.language);


   i18n.changeLanguage(language)
    return (

        <div className="App">
           

            <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
                <CssBaseline enableColorScheme />
                <Layout>
                    <Router>
                        <Suspense fallback={<Loading />}>
                            <Routes>
                                {ROUTES.map(({ path, Component }, i) => (
                                    <Route key={i} path={path} element={<Component />} />
                                ))}
                            </Routes>
                        </Suspense>
                    </Router>
                </Layout>
            </ThemeProvider>
        </div>
        

    );
}

export default App;
