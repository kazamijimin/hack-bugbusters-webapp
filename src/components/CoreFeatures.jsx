import React from "react";

function CoreFeatures() {
  const features = [
    {
      id: 1,
      title: "Stream Quality",
      description: "Enjoy seamless, high-definition with streaming with minimal buffering, ensuring a smooth experience for both educators and learners.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Timestampped Notes",
      description: "Easily add timestamped notes to your videos lectures so students can quickly revisit key points and navigate lessons quickly",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Upload Courses",
      description: "Effortlessly upload and organize your courses with our intuitive interface, supporting various file formats to make content management simple.",
      imageUrl: "https://via.placeholder.com/150"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What our product can do
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Our platforms empowers educators and learners with innovative tools to enhance online learning, streamline content delivery, and boos engagement
        </p>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center">
              <div className="bg-gray-200 w-full h-[400] mb-6">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreFeatures;
