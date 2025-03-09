import React from 'react';
import '../styles/components/ProfileSection.css';

const ProfileSection = () => {
return (
    <section className="profile-section">
    <div className="profile-content">
        <div className="profile-text">
        <p className="text-teal-400 text-lg">HELLO !</p>
        <h1 className="text-5xl font-bold mt-2">
            I'm <span className="text-teal-400">Juan Villota</span>
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
            src="/juan_nb.png" // Ensure the image is in the public folder
            alt="Juan Villota"
        />
        </div>
    </div>
    </section>
);
};

export default ProfileSection;
