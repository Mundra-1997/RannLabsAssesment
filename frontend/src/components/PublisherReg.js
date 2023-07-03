import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "./baseURL/Baseurl";

const PublisherReg = () => {
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post(
        `${baseURL}/publisher/signup`,
        {
          name,
          organizationName,
          email,
          password,
        }
      );

      console.log("Response", response.data);
    
      setName("");
      setOrganizationName("");
      setEmail("");
      setPassword("");
      navigate("/publisher-signin");
    } catch (error) {
      console.error("Error", error);
    }
  };

  function moveToLogin() {
    navigate("/publisher-signin");
  }

  return (
   
    <div className="main_container">
      <div classNameNameName="container">
        <div className="registration form">
          <header>Publisher Registration</header>
          <form onSubmit={handleRegister}>
            <label>
                Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Organization Name:
              <input
                type="text"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
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
           
            <input type="submit" class="button" value="Signup"></input>
          </form>
          <div class="signup">
            <span class="signup">
              Already have an account?
              <span className="login" onClick={moveToLogin}>Login</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherReg;
