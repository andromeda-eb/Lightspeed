import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles, AppContainer } from "./components/assets/GlobalStyles.style";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NotFound from "./components/not-found/NotFound";
import Nav from "./components/navbar/Nav";
import Settings from "./components/settings/Settings";
import Footer from "./components/footer/Footer";
import './index.css'
import useSettingsAdapter from "./components/adapters/useSettingsAdapter";
import { useState, useEffect } from "react";

const App = () => {
  const defaultTheme = "default";
  const defaultFont = "Quicksand Regular";
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [currentFont, setCurrentFont] = useState(defaultFont);
  const {bodyColor, primaryColor, textColor, error} = useSettingsAdapter(currentTheme);

  useEffect(() => {
    if(document.cookie.indexOf("settings") === -1) return;

    const [name, json] = document.cookie.split("=");
    const settings = JSON.parse(json);
    setCurrentTheme(settings["theme"]);
    setCurrentFont(settings["font"]);
  },[]);

  useEffect(() => {
    const settings = {font : currentFont, theme: currentTheme};
    document.cookie = "settings=" + JSON.stringify(settings);
  }, [currentTheme, currentFont]);

  return (
    <AppContainer font={ currentFont }>
      <GlobalStyles bodyColor={ bodyColor } textColor={ textColor }/>
      <Router>
      <Nav primaryColor={ primaryColor } textColor={ textColor }/>
        <Routes>
          <Route path="/" element={ <Home bodyColor={ bodyColor } primaryColor={ primaryColor } textColor={ textColor } /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/settings" element={ <Settings currentTheme={ currentTheme } setCurrentTheme={ setCurrentTheme } currentFont={ currentFont } setCurrentFont={ setCurrentFont } primaryColor={ primaryColor  } /> } />
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </Router>
      <Footer />
    </AppContainer>
  );
}

export default App;
