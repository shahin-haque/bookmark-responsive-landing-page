import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav aria-label="secondary-navigation">
        <div className={styles.footer_links_wrapper}>
          <Link href="/">
            <Image
              src="/logo-bookmark.svg"
              alt="logo-bookmark "
              width={148}
              height={25}
              className={styles.footer_logo}
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
        <div className={styles.social_icon}>
          <a href="https://www.facebook.com/" target="blank">
            <Image
              src="/icon-facebook.svg"
              alt="icon-facebook "
              width={24}
              height={24}
              className="footer-logo"
            />
          </a>
          <a href="https:/www.twitter.com" target="blank">
            <Image
              src="/icon-twitter.svg"
              alt="icon-twitter "
              width={24}
              height={20}
              className="footer-logo"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
