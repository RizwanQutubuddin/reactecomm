import React from "react";
import { BrowserRouter } from "react-router-dom";
import '../src/assets/admin/css/styles.css';
import '../src/assets/admin/js/scripts';
import MasterLayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MasterLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
