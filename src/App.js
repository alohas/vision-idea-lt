import React from "react";

//Components
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Specials from "./components/Specials";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer/";

function App() {
  return (
    <div className="App">
      <header>
        <TopBar />
        <NavBar />
      </header>

      <Specials />

      <NewsletterBanner />

      <Footer />
    </div>
  );
}

export default App;
