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
    switch (credentials) {
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
        alert('Invalid input. Please enter Freshman, Sophmore, Junior, or Senior.');
    }
    const updatedCredentials = {
      ...credentials,
      isHost: false,
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        updatedCredentials
      );
      //console.log(res.data)
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to HCSC 418 Full Stack Development Final Project</h1>
      <h3>By: Jeremy Samuel & John Massey</h3>
      <video width="640" height="480" controls>
        <source src="/videos/my-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br></br>
      <div className="register">
        <div className="rContainer">
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="rInput"
          />
          <br></br>
          <input
            type="school"
            placeholder="school"
            id="school"
            onChange={handleChange}
            className="rInput"
          />
          <input
            type="classification"
            placeholder="classification"
            id="classification"
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