import { Link } from "react-router-dom";
import Logo from "../assets/LogoFull.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About - visible on all devices */}
          <div className="py-2 md:pr-20">
            <h2 className="mb-6 text-lg font-semibold">About</h2>
            <p className="text-white">
              TheCubicle is a premium coworking space in the heart of Gulberg,
              Lahore. We provide a collaborative environment for innovation and
              productivity.
            </p>
          </div>

          {/* Quick links - hidden on mobile */}
          <div className="py-2 pr-10 hidden md:block">
            <h2 className="mb-6 text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#Amenities"
                  className="text-white hover:text-black transition-colors duration-200"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white hover:text-black transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-white hover:text-black transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white hover:text-black transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info - hidden on mobile */}
          <div className="py-2 pr-20 hidden md:block">
            <h2 className="mb-6 text-lg font-semibold">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <Link
                  to="/#Map"
                  className="hover:text-black transition duration-300"
                >
                  89-A-C2, Gulberg III, Lahore, Pakistan
                </Link>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a
                  href={`tel:${process.env.REACT_APP_PHONE_NUMBER}`}
                  className="hover:text-black transition duration-300"
                >
                  {process.env.REACT_APP_PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:info@thecubicle.pk"
                  className="hover:text-black transition duration-300"
                >
                  info@thecubicle.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Hours and Social - show only Follow Us on mobile */}
          <div className="py-2 md:pr-10">
            {/* Hours section - hidden on mobile */}
            <h2 className="mb-6 text-lg font-semibold hidden md:block">
              Hours
            </h2>
            <ul className="mb-6 space-y-2 hidden md:block">
              <li>Monday - Friday: 8AM - 10PM</li>
              <li>Saturday: 9AM - 7PM</li>
              <li>Sunday: 10AM - 6PM</li>
            </ul>

            {/* Follow Us section - visible on all devices */}
            <h2 className="mb-4 text-lg font-semibold hidden md:block">
              Follow Us
            </h2>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link
                to="https://www.facebook.com/share/1C3WZrnyVu/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                to="https://www.instagram.com/thecubicle.pk?igsh=MTVmZDBweTJzMmh0Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                to="https://www.linkedin.com/company/thecubiclepk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom footer - visible on all devices with improved mobile layout */}
        <div className="pt-6 mt-6 border-t border-emerald-500 flex flex-col md:flex-row justify-between items-center text-center">
          {/* Company logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={Logo}
              alt="TheCubicle Logo"
              className="h-8 w-auto filter brightness-0 invert"
            />
          </div>
          <p className="text-md mb-3 md:mb-0">
            &copy; {currentYear} TheCubicle. All rights reserved.
          </p>
          <Link
            to="https://www.linkedin.com/in/zaidarahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md hover:text-black"
          >
            Developed by Zaid
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;