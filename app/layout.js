import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
export const metadata = { title: "The Wild Oasis" };
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
