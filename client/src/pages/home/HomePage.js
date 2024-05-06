import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    school: undefined,
    classification: undefined
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login route
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const updatedCredentials = {
      ...credentials,
    };

    try {
      const res = await axios.post(
        'http://localhost:4000/auth/register',
        updatedCredentials
      );
      console.log('Server Response:', res.data);
  
      switch (credentials.classification.toLowerCase()) {
        case 'freshman':
          navigate('/freshman');
          break;
        case 'sophmore':
          navigate('/sophmore');
          break;
        case 'junior':
          navigate('/junior');
          break;
        case 'senior':
          navigate('/senior');
          break;
        default:
          alert('Invalid classification');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    
  };

  // add login and logout *
  // block users from going to other pages * (calls called private routes)
  // look at music example in book (in routing chapter)
  // calls called private routes vs session storgage
  // docker file
  // readme file to turn everything on

  return (
    <div>
      <h1>Welcome to HCSC 418 Full Stack Development Final Project</h1>
      <h2>By: Jeremy Samuel & John Massey</h2>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/6YEAFkkYzVE" // Replace VIDEO_ID with your YouTube video ID
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br></br>
      <br></br>
      <div className="register">
        <div className="rContainer">
          <input
            type="email"
            placeholder="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            className="rInput"
          />
          <br></br>
          <input
            type="school"
            placeholder="school"
            id="school"
            value={credentials.school}
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="classification"
            placeholder="classification"
            id="classification"
            value={credentials.classification}
            onChange={handleChange}
            className="rInput"
          />
          <br></br>
          <button
            onClick={handleClick}
            onChange={handleChange}
            className="rButton"
          >
            Register
          </button>
        </div>
      </div>
      <h4>Already have an account?</h4>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default HomePage;
