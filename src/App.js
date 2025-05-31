import './App.css';
import axios from 'axios';
import { useState } from 'react';
import HafzaImg from './Components/Hafza.jpg';
import htmlpng from './Components/html.png';
import csspng from './Components/css-3.png';
import javapng from './Components/java.png';
import jspng from './Components/js.png';
import mysql from './Components/mysql.png';
import reactpng from './Components/library.png';
import hardware from './Components/Hardwarep.png';
import hotel from './Components/hotel.png';
import portfo from './Components/portfo.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const topPosition = element.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  // State for Contact Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/contacts", formData);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <h1 onClick={() => scrollToSection("about")}>Home</h1>
        <ul>
          <li onClick={() => scrollToSection("education")}>Education</li>
          <li onClick={() => scrollToSection("Skills")}>Skills</li>
          <li onClick={() => scrollToSection("Projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>

      <section className="description" id="about">
        <img src={HafzaImg} alt="Hafza" />
        <h1>I'm Fathima Hafza</h1>
        <h2>
          An IT undergraduate of University Of Moratuwa. As a student of
          Information Technology, I have built a strong foundation in technology
          with particular interest in software development.
        </h2>
        <a
          href="https://drive.google.com/file/d/11myuMREkQI_SnuD8iJxLJ6TzcUVeA_zs/view?usp=sharing"
          className="grabCV"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grab CV
        </a>
      </section>

      <h1 className="edu" id="education">Education</h1>
      <div className="education">
        <div className="higher">
          <h1>Higher Studies</h1>
          <p>University Of Moratuwa</p>
          <p>Bsc (Hons) in Information Technology</p>
          <p>2023-2027</p>
        </div>
        <div className="higher">
          <h1>G.C.E A/L</h1>
          <p>Biological Science Stream</p>
          <p>2019-2021</p>
          <p>Z score:1.5539</p>
        </div>
        <div className="higher">
          <h1>G.C.E O/L</h1>
          <p>2010-2018</p>
          <p>9 A's</p>
        </div>
      </div>

      <h1 id="Skills">Skills</h1>
      <div className="Skills">
        <div className='Technical'>
          <h2>Technical Skills</h2>
          <div className="image-row">
            <img src={htmlpng} alt="HTML" />
            <img src={csspng} alt="CSS" />
            <img src={javapng} alt="Java" />
            <img src={jspng} alt="JavaScript" />
            <img src={mysql} alt="MySQL" />
            <img src={reactpng} alt="React" />
          </div>
        </div>
      </div>

      <h1 id="Projects">Projects</h1>
      <div className='Projects'>
        <div className='project'>
          <img src={hardware} alt="Hardware Project" />
          <h2>Automated Mocktail Machine</h2>
          <p>MixMatic Pro is an IoT-powered mocktail machine with customizable recipes and real-time monitoring.</p>
        </div>
        <div className='project'>
          <img src={hotel} alt="Hotel Booking System" />
          <h2>Hotel Booking System</h2>
          <p>A user-friendly hotel booking system that allows customers to easily search, book, and manage their reservations online.</p>
        </div>
        <div className='project'>
          <img src={portfo} alt="Portfolio" />
          <h2>Portfolio</h2>
          <p>As an aspiring developer, I’ve created a dynamic portfolio that showcases my skills and projects, reflecting my passion for technology and user experience.</p>
        </div>
      </div>

      <h1 id="contact">Contact Me</h1>
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <div className='labels'>
            <label>Name</label>
            <input type='text' name="name" value={formData.name} onChange={handleChange} placeholder='Your name' required />
          </div>
          <div className='labels'>
            <label>Email</label>
            <input type='email' name="email" value={formData.email} onChange={handleChange} placeholder='Your Email' required />
          </div>
          <div className='labels'>
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
