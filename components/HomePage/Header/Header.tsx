"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import { ThemeContext } from "@/context/Theme";

import classes from "./Header.module.css";

import Menu from "./Menu";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  function openManuHandler() {
    setIsMenuVisible(true);
  }

  function closeManuHandler() {
    setIsMenuVisible(false);
  }

  return (
    <>
      <header
        className={`container ${["glassmorphism-block"]} ${classes.header}`}
      >
        <ul>
          <li id={classes.zenlogo}>
            <Image
              width={50}
              height={50}
              src={`/zenlogo-${theme}.svg`}
              alt="Zen Logo"
            />
          </li>
          <li id={classes.mastercard}>
            <Image
              width={65}
              height={40}
              src="/mastercard.svg"
              alt="MasterCard Logo"
            />
          </li>
        </ul>
        <nav id={classes.links}>
          <ul>
            <li>Personal</li>
            <li>Business</li>
          </ul>
          <ul>
            <li>Zenefits</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <div className={classes.icons}>
          <div id={classes["theme-icon"]}>
            <Image
              onClick={toggleTheme}
              width={30}
              height={30}
              src={`/theme-icon-${theme}.svg`}
              alt="Theme icon"
            />
          </div>
          <div onClick={openManuHandler} className={`${classes.hamburger}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <Menu isMenuVisible={isMenuVisible} onClose={closeManuHandler} />
    </>
  );
}
