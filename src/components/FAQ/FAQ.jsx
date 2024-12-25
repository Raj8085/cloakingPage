// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion";
  
  
  
//   const FAQList = [
//     {
//       question: "Device Issues: Why is my iPhone battery draining quickly?",
//       answer: "We help identify apps or settings causing excessive battery usage and optimize performance.",
//       value: "item-1",
//     },
//     {
//       question: "App Troubleshooting: How do I fix crashing apps?",
//       answer:
//         "Resolve app crashes, update issues, and installation problems efficiently.",
//       value: "item-2",
//     },
//     {
//       question:
//         "iOS Updates: Why is my iOS update stuck?",
//       answer:
//         "Assistance with failed or stuck iOS updates to keep your device running smoothly.",
//       value: "item-3",
//     },
//     {
//       question: "iCloud Support: How do I recover files from iCloud?",
//       answer: "Recover lost files, sync data, and manage backups with expert guidance.",
//       value: "item-4",
//     },
//     {
//       question:
//         "Apple ID Issues: How do I reset my Apple ID password?",
//       answer:
//         "We assist with resetting passwords, unlocking accounts, and enhancing security.",
//       value: "item-5",
//     },
//   ];
  
//   export const FAQ = () => {
//     return (
//       <section
//         id="faq"
//         className="container py-24 sm:py-32"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//         FAQ{" "}
//           <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//             Questions
//           </span>
//         </h2>
  
//         <Accordion
//           type="single"
//           collapsible
//           className="w-full AccordionRoot"
//         >
//           {FAQList.map(({ question, answer, value }) => (
//             <AccordionItem
//               key={value}
//               value={value}
//             >
//               <AccordionTrigger className="text-left">
//                 {question}
//               </AccordionTrigger>
  
//               <AccordionContent>{answer}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
  
//         <h3 className="font-medium mt-4">
//           Still have questions?{" "}
//           <a
//             rel="noreferrer noopener"
//             href="#"
//             className="text-primary transition-all border-primary hover:border-b-2"
//           >
//             Contact us
//           </a>
//         </h3>
//       </section>
//     );
//   };
  



import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
//   const FAQList = [
//     {
//       question: "What is cloaking?",
//       answer:
//         "Cloaking is a security mechanism that prevents unauthorized access to your website: legitimate visitors are allowed to view real website content whereas bots, competitors, and other malicious actors see a different version of it.",
//       value: "item-1",
//     },
//     {
//       question: "What am i allowed to advertise with Adspect?",
//       answer: "You may advertise anything you want. Adspect follows a no questions asked policy: we do not care what you run and do not enforce any content rules.",
//       value: "item-2",
//     },
//     {
//         question: "What makes you better than competitors?",
//         answer: `1. **Adspect aggregates other cloakers**: We check clicks with 12 competing cloaking services in addition to our own databases and filters, making us at least as good as all of them combined. If you are currently using a different cloaker, then most likely Adspect already has it integrated.
      
//       2. **Adspect has the largest IP address databases in the industry**: We maintain 1.6+ billion IPv4 addresses in the main database, 2.3+ billion IPv4 addresses in the paranoid database, and 33,000+ IPv6 networks.
      
//       3. **First to filter by JavaScript fingerprints**: Adspect is the first cloaking service to implement filtering based on JavaScript fingerprints.
      
//       4. **Exclusive TCP/IP fingerprint filtering**: Adspect is the only service that filters by TCP/IP fingerprints.
      
//       5. **Exclusive SSL/TLS fingerprint filtering**: Adspect is the only service that filters by SSL/TLS fingerprints.
      
//       6. **Advanced VLA™ machine learning**: Adspect uses true VLA™ machine learning based on a discrete Bayes classifier. This is a genuine technology, not just a marketing gimmick.
      
//       7. **Built-in safe page generator**: Our service includes a built-in safe page generator that creates complete WordPress websites automatically.
      
//       8. **Comprehensive built-in tracker**: Adspect features a built-in tracker with detailed reporting, subaccounting, automatic A/B testing, automatic money page rotation, and other advanced functionalities.
      
//       9. **Robust API for automation**: Adspect provides an API that allows you to automate your workflows seamlessly.
      
//       And that’s just a few of our key advantages.`,
//         value: "item-3",
//       },
//     {
//       question: "Do you cloak Google tracking template?",
//       answer: "Yes, Adspect is fully compatible with Google tracking template and cloaks it just as good as regular Google Ads campaigns.",
//       value: "item-4",
//     },
//     {
//       question: "Do I need programming knowledge to use Adspect?",
//       answer:
//         "No, you do not need any programming experience to use Adspect. All settings are in the web interface, you do not have to edit PHP files to change them.",
//       value: "item-5",
//     },
//     {
//         question: "Is there a limit on the number of ad campaigns",
//         answer:
//           "No, there is no limit on the number of advertising campaigns. You may run any number of campaigns.",
//         value: "item-6",
//       },
//       {
//         question: "Is there a limit on the number of clicks",
//         answer:
//           "No, there is no limit on the number of clicks. You may run any traffic volumes.",
//         value: "item-7",
//       },
//       {
//         question: "Do you provide safe pages?",
//         answer:
//           "Yes, Adspect provides a built-in safe page generator by Comsign.",
//         value: "item-8",
//       },
//     //   {
//     //     question: "Do you have a referral program?",
//     //     answer:
//     //       "Yes, Adspect has a 10% referral program. You may find more information in the Referral Program chapter of Adspect documentation.",
//     //     value: "item-9",
//     //   },
//     //   {
//     //     question: "Do you have an API?",
//     //     answer:
//     //       "Yes, Adspect provides a full-featured REST API that lets you completely automate your work.",
//     //     value: "item-10",
//     //   },
//   ];

