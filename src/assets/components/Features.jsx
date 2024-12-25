
// const IconBulletproof = () => (
//     <img src="/anonymous.png" alt="ss" className="h-30 w-20"/>
  
  
//     // <svg
//     //   className="mx-auto w-12 h-12"
//     //   fill="none"
//     //   stroke="currentColor"
//     //   strokeWidth={1.5}
//     //   viewBox="0 0 24 24"
//     // >
//     //   {/* ... put your actual SVG paths here ... */}
      
//     // </svg>
//   );
  
//   const IconCheckerBots = () => (
//     <img src="/crawler.png" alt="" className="h-40 w-30"/>
   
//   );
  
//   const IconSpyServices = () => (
//     <img src="/checker.png" alt="" className="h-40 w-30"/>
    
//   );
  
//   const IconClickFraud = () => (
//     <img src="/click.png" alt=""  className="h-30 w-20"/>
   
//   );
  
//   const IconSafePage = () => (
//     <img src="/approve.png" alt="" className="h-30 w-20"/>
   
//   );
  
//   const IconDetailedReporting = () => (
//     <img src="/reporting.png" alt="" className="h-30 w-20"/>
    
//   );
  
//   // Reusable FeatureCard
//   const FeatureCard = ({ Icon, title, description, linkText }) => {
//     return (
//       <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center">
//         <div className="mb-4">
//           <Icon />
//         </div>
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 flex-grow">{description}</p>
//         {linkText && (
//           <a
//             href="#"
//             className="mt-4 text-blue-600 hover:underline inline-flex items-center"
//           >
//             {linkText}
//             <svg
//               className="ml-1 w-4 h-4"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M12.293 5.293a1 1 0 011.414 0l5.083 5.083a1 1 0 010 1.414l-5.083 5.083a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
//             </svg>
//           </a>
//         )}
//       </div>
//     );
//   };
  
//   const Features = () => {
//     return (
        
//       <section className="bg-gray-50 py-12 mb-40">
        
//         <div className="max-w-7xl mx-auto px-4">
//           {/* Title & Subtitle */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               Key Features
//             </h2>
//             <p className="text-gray-600">
//               Here&apos;s just a quick glance at what Adspect offers.
//             </p>
//           </div>
  
//           {/* Feature Grid */}
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <FeatureCard
//               Icon={IconBulletproof}
//               title="Bulletproof Cloaking"
//               description="Adspect reliably cloaks a long list of advertising platforms: Google, Facebook, TikTok, Bing, X (Twitter), Yandex, Snapchat, Taboola, Outbrain, Google Play, App Store, and more."
//               linkText="More Information"
//             />
//             <FeatureCard
//               Icon={IconCheckerBots}
//               title="Checker Bots Protection"
//               description="Adspect blocks all kinds of website checkers: Google Safe Browsing, VirusTotal, Kaspersky, BrandVerity, GeoEdge, AdSecure, The Media Trust, Confiant, Ad Lightning, etc."
//               linkText="More Information"
//             />
//             <FeatureCard
//               Icon={IconSpyServices}
//               title="Spy Services Protection"
//               description="Adspect protects your ad campaigns from spy services with 100% efficiency, including AdPlexity, AdClarity, AdSpy, Adheart, Anstrex, AdSpyder, and many others."
//               linkText="More Information"
//             />
//             <FeatureCard
//               Icon={IconClickFraud}
//               title="Click Fraud Protection"
//               description="Adspect detects click fraud in any form, even the most advanced click farms built on headless browsers like Headless Chrome, Puppeteer, Playwright, Selenium, PhantomJS, Zennoposter, etc."
//               linkText="More Information"
//             />
//             <FeatureCard
//               Icon={IconSafePage}
//               title="Safe Page Generator"
//               description="Adspect comes with a built-in safe page generator by Comsign that was designed specifically for getting cloaked campaigns approved. Forget about manual safe page creation — go full auto."
//               linkText="Try Live Demo"
//             />
//             <FeatureCard
//               Icon={IconDetailedReporting}
//               title="Detailed Reporting"
//               description="Adspect provides detailed reports on traffic quality, tracks conversions, logs individual clicks, and lets you examine sales funnels with granular breakdown, and much more."
//               linkText="More Information"
//             />
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Features;



// Features.jsx


const IconBulletproof = () => (
  <img src="/anonymous.png" alt="ss" className="h-30 w-20" />
);

const IconCheckerBots = () => (
  <img src="/crawler.png" alt="" className="h-40 w-30" />
);

const IconSpyServices = () => (
  <img src="/checker.png" alt="" className="h-40 w-30" />
);

const IconClickFraud = () => (
  <img src="/click.png" alt=""  className="h-30 w-20"/>
);

const IconSafePage = () => (
  <img src="/approve.png" alt="" className="h-30 w-20"/>
);

const IconDetailedReporting = () => (
  <img src="/reporting.png" alt="" className="h-30 w-20"/>
);

const FeatureCard = ({ Icon, title, description, linkText }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center">
      <div className="mb-4">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      {linkText && (
        <a
          href="#"
          className="mt-4 text-blue-600 hover:underline inline-flex items-center"
        >
          {linkText}
          <svg
            className="ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M12.293 5.293a1 1 0 011.414 0l5.083 5.083a1 1 0 010 1.414l-5.083 5.083a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
          </svg>
        </a>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <section id="product" className="bg-gray-50 py-12 mb-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title & Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Key Features
          </h2>
          <p className="text-gray-600">
            Here&apos;s just a quick glance at what Adspect offers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            Icon={IconBulletproof}
            title="Bulletproof Cloaking"
            description="Adspect reliably cloaks a long list of advertising platforms..."
            linkText="More Information"
          />
          <FeatureCard
            Icon={IconCheckerBots}
            title="Checker Bots Protection"
            description="Adspect blocks all kinds of website checkers..."
            linkText="More Information"
          />
          <FeatureCard
            Icon={IconSpyServices}
            title="Spy Services Protection"
            description="Adspect protects your ad campaigns from spy services..."
            linkText="More Information"
          />
          <FeatureCard
            Icon={IconClickFraud}
            title="Click Fraud Protection"
            description="Adspect detects click fraud in any form..."
            linkText="More Information"
          />
          <FeatureCard
            Icon={IconSafePage}
            title="Safe Page Generator"
            description="Adspect comes with a built-in safe page generator..."
            linkText="Try Live Demo"
          />
          <FeatureCard
            Icon={IconDetailedReporting}
            title="Detailed Reporting"
            description="Adspect provides detailed reports on traffic quality..."
            linkText="More Information"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;










  

  const FeaturesBelow = () => {
    return (
        <div className="relative text-center text-white">
            {/* Image */}
            <img
                src="/x.svg"
                alt="Features Image"
                className="w-full h-[35rem] object-cover"
            />
            {/* Content */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 lg:px-8 w-[95%] md:w-[80%] lg:w-[60%] max-w-[800px]"
            >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                    Cloaker Aggregator
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-6">
                    Currently using a different cloaker? Good news: most likely it is already integrated inside Adspect.
                    Adspect aggregates other cloakers: we attached twelve of our main competitors under the hood, i.e.
                    Adspect filters traffic as good as all of them combined at the very least.
                </p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                    Integrate With Any Tracker
                </h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Adspect offers several integration types, using both PHP and JavaScript, that let you integrate it
                    with any affiliate tracker. Adspect supports integration with third-party websites: Shopify, Tilda,
                    GitHub, you name it. Integration with WordPress websites is also supported.
                </p>
            </div>
        </div>
    );
};

export { FeaturesBelow };
