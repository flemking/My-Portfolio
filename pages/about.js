import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import SkillSlider from "../components/skillSlider";

function About() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div className="max-w-full text-center px-1">
      <Head>
        <title>About | JB BOHIKI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className=""
      >
        <SkillSlider />
        <div className="flex flex-col justify-between items-center md:flex-row py-10 ">
          <div className="w-full max-w-sm lg:max-w-full">
            <img
              src="/about_image.png"
              className="p-4 rounded-full object-cover"
            />
          </div>
          <div className="font-semibold w-full min-w-1/2">
            <Accordion defaultIndex={[0]} allowToggle className="w-full px-7">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" className="font-bold">
                      My Objectif
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    As a Web Developer and Python Developer, I would
                    like to put at your disposal my knowledge in these different
                    fields. I have been working as a freelancer in these fields
                    for 5+ years and I am convinced that the skills and
                    experiences I have acquired during these last years could
                    make me an ideal candidate ❤✔
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" className="font-bold">
                      Main skills
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>✔UI/UX Design</p>
                  <p>✔Frontend Web Development</p>{" "}
                  <p>✔Python and BackEnd Web Development</p>{" "}
                  <p>✔Digital Paid Marketing (Facebook Ads, Google Ads...)</p>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" className="font-bold">
                      More Skills
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    ✔ Javascript ✔ CSS ✔ PYTHON ✔ TailwindCSS ✔ Django ✔ PHP ✔
                    MySQL ✔ GIT
                  </p>
                  <p>✔ React.js ✔ Next.js ✔ Chakra UI</p>
                  <p>✔ E-commerce ✔ Shopify ✔ WordPress ✔ WebFlow ✔ Bubble</p>
                  <p>✔ Adobe Photoshop ✔ Adobe Illustrator ✔ Canva.com</p>
                  <p>
                    ✔ Strategic thinking ✔ Storytelling ✔ Graphic design ✔ Brand
                    design
                  </p>
                  <p>✔ Creation and optimization of advertising campaigns</p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" className="font-bold">
                      Experiences
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>✔ WordPress Engineer at WPBUFFS | 2021 - present</p>
                  <p>✔ Frontend Web Developer at Freelance | 2018 - present</p>
                  <p>✔ Digital Marketing Expert Freelance | 2019 - 2021</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-between">
              <a
                href="https://github.com/flemking/certifications"
                target="_blank"
                className="inline-block px-6 py-2 mt-4 bg-purple-700 rounded-full text-sm font-bold transform transition duration-500 hover:scale-90 hover:animate-pulse"
              >
                Check my Certifications
              </a>
              <a
                href="https://github.com/flemking/certifications/raw/74b4d70a3f8f38c4b833e4ceb51cb4e3f9126ebe/CV%20Bohiki%20JB%20-%20en.pdf"
                target="_blank"
                className="inline-block px-6 py-2 mt-4 bg-purple-700 rounded-full text-sm font-bold transform transition duration-500 hover:scale-90 hover:animate-pulse"
                download
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

export default About;
