import React from 'react';
import Image from 'next/image';

const ProfileSection = () => {
return (
    <section className="flex flex-col items-center text-center bg-black text-white py-16 px-6">
    <p className="text-teal-400 text-lg">HELLO !</p>
    <h1 className="text-5xl font-bold mt-2">
        I'm <span className="text-teal-400">Juan Villota</span>
    </h1>
    <p className="text-xl mt-4 max-w-xl">
        Automation Specialist | Streamlining Workflows in Construction and Beyond
    </p>
    <div className="relative w-48 h-48 mt-6">
        <Image
        src="/juan.png" // Ensure the image is in the public folder of Next.js
        alt="Juan Villota"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
        />
    </div>
    <div className="mt-6 flex gap-4">
        <button className="bg-teal-400 text-black px-6 py-2 rounded-full font-semibold">
        HIRE ME
        </button>
        <button className="border-2 border-white px-6 py-2 rounded-full font-semibold">
        MY WORKS
        </button>
    </div>
    </section>
);
};

export default ProfileSection;
