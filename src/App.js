import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import BASE from "./components/base/base";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <BASE />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
