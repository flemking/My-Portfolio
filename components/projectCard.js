import { Badge } from "@chakra-ui/react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII=";

function ProjectCard({ site, index }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      controls.set({ opacity: 1, y: 0 });
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: (index % 4) * 0.08 },
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, index, reduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      animate={controls}
      className="group min-w-full bg-purple-800 max-w-10/12 p-1 my-10 rounded-xl border-2 border-purple-700 drop-shadow-xl transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500"
    >
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full overflow-hidden rounded"
      >
        {site.placeholder ? (
          <div
            className="relative w-full h-52 sm:h-64 rounded flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-700 animate-gradient"
            style={{ backgroundSize: "200% 200%" }}
          >
            <span className="text-4xl mb-2" aria-hidden="true">
              ⚙️
            </span>
            <span className="text-xl font-bold tracking-wide">
              {site.placeholder}
            </span>
          </div>
        ) : (
          <Image
            src={site.imageUrl}
            alt={`portfolio ${site.title}`}
            width={700}
            height={300}
            layout="responsive"
            className="w-full object-cover rounded transform transition duration-500 group-hover:scale-110"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        )}
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
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            {site.title}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
