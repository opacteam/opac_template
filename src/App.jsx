import React, { Suspense, useEffect } from "react";
import "./App.css";
import { lightTheme, darkTheme } from "./theme/";
import { ROUTES } from "./utils/routes";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Counter from "./components/Counter";
import Layout from "./Layout";
import { doneLoad } from "./constant/load";
import { setTemplate } from "./constant";
import axios from "axios";
function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);
  const enTranslation = useSelector((state) => state.enTranslation);
  const frTranslation = useSelector((state) => state.frTranslation);
  const load = useSelector((state) => state.initialLoad);
  console.log(load);
  useEffect(() => {
    axios.get("https://opac-template-server.onrender.com/api/template").then((res) => {
      dispatch(setTemplate(res.data));
      dispatch(doneLoad());
    });
  }, []);

  i18n.use(initReactI18next).init({
    fallbackLng: "en",

    resources: {
      en: {
        translations: enTranslation,
      },
      fr: {
        translations: frTranslation,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

  i18n.languages = ["en", "fr"];
  i18n.changeLanguage(language);
  return (
    <div className="App">
      <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <CssBaseline enableColorScheme />

        <Router>
          <Suspense fallback={<Loading />}>
            {!load.isLoad ? (
              <Routes>
                {ROUTES.map(({ path, Component }, i) => (
                  <Route
                    key={i}
                    path={path}
                    element={
                      <Layout>
                        <Component />
                      </Layout>
                    }
                  />
                ))}
              </Routes>
            ) : (
              <Loading />
            )}
          </Suspense>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
