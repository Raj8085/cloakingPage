
// const SecondSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div className="text-center space-y-4">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Advertise anything anywhere. Without bans.
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600">
//           Adspect reliably cloaks each and every advertising platform.
//         </p>
//       </div>

//       {/* Buttons Section */}
//       <div className="flex space-x-4 mt-6">
//         <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
//           SIGN UP NOW
//         </button>
//         <button className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100">
//           Clients Sign-In
//         </button>
//       </div>

//       {/* Logos Section */}
//       <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 mt-12">
//         <img src="/path-to/mytarget-logo.png" alt="MyTarget" className="h-10 w-auto" />
//         <img src="/path-to/taboola-logo.png" alt="Taboola" className="h-10 w-auto" />
//         <img src="/path-to/appstore-logo.png" alt="App Store" className="h-10 w-auto" />
//         <img src="/path-to/googleplay-logo.png" alt="Google Play" className="h-10 w-auto" />
//         <img src="/path-to/outbrain-logo.png" alt="Outbrain" className="h-10 w-auto" />
//         <img src="/path-to/snapchat-logo.png" alt="Snapchat" className="h-10 w-auto" />
//       </div>
//     </div>
//   );
// };

// export default SecondSection;


import  { useState, useEffect } from "react";

const App = () => {
  const [showFirstSet, setShowFirstSet] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstSet((prev) => !prev);
    }, 3000); // Switch every 3 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 mb-[-10rem]">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Advertise anything anywhere. Without bans.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Adspect reliably cloaks each and every advertising platform.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4 mt-6">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
          SIGN UP NOW
        </button>
        <button className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100">
          Clients Sign-In
        </button>
      </div>

      {/* Logos Section */}
      <div className="relative mt-12 h-12 w-full overflow-hidden flex justify-center items-center">
        {/* First Set of Logos */}
        <div
          className={`absolute inset-0 flex flex-wrap justify-center items-center space-x-4 transition-transform duration-500 ${
            showFirstSet ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src="/swapImage/bing.svg"
            alt="MyTarget"
             className="h-10 w-auto sm:h-16 md:h-20 lg:h-10 object-contain"
            
          />
          <img
            src="/swapImage/face.svg"
            alt="Taboola"
            className="h-10 w-auto sm:h-16 md:h-20 lg:h-10 object-contain"

          />
          <img
            src="/swapImage/link.svg"
            alt="App Store"
            className="h-10 w-auto sm:h-16 md:h-20 lg:h-10 object-contain"

          />
          <img
            src="/swapImage/mgid.svg"
            alt="Google Play"
            className="h-10 w-auto sm:h-16 md:h-20 lg:h-10 object-contain"

          />
          <img
            src="/swapImage/ttok.svg"
            alt="Outbrain"
            className="h-10 w-auto sm:h-16 md:h-20 lg:h-10 object-contain"

          />
          <img
            src="/swapImage/tube.svg"
            alt="Snapchat"
            className="h-10 w-auto sm:h-16 md:h-20 lg:h-10 object-contain"

          />
        </div>

        {/* Second Set of Logos */}
        <div
          className={`absolute inset-0 flex flex-wrap justify-center items-center space-x-4 transition-transform duration-500 ${
            showFirstSet ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            src="/swapImage/twtt.svg"
            alt="Logo 1"
            className="h-10 w-auto"
          />
          <img
            src="/swapImage/yhoo.svg"
            alt="Logo 2"
            className="h-10 w-auto"
          />
          <img
            src="/swapImage/zerocard.svg"
            alt="Logo 3"
            className="h-10 w-auto"
          />
          <img
            src="/swapImage/exoc.svg"
            alt="Logo 4"
            className="h-10 w-auto"
          />
          <img
            src="/swapImage/snap.svg"
            alt="Logo 5"  
            className="h-10 w-auto"
          />
          <img
            src="/swapImage/apps.svg"
            alt="Logo 6"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
