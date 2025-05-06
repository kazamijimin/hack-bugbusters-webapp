import React from 'react';
import { Facebook, Instagram, Github } from 'lucide-react';

const TeamMember = ({ name, bio, image }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
      {}
      <div className="w-32 h-32 rounded-full border-2 border-indigo-600 bg-gray-200 mb-4 overflow-hidden">
        <img src={image} alt={`${name}'s profile`} className="w-full h-full object-cover" />
      </div>
      
      {}
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      
      {}
      <p className="text-sm text-center text-gray-700 mb-4">{bio}</p>
      
      {}
      <div className="mb-2">
        <span className="font-medium">Contacts</span>
      </div>
      
      <div className="flex space-x-4">
        <a href="#" className="text-black">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-black">
          <Instagram size={20} />
        </a>
        <a href="#" className="text-black">
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Francis Mistica",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      image: "assets/picture/kiks.jpg" 
    },
    {
      name: "Jose Aquino",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      image: "assets/picture/jose.jpg"
    },
    {
      name: "Jeremy Garin",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      image: "assets/picture/jem.jpg" 
    },
    {
      name: "Nick Narry Mendoza",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
      image: "assets/picture/nick.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {}
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-12">MEET OUR TEAM</h1>
      
      {}
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