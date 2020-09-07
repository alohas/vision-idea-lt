import React from "react";

//Components
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/";
import NewsletterBanner from "./components/NewsletterBanner";

function App() {
  return (
    <div className="App">
      <header>
        <TopBar />
        <NavBar />
      </header>

      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default App;
