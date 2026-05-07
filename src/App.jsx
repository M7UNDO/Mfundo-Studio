import {useState, useEffect} from "react";
import ThemeContext from "./context/ThemeContext";
import {HashRouter, Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AbsaCaseStudy from "./pages/AbsaCaseStudy";
import LnaCaseStudy from "./pages/LnaCaseStudy";
import NorthstarCaseStudy from "./pages/NorthstarCaseStudy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/absa-nextgen-wealth-studio" element={<AbsaCaseStudy />} />
              <Route path="/portfolio/ngengebule-attorneys" element={<LnaCaseStudy />} />
              <Route path="/portfolio/northstar-shop" element={<NorthstarCaseStudy />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </HashRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
