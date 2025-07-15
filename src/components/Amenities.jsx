import { Link } from "react-router-dom";
import {
  Coffee,
  Wifi,
  Car,
  Shield,
  UtensilsCrossed,
  Users,
  Phone,
  Moon,
  Code,
  LayoutGrid,
  Sun,
  ArrowUpDown,
  ChevronRight,
} from "lucide-react";

// Export amenities data so it can be reused in the full page
export const allAmenities = [
  { name: "High-speed Internet", icon: <Wifi className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Unlimited Tea & Coffee", icon: <Coffee className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Parking", icon: <Car className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Elevator Access", icon: <ArrowUpDown className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Security", icon: <Shield className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Cafeteria", icon: <UtensilsCrossed className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Huddle Spaces", icon: <Users className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Telephone Booths", icon: <Phone className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Prayer Area", icon: <Moon className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Tech Development Services", icon: <Code className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Meeting Spaces", icon: <LayoutGrid className="h-5 w-5 md:h-6 md:w-6" /> },
  { name: "Skylight", icon: <Sun className="h-5 w-5 md:h-6 md:w-6" /> },
];

const AmenitiesSection = () => {
  // Only display the first 5 amenities
  const displayedAmenities = allAmenities.slice(0, 5);

  return (
    <div id="Amenities" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-black mb-2 md:mb-3">
            Our Amenities
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for a productive and comfortable workspace
            experience.
          </p>
        </div>

        {/* Mobile View - Icon Grid */}
        <div className="grid grid-cols-5 gap-3 md:hidden">
          {displayedAmenities.map((amenity, index) => (
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
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayedAmenities.map((amenity, index) => (
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
            </div>
          ))}
        </div>

        {/* View All Amenities Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Link to="/amenities" className="group flex items-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-lg transition-all duration-300">
            <span className="font-medium">View All Amenities</span>
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;