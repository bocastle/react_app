import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Routes/User/SignIn";
import SignUp from "./Routes/User/SignUp";

function App(){
  return (
      <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/user/signup" element={<SignUp />} />
          </Routes>
      </Router>
  )
}

export default App;
