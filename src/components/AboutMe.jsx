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
                    <p className="about-me-detail">
                        <strong>Name:</strong> 
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', color: '#999999' }}> Juan Armando Villota</span>
                    </p>
                    <p className="about-me-detail">
                        <strong>Date of birth:</strong> 
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', color: '#999999' }}> January 28, 1999</span>
                    </p>
                    <p className="about-me-detail">
                        <strong>Address:</strong> 
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', color: '#999999' }}> Bogotá, Colombia</span>
                    </p>
                    <p className="about-me-detail">
                        <strong>Zip code:</strong> 
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', color: '#999999' }}> 110111</span>
                    </p>
                    <p className="about-me-detail">
                        <strong>Email:</strong> 
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', color: '#999999' }}> villota99@hotmail.com</span>
                    </p>
                    <p className="about-me-detail">
                        <strong>Phone:</strong> 
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', color: '#999999' }}> +57 316-379-7543</span>
                    </p>
                    <p className="about-me-projects">
                        <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', color: '#f1f1f1' }}>
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
