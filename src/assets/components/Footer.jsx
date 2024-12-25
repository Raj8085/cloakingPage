
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" id="footer">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Row: Copyright + Flags */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-6 mb-6">
          <p className="text-sm mb-4 md:mb-0">
            © 2019–2024 Adspect. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <img
              src=" /adspect.svg"
              alt="US Flag"
              className="h-10 w-auto"
            />
            <img
              src="/us.svg"
              alt="RU Flag"
              className="h-5 w-auto"
            />
          </div>
        </div>

        {/* Bottom Row: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Column 1: Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#signup" className="hover:underline">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#clients-area" className="hover:underline">
                  Clients Area
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#documentation" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#consign" className="hover:underline">
                  Consign
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacts</h3>
            <ul className="space-y-2">
              <li>
                <a href="#marketing" className="hover:underline">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#adspect-support" className="hover:underline">
                  Adspect Support
                </a>
              </li>
              <li>
                <a href="#comsign-support" className="hover:underline">
                  Comsign Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
