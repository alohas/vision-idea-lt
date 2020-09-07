import React from "react";

//Components
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Specials from "./components/Specials";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer/";
import Brands from "./components/Brands/";
import TryOnTutorial from "./components/TryOnTutorial";

function App() {
  return (
    <div className="App">
      <header>
        <TopBar />
        <NavBar />
      </header>

      <Brands />

      <Specials />

      <TryOnTutorial />

      <NewsletterBanner />

      <Footer />
    </div>
  );
}

export default App;
