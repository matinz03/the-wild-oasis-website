import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
export const metadata = { title: "The Wild Oasis" };
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-stone-700">
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
