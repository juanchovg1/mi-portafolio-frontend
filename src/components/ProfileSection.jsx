import React from 'react';
import '../styles/components/ProfileSection.css';

const ProfileSection = () => {
return (
    <section className="profile-section">
    <div className="profile-content">
        <div className="profile-text">
        <p className="hello-text">HELLO !</p> {/* Updated class */}
        <h1 className="name-text">
            I'm <span className="name-highlight">Juan Villota</span>
        </h1>
        <p className="text-xl mt-4 max-w-xl">
            Automation Specialist | Streamlining Workflows in Construction and Beyond
        </p>
        <div className="profile-buttons">
            <button className="bg-teal-400 text-black px-6 py-2 rounded-full font-semibold">
            HIRE ME
            </button>
            <button className="border-2 border-white px-6 py-2 rounded-full font-semibold">
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
