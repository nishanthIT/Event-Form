// script.js (or wherever you have your React code)

// import React, { useState, useEffect } from 'react';
import './home.css'; // Import your CSS file
import logo from "../image/1.png"
import Navbar from '../Elements/Navbar';
import Button from '../Elements/FormElement/Button';
// import Hoverbtn from '../Elements/Hoverbtn';



const Home = () => {

  return (
    
    <div>
    <section>
      <div id="header">
       <img className='logo' src={logo} alt="Logo" />
        <h1>Event Name</h1>
        <p>Date - Aug 02</p>
        <Button href="/form">Register</Button>
        <Navbar />
      </div>
    </section>

      <main>
      
     <div class="parent">
         <div class="div1"> 
         <div class="eventcard">
      <div class="eventcard-content">
        <div class="eventcard-front">
          <p class="sub-title">CT Centinels</p>
          <h1 class="title">Eve Name</h1>
          <p class="sub-title">2024</p>
        </div>
        <div class="eventcard-back">
          <div class="back-title">Event Name</div>
          <div class="movie-description">
            <span>Synopsis: </span>The Flash travels through time to prevent the murder of his mother, but unwittingly causes changes that result in the creation of a multiverse.
          </div>
          <div class="genre">
            <span>Skills: </span>React, Node.js, Ui/Ux
          </div>
          <div class="release-date">
            <span>Event Date: </span>23 Aug, 2024
          </div>
          <a href="/form" class="btn">Register</a>
        </div>
      </div>
    </div>    
      </div>
          <div class="div2"> 
          <div className='div2-0'>
              <p className='title-event'>Title</p>
            </div>
            <div className='div2-1'>
              <p className='about-event'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='div2-2'>
               <Button to={`/form`} >Register</Button>
              </div>  
             
        </div>
    </div>
   
      
      </main>
    </div>
  
  );
};

export default Home;
