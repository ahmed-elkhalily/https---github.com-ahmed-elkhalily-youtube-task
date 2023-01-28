import React from "react";
import Navbar from "./modules/Navbar";
import Main from "./modules/Main";

const App: React.FC = () => {
  return (
    <div>
      <Main />
      <Navbar />
    </div>
  );
};

export default App;
