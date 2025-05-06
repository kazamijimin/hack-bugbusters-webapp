import React from "react";

function CoreFeatures({ ref }) {
  const features = [
    {
      id: 1,
      title: "Stream Quality",
      description: "Enjoy seamless, high-definition with streaming with minimal buffering, ensuring a smooth experience for both educators and learners.",
      imageUrl: "https://i.pinimg.com/736x/e2/f9/7b/e2f97b86388295aa7b29ef0fec773621.jpg"
    },
    {
      id: 2,
      title: "Timestampped Notes",
      description: "Easily add timestamped notes to your videos lectures so students can quickly revisit key points and navigate lessons quickly",
      imageUrl: "https://i.pinimg.com/736x/f1/16/5f/f1165f02f93c700cb3210d78acb61550.jpg"
    },
    {
      id: 3,
      title: "Upload Courses",
      description: "Effortlessly upload and organize your courses with our intuitive interface, supporting various file formats to make content management simple.",
      imageUrl: "https://i.pinimg.com/736x/96/7b/a5/967ba589a47d2fddf818199049db79d4.jpg"
    }
  ];

  return (  
    <section className="py-12 sm:py-16 px-4 bg-white" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
          What our platform can do
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          Our platforms empowers educators and learners with innovative tools to enhance online learning, streamline content delivery, and boost engagement
        </p>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center bg-gray-50 rounded-xl p-4 sm:p-6 transition-transform hover:shadow-md hover:-translate-y-1">
              <div className="w-full aspect-[2.5/3] mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center text-xs sm:text-sm">
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
