import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const { loading, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("http://localhost:4000/auth/login", credentials);

      // Assuming the response has a 'role' property that tells us whether the user is a freshman, sophomore, etc.
      const userRole = res.data.role;

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      // Navigate based on the user's role
      switch (userRole) { // when logging in it is supposed to go to the particular classification that the user signed in with
        case "freshman":
          navigate("/freshman");
          break;
        case "sophomore":
          navigate("/sophomore");
          break;
        case "junior":
          navigate("/junior");
          break;
        case "senior":
          navigate("/senior");
          break;
        default:
          // If the role isn't recognized, redirect to a default page
          navigate("/");
          break;
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });

      if (error.response && error.response.status === 404) {
        alert("User not found. Please check your credentials and try again.");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
    
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="email"
        id="email"
        onChange={handleChange}
        className="lInput"
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={handleChange}
        className="lInput"
      />
      <button disabled={loading} onClick={handleLogin} className="lButton">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
