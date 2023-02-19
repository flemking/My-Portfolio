import { Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

function Portfolio() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const portfolio = [
    {
      key: 10,
      title: "Earthquakes Datas",
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
        {portfolio.map((site) => (
          <div
            key={site.key}
            className="min-w-full bg-purple-800 max-w-10/12 p-1 my-10 rounded-xl border-2 border-purple-700 drop-shadow-xl"
          >
            <a href={site.url} target="_blank" className="w-full">
              <Image
                src={site.imageUrl}
                alt={`portfolio ${site.title}`}
                width={700}
                height={300}
                layout="responsive"
                className="w-full object-cover rounded"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
              />
            </a>

            <div className="p-6">
              <div className="flex flex-wrap items-center justify-center">
                {site.techs.map((tech) => (
                  <Badge
                    key={tech}
                    borderRadius="full"
                    m="2"
                    px="2"
                    colorScheme="purple"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="text-center mt-1 font-bold text-xl underline">
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
