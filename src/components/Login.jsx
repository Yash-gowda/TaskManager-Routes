import React from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    // Hardcoded credentials
    const hUsername = "Yash";
    const hPassword = "1234";

    if (username.value === hUsername && password.value === hPassword) {
      localStorage.setItem('user', JSON.stringify({ username: hUsername }));
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name="username" type="text" required />
        </label>
        <br />
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
