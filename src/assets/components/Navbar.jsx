
// // const Navbar = () => {
// //   return (
// //     <div>
      

// // <nav className="bg-white border-gray-200 dark:bg-gray-900">
// //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
// //     <img src="/adspect.svg" alt="" className="h-16 w-30"/>
// //     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
// //         <span className="sr-only">Open main menu</span>
// //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
// //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
// //         </svg>
// //     </button>
// //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
// //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Main</a>
// //         </li>
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
// //         </li>
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
// //         </li>
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</a>
// //         </li>
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Documentation</a>
// //         </li>
// //       </ul>
// //     </div>
// //   </div>
// // </nav>

// //     </div>
// //   )
// // }

// // export default Navbar



// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle the isOpen state whenever the button is clicked
//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <img src="/adspect.svg" alt="Logo" className="h-16 w-28"/>

//         {/* Hamburger button (visible on small screens) */}
//         <button
//           onClick={toggleMenu}
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
//                      hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
//                      dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>

//         {/* Menu (hidden on small screens, visible on md+) */}
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } w-full md:block md:w-auto`}
//           id="navbar-default"
//         >
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4
//                          border border-gray-100 rounded-lg bg-gray-50
//                          md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0
//                          md:border-0 md:bg-white dark:bg-gray-800
//                          md:dark:bg-gray-900 dark:border-gray-700"
//           >
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded
//                            md:bg-transparent md:text-blue-700 md:p-0
//                            dark:text-white md:dark:text-blue-500"
//                 aria-current="page"
//               >
//                 Main
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded
//                            hover:bg-gray-100 md:hover:bg-transparent
//                            md:border-0 md:hover:text-blue-700 md:p-0
//                            dark:text-white md:dark:hover:text-blue-500
//                            dark:hover:bg-gray-700 dark:hover:text-white
//                            md:dark:hover:bg-transparent"
//               >
//                 Product
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded
//                            hover:bg-gray-100 md:hover:bg-transparent
//                            md:border-0 md:hover:text-blue-700 md:p-0
//                            dark:text-white md:dark:hover:text-blue-500
//                            dark:hover:bg-gray-700 dark:hover:text-white
//                            md:dark:hover:bg-transparent"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded
//                            hover:bg-gray-100 md:hover:bg-transparent
//                            md:border-0 md:hover:text-blue-700 md:p-0
//                            dark:text-white md:dark:hover:text-blue-500
//                            dark:hover:bg-gray-700 dark:hover:text-white
//                            md:dark:hover:bg-transparent"
//               >
//                 FAQ
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded
//                            hover:bg-gray-100 md:hover:bg-transparent
//                            md:border-0 md:hover:text-blue-700 md:p-0
//                            dark:text-white md:dark:hover:text-blue-500
//                            dark:hover:bg-gray-700 dark:hover:text-white
//                            md:dark:hover:bg-transparent"
//               >
//                 Documentation
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50  bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <img src="/adspect.svg" alt="Logo" className="h-16 w-28" />

        {/* Hamburger button (mobile) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500
                     rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                     focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Nav Items */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4
                         border border-gray-100 rounded-lg bg-gray-50
                         md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0
                         md:border-0 md:bg-white dark:bg-gray-800
                         md:dark:bg-gray-900 dark:border-gray-700"
          >
              <li>
              <a
                href="#main"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                           md:hover:bg-transparent md:border-0 md:hover:text-blue-700
                           md:p-0 dark:text-white md:dark:hover:text-blue-500
                           dark:hover:bg-gray-700 dark:hover:text-white
                           md:dark:hover:bg-transparent"
              >
                main
              </a>
            </li>
            <li>
              <a
                href="#product"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                           md:hover:bg-transparent md:border-0 md:hover:text-blue-700
                           md:p-0 dark:text-white md:dark:hover:text-blue-500
                           dark:hover:bg-gray-700 dark:hover:text-white
                           md:dark:hover:bg-transparent"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                           md:hover:bg-transparent md:border-0 md:hover:text-blue-700
                           md:p-0 dark:text-white md:dark:hover:text-blue-500
                           dark:hover:bg-gray-700 dark:hover:text-white
                           md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
                           md:hover:bg-transparent md:border-0 md:hover:text-blue-700
                           md:p-0 dark:text-white md:dark:hover:text-blue-500
                           dark:hover:bg-gray-700 dark:hover:text-white
                           md:dark:hover:bg-transparent"
              >
                FAQ
              </a>
            </li>
          
            {/* Other nav items... */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
