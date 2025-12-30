import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    setVisible(true);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen justify-between bg-ctp-base">
     
      <div className="flex flex-col items-center justify-center flex-1 gap-6 px-4">
        <h1
          className={`text-6xl font-bold text-ctp-green transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          404
        </h1>

        <p
          className={`text-xl text-foreground transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          This page doesnt exist dumbass
        </p>

        <Link
          to="/"
          className={`px-6 py-2 text-sm font-medium rounded-lg border border-ctp-lavender text-ctp-lavender transform transition-transform duration-300 hover:scale-105 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Return Home
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
