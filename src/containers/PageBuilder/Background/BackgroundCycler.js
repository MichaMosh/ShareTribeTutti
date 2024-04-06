import React, { useState, useEffect } from 'react';

const BackgroundCycler = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://res.cloudinary.com/dcbmqb01v/image/upload/v1712444472/Untitled_5_y0xdfl.png', // Assuming the images are stored in the public/images directory
    'https://res.cloudinary.com/dcbmqb01v/image/upload/v1712444478/Untitled_2_rn9jpc.png',
    'https://res.cloudinary.com/dcbmqb01v/image/upload/v1712444487/Untitled_4_eczc20.png',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div
      style={{
        position: 'absolute', // Changed from 'fixed' to 'absolute'
        top: 0,
        left: 0,
        width: '100%',
        height: '80vh', // Takes up only the initial screen height
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', // This centers the background images
        transition: 'background-image 0.5s ease-in-out',
        zIndex: -1, // Ensures that this background is behind other content
      }}
    />
  );
};

export default BackgroundCycler;