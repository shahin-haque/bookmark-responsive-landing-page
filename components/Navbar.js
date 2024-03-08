import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src="/logo-bookmark.svg"
            alt="logo-bookmark "
            width={148}
            height={25}
          />
        </Link>
        <ul>
          <li>
            <Link href="features">Features</Link>
          </li>
          <li>
            <Link href="pricing">Pricing</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
          <li>
            <Link href="login">Login</Link>
          </li>
        </ul>
      </nav>
      <button>
        <Image
          src="/icon-hamburger.svg"
          alt="logo-bookmark "
          width={18}
          height={15}
        />
      </button>
    </header>
  );
};

export default Navbar;
