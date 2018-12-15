import React, { Component } from "react";

import { AppStyled } from "./AppStyled";
import { Header } from "./components/Header";

class App extends Component {
  render() {
    return (
      <AppStyled className="App">
        <Header />
      </AppStyled>
    );
  }
}

export default App;
