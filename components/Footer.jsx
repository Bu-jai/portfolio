import Link from "next/link";

import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-0 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div className="text-neutral-900 dark:text-neutral-200">
          <p>&copy; 2024 Jireh Siayngco. All rights reserved.</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3 mb-1">
          <Link
            href={"https://www.linkedin.com/in/jireh-siayngco"}
            target="_blank"
          >
            <FaLinkedin className="h-5 w-5 text-neutral-600 dark:text-neutral-200" />
          </Link>
          <div className="flex flex-row items-center gap-2">
            <FaEnvelope className="h-5 w-5 text-neutral-600 dark:text-neutral-200" />
            <p className="text-neutral-900 dark:text-neutral-200">
              jhsiayngco@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
