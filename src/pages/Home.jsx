import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/HeroHome";
import ProductOfferings from "../components/Products";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Amenities from "../components/Amenities";
import ScrollToHash from "../utils/ScrollToHash";
import WhatsAppOverlay from "../components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <ScrollToHash />
      <div>
        <Navbar />
        <About />
        <Hero />
        <Amenities />
        <ProductOfferings />
        <Map />
        <ContactForm />
        <Footer />
      </div>
        <WhatsAppOverlay 
        phoneNumber={process.env.REACT_APP_PHONE_NUMBER}
        message="Hello! I'm interested in your services."
      />

    </>
  );
};

export default Home;
