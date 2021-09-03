import React from 'react';
import coverImage from '../../assets/cover/cover-image2.jpg';
import './style.css';
import selfie from '../../assets/profile-photo2.jpg';

function About() {
  return (
    <section class="about-me">
      <h1 id="about">About Me</h1>
      <div class="card mb-3">
        <img class="card-img-top" id="profile-photo" src={selfie} alt="profile-photo" />
          <div class="card-body">
            <h5 class="card-title">Bio:</h5>
            <p class="card-text">I am a junior full-stack web developer looking to expand my skills and knowledge and pursue a career in programming.</p>
          </div>
          </div>
    </section>
        );
};

        export default About;