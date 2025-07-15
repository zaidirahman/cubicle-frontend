import Header from "../components/Navbar";
import Footer from "../components/Footer";
import { allAmenities } from "../components/Amenities";
import Hero from  "../components/Hero";

const AmenitiesPage = () => {
  return (
    <>
      <Header />
      <Hero 
              title="Our Amenities"
              text="Discover the features that make our space the perfect place to work, meet, and grow." 
            />
      <main>
        <div className="w-full bg-white">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">

            {/* Mobile View - Icon Grid */}
            <div className="grid grid-cols-4 gap-4 md:hidden">
              {allAmenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                    {amenity.icon}
                  </div>
                  <p className="text-xs text-center text-gray-800">
                    {amenity.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop View - Cards */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allAmenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    {amenity.icon}
                  </div>
                  <h3 className="font-medium text-gray-800 text-lg mb-2 text-center">
                    {amenity.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {getAmenityDescription(amenity.name)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// Helper function to generate descriptions for each amenity
function getAmenityDescription(name) {
  const descriptions = {
    "High-speed Internet": "Fast and reliable fiber internet with secure connection for all your devices.",
    "Unlimited Tea & Coffee": "Complimentary beverages available throughout the day to keep you refreshed.",
    "Parking": "Convenient on-site parking with secure access for members and visitors.",
    "Elevator Access": "Full accessibility with modern elevators to all floors of the building.",
    "Security": "24/7 surveillance and secure access control for your peace of mind.",
    "Cafeteria": "Fully stocked cafeteria with fresh meals and snacks at reasonable prices.",
    "Huddle Spaces": "Comfortable areas for impromptu meetings and collaborative sessions.",
    "Telephone Booths": "Private soundproof booths for calls and virtual meetings.",
    "Prayer Area": "Dedicated quiet space for meditation and prayer.",
    "Tech Development Services": "In-house IT support and development resources for your business needs.",
    "Meeting Spaces": "Various sizes of fully equipped meeting rooms available for booking.",
    "Skylight": "Natural lighting throughout the workspace for a productive environment.",
  };
  
  return descriptions[name] || "Available for all members.";
}

export default AmenitiesPage;