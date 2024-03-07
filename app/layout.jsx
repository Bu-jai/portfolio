import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Providers from "./providers";
import Head from "./head";
import Footer from "@/components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className="dark:bg-stone-900">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
