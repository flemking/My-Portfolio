import { motion } from "framer-motion";
import Footer from "./footer";
import Header from "./header";

// particles
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Layout({ children }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            color: {
              value: "#fff",
            },
            number: {
              value: 14,
            },
            opacity: {
              value: { min: 0.3, max: 0.9 },
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 1, max: 5 },
            },
            move: {
              direction: "bottom-right",
              enable: true,
              speed: { min: 3, max: 5 },
              straight: true,
            },
          },
        }}
      />
      <div className="bg-zep-dark text-gray-50 ">
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          className=""
        >
          <div className="min-h-screen max-w-4xl mx-auto flex flex-col items-center justify-between">
            <Header />
            {children}
            <Footer />
          </div>
        </motion.main>
      </div>
    </>
  );
}

export default Layout;
