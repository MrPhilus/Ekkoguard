import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/customInputs/CustomInputs";

import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Get the navigate function

  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <CustomInput/>
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
