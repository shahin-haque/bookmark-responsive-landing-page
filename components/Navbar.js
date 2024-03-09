"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [IsNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className={styles.top_header}>
      <Link href="/">
        <Image
          src="/logo-bookmark.svg"
          alt="logo-bookmark "
          width={148}
          height={25}
          className={styles.logo}
        />
      </Link>
      <nav aria-label="primary-navigation" className={styles.nav}>
        <ul
          className={`${styles.links_wrapper} ${
            IsNavOpen ? styles.open : null
          }`}
          onClick={() => setIsNavOpen(!IsNavOpen)}
        >
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
            <Link className="login btn-secondary" href="login">
              Login
            </Link>
          </li>
        </ul>
        <button
          className={styles.toggle_nav}
          onClick={() => setIsNavOpen(!IsNavOpen)}
        >
          {IsNavOpen ? (
            <Image
              src="/icon-close.svg"
              alt="icon-close "
              width={16}
              height={15}
            />
          ) : (
            <Image
              src="/icon-hamburger.svg"
              alt="logo-bookmark "
              width={19}
              height={17}
            />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
