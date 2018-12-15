import React, { Component } from "react";

import { AppStyled } from "./AppStyled";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainConnected } from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <AppStyled className="App">
        <Header />
        <MainConnected />
        <Footer />
      </AppStyled>
    );
  }
}

export default App;
