import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MetaPixelListener = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixelListener;

export const trackEvent = (eventName, params = {}) => {
  if (window.fbq) {
    window.fbq("track", eventName, params);
  } else {
    console.warn("Meta Pixel not initialized yet.");
  }
};
