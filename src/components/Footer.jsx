import { Link } from "react-router-dom";
import Logo from "../assets/LogoFull.svg";
import { CONFIG } from "../api";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { to: "/#Amenities", label: "Amenities" },
    { to: "/blog", label: "Blogs" },
    { to: "/careers", label: "Careers" },
    { to: "/privacy-policy", label: "Privacy Policy" }
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: "89-AC-2, Gulberg III, Lahore, Pakistan",
      to: "/#Map",
      type: "link"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      content: CONFIG.phoneNumber,
      href: `tel:${CONFIG.phoneNumber}`,
      type: "anchor"
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      content: "info@thecubicle.pk",
      href: "mailto:info@thecubicle.pk",
      type: "anchor"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="h-6 w-6 fill-white group-hover:fill-[#1877F2] transition-colors duration-300">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
        </svg>
      ),
      url: "https://www.facebook.com/share/1C3WZrnyVu/?mibextid=wwXIfr",
      hoverColor: "group-hover:fill-[#1877F2]"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="h-6 w-6 fill-white group-hover:fill-[#E4405F] transition-colors duration-300">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
        </svg>
      ),
      url: "https://www.instagram.com/thecubicle.pk?igsh=MTVmZDBweTJzMmh0Mg==",
      hoverColor: "group-hover:fill-[#E4405F]"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="h-6 w-6 fill-white group-hover:fill-[#0A66C2] transition-colors duration-300" viewBox="0 0 29 30">
          <path d="M6.26539 9.04229V26.7383H0.377391V9.04229H6.26539ZM6.64939 3.57029C6.64939 5.26629 5.36939 6.61029 3.32139 6.61029H3.28939C1.30539 6.61029 0.0253906 5.26629 0.0253906 3.57029C0.0253906 1.84229 1.33739 0.498291 3.35339 0.498291C5.36939 0.498291 6.61739 1.84229 6.64939 3.57029ZM27.4494 16.5943V26.7383H21.5934V17.2663C21.5934 14.8983 20.7294 13.2663 18.5854 13.2663C16.9854 13.2663 15.9934 14.3543 15.5774 15.4103C15.4494 15.7943 15.3854 16.3063 15.3854 16.8503V26.7383H9.49739C9.59339 10.7063 9.49739 9.04229 9.49739 9.04229H15.3854V11.6023H15.3534C16.1214 10.3863 17.4974 8.62629 20.6974 8.62629C24.5694 8.62629 27.4494 11.1543 27.4494 16.5943Z"/>
        </svg>
      ),
      url: "https://www.linkedin.com/company/thecubiclepk/",
      hoverColor: "group-hover:fill-[#0A66C2]"
    }
  ];

  const businessHours = [
    { days: "Monday - Friday", hours: "9AM - 9PM" },
    { days: "Saturday", hours: "9AM - 7PM" }
  ];
  
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="py-2 md:pr-20">
            <h2 className="mb-6 text-lg font-semibold">About</h2>
            <p className="text-white">
              The Cubicle is a premium coworking space in Lahore with 
              private offices, collaborative environment for innovation and productivity.
            </p>
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="py-2 pr-10 hidden md:block">
            <h2 className="mb-6 text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white hover:text-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Hidden on mobile */}
          <div className="py-2 pr-20 hidden md:block">
            <h2 className="mb-6 text-lg font-semibold">Contact Us</h2>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-0.5 flex-shrink-0">{item.icon}</span>
                  {item.type === "link" ? (
                    <Link
                      to={item.to}
                      className="hover:text-black transition duration-300"
                    >
                      {item.content}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-black transition duration-300"
                    >
                      {item.content}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours and Social */}
          <div className="py-2 md:pr-10">
            {/* Hours section - Hidden on mobile */}
            <div className="hidden md:block">
              <h2 className="mb-6 text-lg font-semibold">Hours</h2>
              <ul className="mb-6 space-y-2">
                {businessHours.map((schedule, index) => (
                  <li key={index}>
                    {schedule.days}: {schedule.hours}
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us section */}
            <h2 className="mb-4 text-lg font-semibold hidden md:block">
              Follow Us
            </h2>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-8 h-8 rounded-full bg-emerald-600
                    flex items-center justify-center
                    text-gray-900
                    transition-all duration-300
                    hover:scale-110
                    group
                  "
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-6 mt-6 border-t border-emerald-500 flex flex-col md:flex-row justify-between items-center text-center">
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
            className="text-md hover:text-black transition duration-300"
          >
            Developed by Zaid
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;