import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";

/**
 * Wrapper around the Home page that, on mount, scrolls to the section that
 * matches the current pathname (e.g. /experience -> #experience)
 */
const SectionHome = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace("/", "");
    if (!sectionId) return;
    // slight timeout to ensure DOM is rendered
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }, [location.pathname]);

  return <Home />;
};

export default SectionHome; 