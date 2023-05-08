import React from 'react';
import Login from "./features/Login/login";
import {BrowserRouter} from "react-router-dom";
import Container from "./Pages/container";

function App() {
  return (
      <BrowserRouter>
          <div >
<Container/>
          </div>
      </BrowserRouter>
  );
}

export default App;
