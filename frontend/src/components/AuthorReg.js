import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from './baseURL/Baseurl';

const AuthorReg = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${baseURL}/author/signup`, {
          name,
          email,
          password,
        });
  
        console.log('Response:', response.data);
        
        setName('');
        setEmail('');
        setPassword('');
        navigate('/author-signin')
      } catch (error) {
        console.error('Error', error);
      }
  };

  function moveToAuthLogin(){
    navigate('/author-signin')
  }

  return (
    <div>
<div className="main_container">
      <div classNameNameName="container">
        <div className="registration form">
          <header>Author Registration</header>
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
              <span className="login" onClick={moveToAuthLogin}>Login</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthorReg;
