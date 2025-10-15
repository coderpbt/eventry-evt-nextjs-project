

import Link from "next/link";
import SignInOut from "./auth/SignInOut";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link className="text-5xl" href="/">
            Events
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <SignInOut />
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
