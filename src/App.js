import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import BASE from "./components/base/base";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login";

function App() {
  return (
    <ThemeContextProvider>
      <BASE>
        <Navbar />
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/todos" component={Login} /> */}
        </BrowserRouter>
      </BASE>
    </ThemeContextProvider>
  );
}

export default App;