const FAQList = [
    {
      question: "What is cloaking?",
      answer:
        "Cloaking is a security mechanism that prevents unauthorized access to your website: legitimate visitors are allowed to view real website content whereas bots, competitors, and other malicious actors see a different version of it.",
      value: "item-1",
    },
    {
      question: "What am I allowed to advertise with Adspect?",
      answer: "You may advertise anything you want. Adspect follows a no questions asked policy: we do not care what you run and do not enforce any content rules.",
      value: "item-2",
    },
    {
      question: "What makes you better than competitors?",
      answer: `1. **Adspect aggregates other cloakers**: We check clicks with 12 competing cloaking services in addition to our own databases and filters, making us at least as good as all of them combined. If you are currently using a different cloaker, then most likely Adspect already has it integrated.
    
    2. **Adspect has the largest IP address databases in the industry**: We maintain 1.6+ billion IPv4 addresses in the main database, 2.3+ billion IPv4 addresses in the paranoid database, and 33,000+ IPv6 networks.
    
    3. **First to filter by JavaScript fingerprints**: Adspect is the first cloaking service to implement filtering based on JavaScript fingerprints.
    
    4. **Exclusive TCP/IP fingerprint filtering**: Adspect is the only service that filters by TCP/IP fingerprints.
    
    5. **Exclusive SSL/TLS fingerprint filtering**: Adspect is the only service that filters by SSL/TLS fingerprints.
    
    6. **Advanced VLA™ machine learning**: Adspect uses true VLA™ machine learning based on a discrete Bayes classifier. This is a genuine technology, not just a marketing gimmick.
    
    7. **Built-in safe page generator**: Our service includes a built-in safe page generator that creates complete WordPress websites automatically.
    
    8. **Comprehensive built-in tracker**: Adspect features a built-in tracker with detailed reporting, subaccounting, automatic A/B testing, automatic money page rotation, and other advanced functionalities.
    
    9. **Robust API for automation**: Adspect provides an API that allows you to automate your workflows seamlessly.
    
    And that’s just a few of our key advantages.`,
      value: "item-3",
    },
    {
      question: "Do you cloak Google tracking template?",
      answer: "Yes, Adspect is fully compatible with Google tracking template and cloaks it just as good as regular Google Ads campaigns.",
      value: "item-4",
    },
    {
      question: "Do I need programming knowledge to use Adspect?",
      answer:
        "No, you do not need any programming experience to use Adspect. All settings are in the web interface, you do not have to edit PHP files to change them.",
      value: "item-5",
    },
    {
      question: "Is there a limit on the number of ad campaigns?",
      answer:
        "No, there is no limit on the number of advertising campaigns. You may run any number of campaigns.",
      value: "item-6",
    },
    {
      question: "Is there a limit on the number of clicks?",
      answer:
        "No, there is no limit on the number of clicks. You may run any traffic volumes.",
      value: "item-7",
    },
    {
      question: "Do you provide safe pages?",
      answer:
        "Yes, Adspect provides a built-in safe page generator by Comsign.",
      value: "item-8",
    },
    {
      question: "Do you have a referral program?",
      answer:
        "Yes, Adspect has a 10% referral program. You may find more information in the Referral Program chapter of Adspect documentation.",
      value: "item-9",
    },
    {
      question: "Do you have an API?",
      answer:
        "Yes, Adspect provides a full-featured REST API that lets you completely automate your work.",
      value: "item-10",
    },
  ];
  


  export const FAQ = () => {
    return (
      <section id="faq" className="container py-24 sm:py-32 text-white bg-black">
        {/* Center the heading and optional intro text */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FAQ{" "}
            <span className="bg-gradient-to-b bg-clip-text text-white">
              Questions
            </span>
          </h2>
          <p className="mb-8 text-white">
            Below are some of the most frequently asked questions.
          </p>
        </div>
  
        {/* Center the accordion, but keep triggers left-aligned */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full AccordionRoot">
            {FAQList.map(({ question, answer, value }) => (
              <AccordionItem key={value} value={value}>
                {/* Override to keep question text left-aligned if you like */}
                <AccordionTrigger className="text-left font-semibold">
                  {question}
                </AccordionTrigger>
  
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
  
          <h3 className="font-medium mt-8 text-center">
            Still have questions?{" "}
            <a
              rel="noreferrer noopener"
              href="#"
              className="text-white transition-all border-primary hover:border-b-2"
            >
              Contact us
            </a>
          </h3>
        </div>
      </section>
    );
  };
  