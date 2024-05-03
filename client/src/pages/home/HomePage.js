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

  return (
    <div>
      <h1>Welcome to HCSC 418 Full Stack Development Final Project</h1>
      <h3>By: Jeremy Samuel & John Massey</h3>
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
    </div>
  );
};

export default HomePage;
