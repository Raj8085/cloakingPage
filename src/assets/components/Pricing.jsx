


// const PricingAndPayments = () => {
//   return (
//     <section className="container mx-auto px-4 py-10">
//       {/* Title */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl sm:text-4xl font-bold">Pricing and Payments</h1>
//         <p className="mt-2 text-gray-600">
//           We protect your privacy by accepting crypto payments.
//         </p>

//         {/* Crypto Icons */}
//         <div className="flex justify-center items-center space-x-4 mt-6">
//           <img src="/ton-circle.svg" alt="Bitcoin" className="h-8 w-8" />
//           <img src="/bitcoin-circle.svg" alt="Ethereum" className="h-8 w-8" />
//           <img src="/usdc-circle.svg" alt="USDT" className="h-8 w-8" />
//           <img src="/ethereum-circle.svg" alt="USDC" className="h-8 w-8" />
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Anti-fraud Card */}
//         <div className="group border border-red-300 rounded-md p-6 shadow-sm hover:border-blue-800 transition duration-300">
//           <div className="group-hover:text-blue-600">
//             <h2 className="text-xl font-bold mb-2">Anti-fraud</h2>
//             <p className="text-2xl font-bold mb-2">
//               $299 <span className="text-base font-normal">per month</span>
//             </p>
//             <p className="text-gray-700 mb-4">
//               Suitable for detecting click fraud in context and display ads.
//             </p>

//             <h3 className="font-semibold mb-2">Key features:</h3>
//             <ul className="list-disc list-inside mb-4 space-y-1">
//               <li>Click fraud (fake clicks) protection</li>
//               <li>Browser fingerprinting technology</li>
//               <li>Detailed reporting, 6 months data retention</li>
//               <li>Online chat support in Telegram</li>
//             </ul>
//             <div className="mt-96">
//             <p className="text-red-600 font-semibold mb-4">
//               Does not provide cloaking!
//             </p>

//             <div className="mb-4 space-y-1">
//               <p>
//                 <span className="font-semibold">Campaigns limit:</span> 20
//               </p>
//               <p>
//                 <span className="font-semibold">Clicks limit:</span> unlimited
//               </p>
//             </div>
//           </div>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
//             Purchase This Plan
//           </button>
//         </div>
//         </div>

//         {/* Personal Card */}
//         <div className="group border border-gray-300 rounded-md p-6 shadow-sm hover:border-blue-400 transition duration-300">
//           <div className="group-hover:text-blue-600">
//             <h2 className="text-xl font-bold mb-2">Personal</h2>
//             <p className="text-2xl font-bold mb-2">
//               $499 <span className="text-base font-normal">per month</span>
//             </p>
//             <p className="text-gray-700 mb-4">
//               Plan for beginners working solo, with basic cloaking features.
//             </p>

//             <h3 className="font-semibold mb-2">Key features:</h3>
//             <ul className="list-disc list-inside mb-4 space-y-1">
//               <li>Click fraud (fake clicks) protection</li>
//               <li>Browser fingerprinting technology</li>
//               <li>Detailed reporting, 6 months data retention</li>
//               <li>Online chat support in Telegram</li>
//             </ul>

//             <div className="mb-4 text-blue-600 space-y-1">
//               <p>+ Basic cloaking: Google, Facebook, TikTok, Bing, X (Twitter), Yandex, and many more</p>
//               <p>+ VLA™ machine learning technology</p>
//               <p>+ Fine-grained filtering level selection</p>
//             </div>
//             <div className="mt-72">
//             <div className="mb-4 space-y-1">
//               <p>
//                 <span className="font-semibold">Campaigns limit:</span> unlimited
//               </p>
//               <p>
//                 <span className="font-semibold">Clicks limit:</span> unlimited
//               </p>
//             </div>
//           </div>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
//             Purchase This Plan
//           </button>
//         </div>
//         </div>

//         {/* Professional Card */}
//         <div className="group relative border border-blue-400 rounded-md p-6 shadow-sm hover:border-blue-600 transition duration-300">
//           <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded">
//             STRONG
//           </span>
//           <div className="group-hover:text-blue-700">
//             <h2 className="text-xl font-bold mb-2">Professional</h2>
//             <p className="text-2xl font-bold mb-2">
//               $999 <span className="text-base font-normal">per month</span>
//             </p>
//             <p className="text-gray-700 mb-4">
//               Best for professionals and teams: best in class cloaking, access to API.
//             </p>

//             <h3 className="font-semibold mb-2">Key features:</h3>
//             <ul className="list-disc list-inside mb-4 space-y-1">
//               <li>Click fraud (fake clicks) protection</li>
//               <li>Browser fingerprinting technology</li>
//               <li>Detailed reporting, 6 months data retention</li>
//               <li>Online chat support in Telegram</li>
//             </ul>

