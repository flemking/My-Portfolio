import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";
import ProjectCard from "../components/projectCard";

// Derive a live screenshot from a project's URL (keyless, renders on first load).
const shot = (url) =>
  `https://image.thum.io/get/width/700/crop/400/noanimate/${url}`;

function Portfolio() {
  const reduceMotion = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const portfolio = [
    {
      key: 15,
      title: "Exportbenin.bj — APIEx Export Platform",
      imageUrl: shot("https://exportbenin.bj"),
      techs: ["Next.js", "AI Chatbot", "Exporter Directory", "Gov / UN", "Client"],
      url: "https://exportbenin.bj",
    },
    {
      key: 14,
      title: "Investbenin.bj — Investment Ecosystem",
      imageUrl: shot("https://investbenin.bj"),
      techs: ["Web Platform", "Investment Ecosystem", "Government", "Client"],
      url: "https://investbenin.bj",
    },
    {
      key: 13,
      title: "CRM & Automation Systems",
      placeholder: "Automation Stack",
      techs: ["Zoho", "HubSpot", "GHL", "n8n", "Make", "Automation"],
      url: "https://www.linkedin.com/in/flemking",
    },
    {
      key: 12,
      title: "Supermarches.bj",
      imageUrl: "https://i.ibb.co/qYYYKzs/supermarches.png",
      techs: ["WordPress", "Paiement Integration", "Marketplace"],
      url: "https://supermarches.bj",
    },
    {
      key: 11,
      title: "JSearch - Job Search App",
      imageUrl: "https://i.ibb.co/m6DbjHH/JSearch-app.png",
      techs: ["React Native", "Expo Router", "Google Jobs API"],
      url: "https://expo.dev/@flemking/react-native-jsearch?serviceType=classic&distribution=expo-go",
    },
    {
      key: 10,
      title: "Earthquakes Globe",
      imageUrl: "https://i.ibb.co/5MHVYr8/earthquakes-geo-globe-projects.png",
      techs: ["Vite", "React.js", "TailwindCSS", "MapBox GL JS", "USGS API"],
      url: "https://earthquakes-globe.netlify.app/",
    },
    {
      key: 9,
      title: "Bot-Vinted",
      imageUrl: "https://i.ibb.co/Vv0hPK3/bot-vinted-project.png",
      techs: [
        "React.js",
        "TailwindCSS",
        "Express.js",
        "Scraping Bot",
        "MongoDB",
        "Stripe Payments",
        "Client",
      ],
      url: "https://bot-vinted.com",
    },
    {
      key: 8,
      title: "Web Articles Generator",
      imageUrl: "https://i.ibb.co/8zxCs62/writerai-flemking-com.png",
      techs: ["GPT-3 API", "Django", "Tailwind", "AI", "Scripting"],
      url: "https://www.linkedin.com/posts/flemking_gpt3-django-contentcreation-activity-7024065322647224320-O8x6?utm_source=share&utm_medium=member_desktop",
    },
    {
      key: 7,
      title: "Python Scripts and Web Apps",
      imageUrl: "https://i.ibb.co/RCcMQ6y/code-gf7ea0c849-1280.png",
      techs: ["APIs", "Python", "Automation", "AI", "Scripting"],
      url: "https://github.com/flemking",
    },
    {
      key: 6,
      title: "Globe Dico",
      imageUrl: "https://i.ibb.co/2sd2d2z/gobleedico.png",
      techs: ["APIs", "React", "Material UI"],
      url: "https://globedico.flemking.com/",
    },
    {
      key: 5,
      title: "Maison Efa",
      imageUrl: "https://i.ibb.co/zxF1QkR/maisonefa.png",
      techs: ["Custom CSS", "Wordpress"],
      url: "https://flemking.com/maisonefa",
    },
    {
      key: 4,
      title: "Nike Ecommerce (Unofficial)",
      imageUrl: "https://i.ibb.co/BwpJcTc/ecommerce-website.png",
      techs: ["SASS", "HTML", "JavaScript"],
      url: "https://silly-clarke-af447d.netlify.app/",
    },
    {
      key: 3,
      title: "Restaurant Website",
      imageUrl: "https://i.ibb.co/wJcc1CY/Fast-food-website.png",
      techs: ["CSS", "HTML", "JavaScript"],
      url: "https://distracted-lovelace-c52e3a.netlify.app/",
    },
    {
      key: 2,
      title: "Pokemon Generator",
      imageUrl: "https://i.ibb.co/6XJ7zDs/Pokemon-App.png",
      techs: ["ChakraUI", "React", "TailwindCSS"],
      url: "https://yosemitelabs-frontend-test.vercel.app",
    },
    {
      key: 1,
      title: "Oscargroupe Website",
      imageUrl: "https://i.ibb.co/hg60Cm4/oscargroupe.png",
      techs: ["Custom CSS", "WordPress", "Client"],
      url: "https://oscargroupe.com",
    },
    {
      key: 0,
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
      <div className="text-center min-w-full max-w-full">
        <div className="pt-6 pb-2">
          <p className="uppercase tracking-widest text-xs text-purple-300 mb-3">
            2017 &mdash; 2026
          </p>
          <h1
            className={`text-4xl sm:text-5xl font-bold inline-block bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent ${
              reduceMotion ? "" : "animate-gradient"
            }`}
            style={{ backgroundSize: "200% auto" }}
          >
            Selected Work
          </h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Government platforms, automation systems, and product builds &mdash;
            newest first.
          </p>
        </div>
        {portfolio.map((site, index) => (
          <ProjectCard key={site.key} site={site} index={index} />
        ))}
      </div>
    </motion.main>
  );
}

export default Portfolio;
