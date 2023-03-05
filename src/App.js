import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
