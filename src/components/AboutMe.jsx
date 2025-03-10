import React, { useEffect, useState } from 'react';
import '../styles/components/AboutMe.css';

const AboutMe = () => {
    const [projectCount, setProjectCount] = useState(0);

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count += 1;
            setProjectCount(count);
            if (count === 27) {
                clearInterval(interval);
            }
        }, 100);
    }, []);

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
                    <div className="about-me-details">
                        <div className="about-me-labels">
                            <p className="about-me-detail"><strong>Name:</strong></p>
                            <p className="about-me-detail"><strong>Date of birth:</strong></p>
                            <p className="about-me-detail"><strong>Address:</strong></p>
                            <p className="about-me-detail"><strong>Zip code:</strong></p>
                            <p className="about-me-detail"><strong>Email:</strong></p>
                            <p className="about-me-detail"><strong>Phone:</strong></p>
                        </div>
                        <div className="about-me-info-column">
                            <p className="about-me-info">Juan Armando Villota</p>
                            <p className="about-me-info">January 28, 1999</p>
                            <p className="about-me-info">Bogotá, Colombia</p>
                            <p className="about-me-info">110111</p>
                            <p className="about-me-info">villota99@hotmail.com</p>
                            <p className="about-me-info">+57 319-749-3647</p>
                        </div>
                    </div>
                    <p className="about-me-projects">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '20px', color: '#f1f1f1' }}>
                            <span style={{ color: '#00FFFF' }}>{projectCount}</span> Projects Complete
                        </span>
                    </p>
                    <button className="button-primary">DOWNLOAD CV</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
