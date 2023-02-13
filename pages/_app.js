import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";
import "../styles/main.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <ChakraProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ChakraProvider>
    </Layout>
  );
}

export default MyApp;
