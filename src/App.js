import React from "react";

//Components
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/";

function App() {
  return (
    <div className="App">
      <header>
        <TopBar />
        <NavBar />
      </header>

      <Footer />
    </div>
  );
}

export default App;
