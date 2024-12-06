
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

// Font setup at module scope
const inter = Inter({
  subsets: ["latin"], 
  display: "swap", 
});

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" data-theme="white">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bookme</title>
        
      </head>
      <body className={inter.className}> {/* Applying the Inter font globally */}
   
        <Header></Header>
        
        {/* Main content */}
        <main className="py-6">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}