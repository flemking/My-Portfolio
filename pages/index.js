import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Flemking | JB BOHIKI</title>
        <meta
          name="description"
          content="JB BOHIKI | Flemking PortfolioFrontend Web Developer"
        />
        <meta
          name="keywords"
          content="frontend,web,developer,react,next,ui,ux,design,professional,hire,html,css,javascript,js,sass,tailwind"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JB BOHIKI FLEMKING" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-center text-xl flex flex-col justify-center items-center">
          <img
            src="/Hero.svg"
            alt="Flemking image"
            className="w-10/12 max-w-xl my-3 animate-bounce-slow"
          />
          <h1>
            Hi, I'm{" "}
            <span className="font-extrabold text-3xl text-purple-700 hover:animate-pulse">
              JB BOHIKI
            </span>
          </h1>
          <p className="mx-1">
            I specialize in UX/UX Design and Frontend Web Development
          </p>
          <Link href="/portfolio">
            <a className="inline-block px-6 py-2 mt-4 bg-purple-700 rounded-full text-sm font-bold transform transition duration-500 hover:scale-90 hover:animate-pulse">
              My Portfolio
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
