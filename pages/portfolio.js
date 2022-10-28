import { Badge, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

function Portfolio() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const portfolio = [
    {
      key: 0,
      title: "Python Scripts and Web Apps",
      imageUrl: "https://i.ibb.co/RCcMQ6y/code-gf7ea0c849-1280.png",
      techs: ["APIs", "Python", "Automation", "AI", "Scripting"],
      url: "https://github.com/flemking",
    },
    {
      key: 1,
      title: "Globe Dico",
      imageUrl: "https://i.ibb.co/2sd2d2z/gobleedico.png",
      techs: ["APIs", "React", "Material UI"],
      url: "https://globedico.flemking.com/",
    },
    {
      key: 2,
      title: "Maison Efa",
      imageUrl: "https://i.ibb.co/zxF1QkR/maisonefa.png",
      techs: ["Custom CSS", "Wordpress"],
      url: "https://flemking.com/maisonefa",
    },
    {
      key: 3,
      title: "Nike Ecommerce (Unofficial)",
      imageUrl: "https://i.ibb.co/BwpJcTc/ecommerce-website.png",
      techs: ["SASS", "HTML", "JavaScript"],
      url: "https://silly-clarke-af447d.netlify.app/",
    },
    {
      key: 4,
      title: "Restaurant Website",
      imageUrl: "https://i.ibb.co/wJcc1CY/Fast-food-website.png",
      techs: ["CSS", "HTML", "JavaScript"],
      url: "https://distracted-lovelace-c52e3a.netlify.app/",
    },
    {
      key: 5,
      title: "Pokemon Generator",
      imageUrl: "https://i.ibb.co/6XJ7zDs/Pokemon-App.png",
      techs: ["ChakraUI", "React", "TailwindCSS"],
      url: "https://yosemitelabs-frontend-test.vercel.app",
    },
    {
      key: 6,
      title: "Oscargroupe Website",
      imageUrl: "https://i.ibb.co/hg60Cm4/oscargroupe.png",
      techs: ["Custom CSS", "WordPress", "Client"],
      url: "https://oscargroupe.com",
    },
    {
      key: 7,
      title: "Starbucks Desktop Landing Page (Unofficial)",
      imageUrl: "https://i.ibb.co/qrB2dnF/Starbucks-Landing-Page.png",
      techs: ["JavaScript", "HTML", "TailwindCSS"],
      url: "https://nostalgic-torvalds-2aeff9.netlify.app/",
    },
  ];
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className=""
    >
      <Head>
        <title>Portfolio | JB BOHIKI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center min-w-full max-w-full px-1">
        {portfolio.map((site) => (
          <div
            key={site.key}
            className="min-w-full max-w-10/12 px-1 my-10 rounded-xl border-2 border-purple-700 drop-shadow-xl"
          >
            <a href={site.url} target="_blank" className="w-full">
              <Image
                src={site.imageUrl}
                alt={`portfolio ${site.title}`}
                className="w-full object-cover rounded"
              />
            </a>

            <div className="p-6">
              <div className="flex items-baseline">
                {site.techs.map((tech) => (
                  <Badge
                    key={tech}
                    borderRadius="full"
                    mx="2"
                    px="2"
                    colorScheme="purple"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="text-center mt-1 font-bold text-xl">
                <a href={site.url} target="_blank">
                  {site.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.main>
  );
}

export default Portfolio;
