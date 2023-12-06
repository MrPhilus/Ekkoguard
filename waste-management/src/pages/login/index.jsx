import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Get the navigate function

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      console.log("Login successful");
      console.log(auth, email, password);

      // Redirect to the services page
      navigate("/services");
    } catch (error) {
      // Handle any login errors here
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={login}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />

        <CustomButton buttonText={"Login"} />
      </form>
    </div>
  );
};

export default Login;
