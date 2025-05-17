import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: { template: "%s The Wild Oasis", default: "Welcome / The Wild Oasis" },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by the beautiful mountains and dark forests",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen flex flex-col ${josefin.className} antialiased relative `}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="text-center w-full max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
