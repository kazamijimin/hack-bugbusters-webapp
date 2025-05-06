import React from 'react';
import { Facebook, Instagram, Github } from 'lucide-react';

const TeamMember = ({ name, bio, image }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center h-full shadow-sm hover:shadow-md transition-shadow">
      <div className="w-32 h-32 rounded-full border-2 border-indigo-600 bg-gray-200 mb-4 overflow-hidden flex-shrink-0">
        <img src={image} alt={`${name}'s profile`} className="w-full h-full object-cover" />
      </div>
      
      <h3 className="font-bold text-lg mb-2 text-center">{name}</h3>
      
      <p className="text-sm text-center text-gray-700 mb-4 flex-grow">{bio}</p>
      
      <div className="mt-auto w-full">
        <div className="mb-2 text-center">
          <span className="font-medium">Contacts</span>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-black hover:text-indigo-600 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-black hover:text-indigo-600 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-black hover:text-indigo-600 transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function TeamPage({ ref }) {
  const teamMembers = [
    {
      name: "Francis Mistica",
      bio: "Full-stack developer with a passion for creating seamless user experiences. Skilled in React, Node.js, and database management.",
      image: "assets/picture/kiks.jpg" 
    },
    {
      name: "Jose Aquino",
      bio: "Backend developer with expertise in server-side technologies. Committed to building robust and scalable applications.",
      image: "assets/picture/jose.jpg"
    },
    {
      name: "Jeremy Garin",
      bio: "Frontend developer with a keen eye for design. Experienced in creating responsive and user-friendly interfaces.",
      image: "assets/picture/jem.jpg" 
    },
    {
      name: "Nick Narry Mendoza",
      bio: "Vibecoder and UI/UX designer. Passionate about crafting intuitive and engaging user experiences.",
      image: "assets/picture/nick.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4" ref={ref}>
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-12">MEET OUR TEAM</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}