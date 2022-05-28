import React, { Suspense, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import theme from "./theme/";
import { ROUTES } from "./utils/routes";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";


import { Provider } from 'react-redux';

import Counter from './components/Counter';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Counter />
                <ThemeProvider theme={theme}>
                    <CssBaseline enableColorScheme />
                    <Router>
                        <Suspense fallback={<Loading />}>
                            <Routes>
                                {ROUTES.map(({ path, Component }, i) => (
                                    <Route key={i} path={path} element={<Component />} />
                                ))}
                            </Routes>
                        </Suspense>
                    </Router>
                </ThemeProvider>
            </div>
        </Provider>
    );
}

export default App;
