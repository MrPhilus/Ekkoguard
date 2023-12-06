import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services";
import ProtectedRoute from "./pages/ProtectedRoute";
import Disposal from "./pages/disposal";
import SignUp from "./pages/signUp";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route element={<ProtectedRoute />}> */}
        {/* </Route> */}

        {/* <Route path="disposal" element={<Disposal />} /> */}
        <Route path="/services" element={<Services />}>
          <Route path="disposal" element={<Disposal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
