import backgroundImage from "../assets/background.webp";
const Hero = ({title, text}) => {
  return (
    <div
      className="relative h-96 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
