import Link from "next/link";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link style={{ fontSize: "32px" }} href="/cabins">
            cabins
          </Link>
        </li>
        <li>
          <Link style={{ fontSize: "32px" }} href="/about">
            about
          </Link>
        </li>
        <li>
          <Link style={{ fontSize: "32px" }} href="/account">
            account
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
