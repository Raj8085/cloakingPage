// import  { useEffect, useState } from "react";

// const images = [
//   "/main.jpeg",
//   "/cloaking.jpeg",
//   "/servers.jpeg",
//   "/tracker.jpeg",
//   "/wordpress.jpeg",
// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div className="relative overflow-hidden w-full h-screen mb-[-25rem]">
//       {/* Carousel Container */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {/* Carousel Items */}
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="min-w-full h-96 bg-cover bg-center flex items-center justify-center"
//             style={{ backgroundImage: `url(${image})` }}
//           >
//             <div className="carousel_text">
//               <h1 className="text-4xl md:text-5xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
//               Safe Page Generator
//               Generate safe pages automatically. No manual work involved.
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



// // import { useEffect, useState } from "react";

// // const images = [
// //   {
// //     url: "/main.jpeg",
// //     title: "Safe Page Generator",
// //     description: "Generate safe pages automatically. No manual work involved.",
// //   },
// //   {
// //     url: "/cloaking.jpeg",
// //     title: " Forget About Bans",
// //     description: "We cloak all traffic sources and do not ask questions.",
// //   },
// //   {
// //     url: "/servers.jpeg",
// //     title: "Reliable Servers",
// //     description: "Experience high performance and uptime with our servers.",
// //   },
// //   {
// //     url: "/tracker.jpeg",
// //     title: "Powerful Tracker",
// //     description: "Track and optimize your campaigns seamlessly.",
// //   },
// //   {
// //     url: "/wordpress.jpeg",
// //     title: " Safe Page Generator",
// //     description: "Generate safe pages automatically. No manual work involved.",
// //   },
// // ];

// // const HeroSection = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 3000);

// //     return () => clearInterval(interval); // Cleanup on unmount
// //   }, []);

// //   return (
// //     <div className="relative overflow-hidden w-full h-screen mb-[-25rem]">
// //       {/* Carousel Container */}
// //       <div
// //         className="flex transition-transform duration-500"
// //         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// //       >
// //         {/* Carousel Items */}
// //         {images.map((image, index) => (
// //           <div
// //             key={index}
// //             className="min-w-full h-96 bg-cover bg-center flex items-center justify-center"
// //             style={{ backgroundImage: `url(${image.url})` }}
// //           >
// //             <div className="carousel_text">
// //               <h1 className="text-4xl md:text-5xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
// //                 {image.title}
// //               </h1>
// //               <p className="text-lg md:text-xl text-white bg-black bg-opacity-50 p-2 rounded mt-4">
// //                 {image.description}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;




import { useEffect, useState } from "react";

const images = [
  {
    url: "/main.jpeg",
    title: "Safe Page Generator",
    description: "Generate safe pages automatically. No manual work involved.",
  },
  {
    url: "/cloaking.jpeg",
    title: "Advanced Cloaking",
    description: "Protect your campaigns with the best cloaking technology.",
  },
  {
    url: "/servers.jpeg",
    title: "Reliable Servers",
    description: "Experience high performance and uptime with our servers.",
  },
  {
    url: "/tracker.jpeg",
    title: "Powerful Tracker",
    description: "Track and optimize your campaigns seamlessly.",
  },
  {
    url: "/wordpress.jpeg",
    title: "WordPress Integration",
    description: "Easily integrate with WordPress for enhanced flexibility.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen mb-[-20rem]" id="main">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Carousel Items */}
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-[35rem] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="carousel_text">
              <h1 className="text-4xl md:text-5xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
                {image.title}
              </h1>
              <p className="text-lg md:text-xl text-white bg-black bg-opacity-50 p-2 rounded mt-4">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
