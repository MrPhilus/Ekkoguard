import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";

import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <form action="" onSubmit={signUp}>
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={fullName}
          onInput={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter Valid Email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />

        <CustomButton buttonText={"Create Account"} />
      </form>

      <Link style={{ color: "black" }} to="/login">
        Already have an account? Log in
      </Link>
    </div>
  );
};

export default SignUp;
