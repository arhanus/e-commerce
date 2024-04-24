import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Provider from "@/lib/query-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "aShop",
  description: "aShop the best eCommerce",
};

export default function RootLayout({ children }) {
  
  
  return (
   
    <html lang="en">
      <body className={inter.className}>
            <Provider> {/* react-query entegre ettik */}
              <Navbar />
                {children}
              <Footer />
            </Provider>
      </body>
    </html>
    
  );
}
