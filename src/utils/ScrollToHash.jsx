import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' and get the element
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Add a small delay to ensure the page is fully rendered
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);
  return null;
}