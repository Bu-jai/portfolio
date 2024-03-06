import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Providers from "./providers";
import Head from "./head";

// export const metadata = {
//   title: "Jireh Siayngco",
//   description: "An online portfolio.",
// };

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head />
      <body className="dark:bg-stone-900">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
