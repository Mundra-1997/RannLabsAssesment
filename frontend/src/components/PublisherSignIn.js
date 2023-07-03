import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "./Auth";
import { baseURL } from "./baseURL/Baseurl";

const PublisherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const userAuth = useContext(auth)


  const handleSignIn = async (e) => {
    
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseURL}/publisher/signin`,
        {
          email,
          password,
        }
      );

      console.log("Response:", response.data);
    
      setEmail("");
      setPassword("");
      console.log("pass")
      navigate('/home')
      userAuth.login();
    } catch (error) {
      console.error("Error", error);
    }
  };

  function moveToReg(){
    navigate('/publisher-reg')
  }
  return (
    <div className="main_container">
      <div classNameName="container">
        <div className="login form">
          <header>Publisher Login</header>
          <form onSubmit={handleSignIn}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {/* <button type="submit">Submit</button> */}
            <input type="submit" className="button" value="Login" />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?
              <span className="signup" onClick={moveToReg}>Signup</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherSignIn;
