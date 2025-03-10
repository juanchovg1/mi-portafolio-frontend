import React, { useState, useEffect } from 'react';
import '../styles/components/ProfileSection.css';

const ProfileSection = () => {
    const [textIndex, setTextIndex] = useState(0);

    const texts = [
        {
            name: "I'm <span className='name-highlight' style='color: #00FFFF;'>Juan Villota</span>",
            description: "Automation Specialist | Streamlining Workflows with AI"
        },
        {
            name: "I'm an <span className='name-highlight' style='color: #00FFFF;'>automation Expert & Problem Solver</span> based in Bogotá - Colombia",
            description: "Automation Specialist | Streamlining Workflows with AI"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="profile-section">
            <div className="profile-content">
                <div className="profile-text">
                    <p className="hello-text">HELLO !</p>
                    <h1 className="name-text" dangerouslySetInnerHTML={{ __html: texts[textIndex].name }}></h1>
                    <p className="description-text">{texts[textIndex].description}</p>
                    <div className="profile-buttons">
                        <button className="button-primary">
                            HIRE ME
                        </button>
                        <button className="button-secondary">
                            MY WORKS
                        </button>
                    </div>
                </div>
                <div className="profile-image">
                    <img
                        src="/juan_nb2.png" // Ensure the image is in the public folder
                        alt="Juan Villota"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
