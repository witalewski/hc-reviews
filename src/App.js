import React, { Component } from "react";

import { AppStyled } from "./AppStyled";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

class App extends Component {
  render() {
    return (
      <AppStyled className="App">
        <Header />
        <Footer />
      </AppStyled>
    );
  }
}

export default App;
