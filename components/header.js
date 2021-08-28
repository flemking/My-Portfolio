import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between w-full max-w-4xl mx-auto">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="flex-start">
        <Link href="/">
          <a>
            <Image
              src="/Logo.png"
              alt="flemking logo"
              width={200}
              height={50}
              className="transform -translate-x-2/12"
            />
          </a>
        </Link>
      </div>
      <nav className="font-bold">
        <ul className="flex">
          <li className="p-2 transform transition duration-500 hover:scale-125 hover:text-purple-700">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="p-2 transform transition duration-500 hover:scale-125 hover:text-purple-700">
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
          <li className="p-2 transform transition duration-500 hover:scale-125 hover:text-purple-700">
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
