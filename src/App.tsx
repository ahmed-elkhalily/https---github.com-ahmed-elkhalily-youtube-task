import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./modules/SearchPage";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default App;