//             <div className="mb-4 text-blue-600 space-y-1">
//               <p>+ Basic cloaking: Google, Facebook, TikTok, Bing, X (Twitter), Yandex, and many more</p>
//               <p>+ VLA™ machine learning technology</p>
//               <p>+ Fine-grained filtering level selection</p>
//               <p>+ Protects from “red screens” in browsers</p>
//               <p>+ Protects from BrandVerity, AdPolice, etc.</p>
//               <p>+ Protects from spy services</p>
//               <p>+ Cloaking of MetaMask, Trust, and payment gateways</p>
//               <p>+ In-app, WebView, and PWA cloaking</p>
//               <p>+ Combines 12 competing cloakers</p>
//               <p>+ Guest access to reporting</p>
//               <p>+ API for streams, integration, reporting, and guest access</p>
//             </div>
//             <div className="mt-16">
//             <div className="mb-4 space-y-1">
//               <p>
//                 <span className="font-semibold">Campaigns limit:</span> unlimited
//               </p>
//               <p>
//                 <span className="font-semibold">Clicks limit:</span> unlimited
//               </p>
//             </div>
//           </div>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
//             Purchase This Plan
//           </button>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingAndPayments;



// PricingAndPayments.jsx


const PricingAndPayments = () => {
  return (
    <section id="pricing" className="container mx-auto px-4 py-10 mt-10">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Pricing and Payments</h1>
        <p className="mt-2 text-gray-600">
          We protect your privacy by accepting crypto payments.
        </p>

        {/* Crypto Icons */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <img src="/ton-circle.svg" alt="TON" className="h-8 w-8" />
          <img src="/bitcoin-circle.svg" alt="Bitcoin" className="h-8 w-8" />
          <img src="/usdc-circle.svg" alt="USDC" className="h-8 w-8" />
          <img src="/ethereum-circle.svg" alt="Ethereum" className="h-8 w-8" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Anti-fraud Card */}
        <div className="group border border-red-300 rounded-md p-6 shadow-sm hover:border-blue-800 transition duration-300">
          <div className="group-hover:text-blue-600">
            <h2 className="text-xl font-bold mb-2">Anti-fraud</h2>
            <p className="text-2xl font-bold mb-2">
              $299 <span className="text-base font-normal">per month</span>
            </p>
            <p className="text-gray-700 mb-4">
              Suitable for detecting click fraud in context and display ads.
            </p>

            <h3 className="font-semibold mb-2">Key features:</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Click fraud (fake clicks) protection</li>
              <li>Browser fingerprinting technology</li>
              <li>Detailed reporting, 6 months data retention</li>
              <li>Online chat support in Telegram</li>
            </ul>
            <p className="text-red-600 font-semibold mb-4">
              Does not provide cloaking!
            </p>
            <div className="mb-4 space-y-1">
              <p>
                <span className="font-semibold">Campaigns limit:</span> 20
              </p>
              <p>
                <span className="font-semibold">Clicks limit:</span> unlimited
              </p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
            Purchase This Plan
          </button>
        </div>

        {/* Personal Card */}
        <div className="group border border-gray-300 rounded-md p-6 shadow-sm hover:border-blue-400 transition duration-300">
          <div className="group-hover:text-blue-600">
            <h2 className="text-xl font-bold mb-2">Personal</h2>
            <p className="text-2xl font-bold mb-2">
              $499 <span className="text-base font-normal">per month</span>
            </p>
            <p className="text-gray-700 mb-4">
              Plan for beginners working solo, with basic cloaking features.
            </p>

            <h3 className="font-semibold mb-2">Key features:</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Click fraud (fake clicks) protection</li>
              <li>Browser fingerprinting technology</li>
              <li>Detailed reporting, 6 months data retention</li>
              <li>Online chat support in Telegram</li>
            </ul>

            <div className="mb-4 text-blue-600 space-y-1">
              <p>+ Basic cloaking: Google, Facebook, TikTok, Bing, X (Twitter), Yandex...</p>
              <p>+ VLA™ machine learning technology</p>
              <p>+ Fine-grained filtering level selection</p>
            </div>
            <div className="mb-4 space-y-1">
              <p>
                <span className="font-semibold">Campaigns limit:</span> unlimited
              </p>
              <p>
                <span className="font-semibold">Clicks limit:</span> unlimited
              </p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
            Purchase This Plan
          </button>
        </div>

        {/* Professional Card */}
        <div className="group relative border border-blue-400 rounded-md p-6 shadow-sm hover:border-blue-600 transition duration-300">
          <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded">
            STRONG
          </span>
          <div className="group-hover:text-blue-700">
            <h2 className="text-xl font-bold mb-2">Professional</h2>
            <p className="text-2xl font-bold mb-2">
              $999 <span className="text-base font-normal">per month</span>
            </p>
            <p className="text-gray-700 mb-4">
              Best for professionals and teams: best in class cloaking, access to API.
            </p>

            <h3 className="font-semibold mb-2">Key features:</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Click fraud (fake clicks) protection</li>
              <li>Browser fingerprinting technology</li>
              <li>Detailed reporting, 6 months data retention</li>
              <li>Online chat support in Telegram</li>
            </ul>

            <div className="mb-4 text-blue-600 space-y-1">
              <p>+ Basic cloaking: Google, Facebook, TikTok, Bing, X (Twitter), Yandex...</p>
              <p>+ VLA™ machine learning technology</p>
              <p>+ Fine-grained filtering level selection</p>
              <p>+ Protects from “red screens” in browsers</p>
              <p>+ Protects from BrandVerity, AdPolice, etc.</p>
              <p>+ Protects from spy services</p>
              <p>+ Cloaking of MetaMask, Trust, and payment gateways</p>
              <p>+ In-app, WebView, and PWA cloaking</p>
              <p>+ Combines 12 competing cloakers</p>
              <p>+ Guest access to reporting</p>
              <p>+ API for streams, integration, reporting, and guest access</p>
            </div>
            <div className="mb-4 space-y-1">
              <p>
                <span className="font-semibold">Campaigns limit:</span> unlimited
              </p>
              <p>
                <span className="font-semibold">Clicks limit:</span> unlimited
              </p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
            Purchase This Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingAndPayments;














const ComsignSafePageGenerator = () => {
  return (
    <section className="bg-blue-50 py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Subheading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Comsign Safe Page Generator
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Adspect comes with a built-in safe page generator by 
            <strong> Comsign </strong> that was designed specifically for 
            getting cloaked campaigns approved. Forget about tedious manual 
            safe page creation, go full auto.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
            Try Live Demo &gt;
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-md">
            More Information &gt;
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Basic Plan */}
          <div className="border border-gray-300 rounded-md p-6 bg-white shadow-sm ">
            <h2 className="text-xl font-bold mb-1">Basic</h2>
            <p className="text-2xl font-bold mb-2">
              $299 <span className="text-base font-normal">per month</span>
            </p>
            <p className="text-gray-700 mb-4">
              Good for beginners working solo: affordable pricing, moderate limits.
            </p>

            <h3 className="font-semibold mb-2">Key features:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
              <li>Generates complete WordPress websites</li>
              <li>Rich content obtained from news, blogs, social networks, Google Play, App Store</li>
              <li>Every safe page is 100% unique, content is never shared or reused</li>
              <li>Free previews, only downloads billed</li>
              <li>Use preset themes or generate by keywords</li>
              <li>Automatic translation to 48 languages</li>
            </ul>
            <div className="mt-28"> 
            <div className="space-y-1  mb-4 text-gray-700">
              <p>
                <span className="font-semibold">Safe page downloads:</span> 200
              </p>
              <p>$2 per download over limit</p>
            </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
              Purchase This Plan
            </button>
          </div>

          {/* Professional Plan */}
          <div className="border border-gray-300 rounded-md p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-1">Professional</h2>
            <p className="text-2xl font-bold mb-2">
              $499 <span className="text-base font-normal">per month</span>
            </p>
            <p className="text-gray-700 mb-4">
              Best for professionals and teams: higher limits, API for automation.
            </p>

            <h3 className="font-semibold mb-2">Key features:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
              <li>Generates complete WordPress websites</li>
              <li>Rich content obtained from news, blogs, social networks, Google Play, App Store</li>
              <li>Every safe page is 100% unique, content is never shared or reused</li>
              <li>Free previews, only downloads billed</li>
              <li>Use preset themes or generate by keywords</li>
              <li>Automatic translation to 48 languages</li>
            </ul>

            <div className="mb-4 space-y-1 text-blue-600">
              <p>+ Hundreds of templates from wordpress.com</p>
              <p>+ On-the-fly HTML code randomization</p>
              <p>+ API for automated safe page generation</p>
            </div>

            <div className="space-y-1 mb-4 text-gray-700">
              <p>
                <span className="font-semibold">Safe page downloads:</span> 500
              </p>
              <p>$1.5 per download over limit</p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
              Purchase This Plan
            </button>
          </div>

          {/* Business Plan */}
          <div className="border border-gray-300 rounded-md p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-1">Business</h2>
            <p className="text-2xl font-bold mb-2">
              $1,499 <span className="text-base font-normal">per month</span>
            </p>
            <p className="text-gray-700 mb-4">
              Ideal for resellers, advertising agencies, and media buying companies.
            </p>

            <h3 className="font-semibold mb-2">Key features:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
              <li>Generates complete WordPress websites</li>
              <li>Rich content obtained from news, blogs, social networks, Google Play, App Store</li>
              <li>Every safe page is 100% unique, content is never shared or reused</li>
              <li>Free previews, only downloads billed</li>
              <li>Use preset themes or generate by keywords</li>
              <li>Automatic translation to 48 languages</li>
            </ul>

            <div className="mb-4 space-y-1 text-blue-600">
              <p>+ Exclusive handcrafted templates</p>
              <p>+ Content generated by artificial intelligence (ChatGPT 4)</p>
              <p>+ License allows reselling</p>
            </div>

            <div className="space-y-1 mb-4 text-gray-700">
              <p>
                <span className="font-semibold">Safe page downloads:</span> 1500
              </p>
              <p>$1 per download over limit</p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full">
              Purchase This Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export {ComsignSafePageGenerator};

