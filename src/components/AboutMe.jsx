import React from 'react';
import '../styles/components/AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me-section">
            <div className="about-me-content">
                <div className="about-me-image">
                    <img
                        src="/juan_nb1.png"
                        alt="Juan Armando Villota"
                    />
                </div>
                <div className="about-me-text">
                    <h1 className="about-me-title">About Me</h1>
                    <p className="about-me-quote">"Learning never exhausts the mind." – Leonardo da Vinci</p>
                    <p className="about-me-detail"><strong>Name:</strong> Juan Armando Villota</p>
                    <p className="about-me-detail"><strong>Date of birth:</strong> January 28, 1999</p>
                    <p className="about-me-detail"><strong>Address:</strong> Bogotá, Colombia</p>
                    <p className="about-me-detail"><strong>Zip code:</strong> 110111</p>
                    <p className="about-me-detail"><strong>Email:</strong> villota99@hotmail.com</p>
                    <p className="about-me-detail"><strong>Phone:</strong> +57 316-379-7543</p>
                    <p className="about-me-projects">27 Projects Complete</p>
                    <button className="button-primary">DOWNLOAD CV</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
