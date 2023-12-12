import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services";
import Disposal from "./pages/disposal";
// import WasteRecyclingPage from "./pages/recycling";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import ForgotPassword from "./pages/passwordReset/ForgotPassword";
import PasswordReset from "./pages/passwordReset/PasswordReset";
import "react-toastify/dist/ReactToastify.css";

import Feedback from "./pages/feedBack";
// import Profile from "./pages/profile";
import NewsFeed from "./pages/newsFeed";
import ComingSoon from "./pages/comingSoon/Index";
import Profile from "./pages/profile";
import Details from "./pages/newsFeed/Details";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import OTPVerification from "./pages/otpVerification";
import History from "./pages/history";
import Protected from "./pages/ProtectedRoute";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/verification" element={ <OTPVerification /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/forgotpassword" element={ <ForgotPassword /> } />
        <Route path="/passwordreset" element={ <PasswordReset /> } />
        <Route path="/pagenotfound" element={ <PageNotFound /> } />
        <Route path="/comingsoon" element={ <ComingSoon /> } />
        <Route path="/newsfeed" element={ <NewsFeed /> } />
        <Route path="/details" element={ <Details /> } />
        <Route path="feedback" element={ <Feedback /> } />
        <Route path="history" element={ <History /> } />
        <Route path="checkout" element={ <CheckOut /> } />
        {/* <Route path="/services" element={<Services />} /> */ }
        {/* <Route element={<ProtectedRoute />}> */ }
        {/* </Route> */ }

        <Route path="disposal" element={ <Disposal /> } />

        <Route element={ <Protected /> }>
          <Route path="profile" element={ <Profile /> } />
          <Route path="disposal/checkout/:id" element={ <CheckOut /> } />
        </Route>

        <Route path="/services" element={ <Services /> }>
          {/* <Route path="recycling" element={ <WasteRecyclingPage /> } /> */ }
          <Route path="disposal" element={ <Disposal /> } />
        </Route>


        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </>
  );
}

export default App;
