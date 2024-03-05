import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Providers from "./providers";

export const metadata = {
  title: "Jireh's Portfolio",
  description: "An online portfolio.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
