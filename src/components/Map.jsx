import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { CONFIG } from "../api";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: CONFIG.googleMapsApiKey,
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 31.5090573,
    lng: 74.3461216,
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div id= "Map" className="py-8 bg-gray-50 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-black mb-6">
        Our Location
      </h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Marker for the location */}
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
