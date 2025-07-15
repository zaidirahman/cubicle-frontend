import heroimg from "../assets/hero.webp";
import Logo from "../assets/LogoFull.svg";
import { Link } from "react-router-dom";

const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;

const Hero = () => {
  return (
    <section
      id="About"
      className="bg-gradient-to-b from-white to-emerald-50 py-12"
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <img
              src={Logo}
              alt="The Cubicle Logo"
              className="w-auto h-16 md:h-20 lg:h-24 mx-auto lg:mx-0 mb-6"
            />

            <h2 className="text-2xl font-bold text-emerald-800 mb-4 md:text-3xl">
              Your Premium Coworking Space in Gulberg
            </h2>

            <p className="mb-8 text-gray-700 lg:mb-10 md:text-lg lg:text-xl leading-relaxed">
              Whether you're brainstorming your next big idea or tackling your
              to-do list, we're here to make work feel effortless and inspiring.
              Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => (window.location.href = `tel:${phoneNumber}`)}
                className="rounded-lg bg-white px-6 py-3 font-bold text-emerald-600 shadow-md transition-all hover:bg-blue-50 border border-emerald-200"
              >
                Contact Us
              </button>

              <Link
                className="rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white shadow-md transition-all hover:bg-emerald-700 text-center"
                to="/#Contact"
              >
                Book a Tour
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={heroimg}
            alt="Office workspace"
            className="w-full h-auto rounded-xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;