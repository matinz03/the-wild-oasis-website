import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 hover:cursor-none ">
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        className="hover:brightness-75 "
      />
      <span className="text-xl font-semibold text-primary-100  hover:text-primary-500 hover:cursor-none">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
