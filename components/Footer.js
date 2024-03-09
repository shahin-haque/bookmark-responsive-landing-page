import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav aria-label="secondary-navigation">
        <div className="">
          <Link href="/">
            <Image
              src="/logo-bookmark.svg"
              alt="logo-bookmark "
              width={148}
              height={25}
              className="footer-logo"
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
        </div>
        <div className="social-icon">
          <Link href="/">
            <Image
              src="/icon-facebook.svg"
              alt="icon-facebook "
              width={24}
              height={24}
              className="footer-logo"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icon-twitter.svg"
              alt="icon-twitter "
              width={24}
              height={20}
              className="footer-logo"
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
