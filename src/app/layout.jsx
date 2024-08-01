import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
// import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import Providers from "@/store/Providers";
import NextTopLoader from 'nextjs-toploader';


export const metadata = {
  title: "Splitdyboat",
  description: "",
};
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children }) {
  return (
    // <Providers>
    <html lang="en">

      <body className={cn("", montserrat.className)}>
        <Toaster position="top-center" reverseOrder={false} />
        <NextTopLoader
          color="#99badd"
          initialPosition={0.08}
          crawlSpeed={400}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
        <div className="  flex justify-center items-center ">
          {children}
        </div>

      </body>
    </html>
    // </Providers>
  );
}