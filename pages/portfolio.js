import { Badge, Box, Image } from "@chakra-ui/react";
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
      title: "Maison Efa",
      imageUrl: "https://i.ibb.co/zxF1QkR/maisonefa.png",
      techs: ["Custom CSS", "Wordpress"],
      url: "https://flemking.com/maisonefa",
    },
    {
      title: "Nike Ecommerce (Unofficial)",
      imageUrl: "https://i.ibb.co/BwpJcTc/ecommerce-website.png",
      techs: ["SASS", "HTML", "JavaScript"],
      url: "https://silly-clarke-af447d.netlify.app/",
    },
    {
      title: "Fast Food Website",
      imageUrl: "https://i.ibb.co/wJcc1CY/Fast-food-website.png",
      techs: ["CSS", "HTML", "JavaScript"],
      url: "https://youthful-northcutt-e3473c.netlify.app/",
    },
    {
      title: "Pokemon Generator",
      imageUrl: "https://i.ibb.co/6XJ7zDs/Pokemon-App.png",
      techs: ["ChakraUI", "React", "TailwindCSS"],
      url: "https://distracted-lovelace-c52e3a.netlify.app/",
    },
    {
      title: "Starbucks Destop Landing Page (Unofficial)",
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
      <div className="text-center">
        {portfolio.map((site) => (
          <Box
            maxW="sm"
            borderWidth="3px"
            borderRadius="xl"
            overflow="hidden"
            my={10}
          >
            <a href={site.url} target="_blank">
              <Image src={site.imageUrl} alt={`portfolio ${site.title}`} />
            </a>

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {site.techs.map((tech) => (
                  <Badge borderRadius="full" mx="2" px="2" colorScheme="purple">
                    {tech}
                  </Badge>
                ))}
              </Box>

              <Box
                mt="1"
                fontWeight="bold"
                as="h2"
                fontSize="21"
                lineHeight="tight"
                isTruncated
              >
                <a href={site.url} target="_blank">
                  {site.title}
                </a>
              </Box>
            </Box>
          </Box>
        ))}
      </div>
    </motion.main>
  );
}

export default Portfolio;
