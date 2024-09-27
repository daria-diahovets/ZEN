import Image from "next/image";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`container ${["glassmorphism-block"]} ${classes.footer}`}
    >
      <div className={classes["footer-top"]}>
        <ul>
          <li>Learn</li>
          <li>Help center</li>
          <li>Join ZEN team</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Terms of use</li>
        </ul>
        <ul>
          <li>Discover</li>
          <li>For developers</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
        </ul>
        <ul>
          <li>Offers</li>
          <li>Business</li>
          <li>Personal</li>
        </ul>
        <ul>
          <li>Follow us</li>
          <li>Telegramm</li>
          <li>Twitter</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>hello@zen.com</li>
        </ul>
      </div>
      <div>
        <Image width={230} height={25} src="/zero-effort.svg" alt="zero effort"/>
      </div>
      <div className={classes["footer-bottom"]}>
        <p id={classes.copyright}>ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries. Registration number of the company 304749651, VAT ID LT100011714916. License of electronic money institutions number LB000457. Share capital 2.185.000,00 EUR. Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.</p>
        <Image width={180} height={60} src="/psi.svg" alt="psi"/>
      </div>
    </footer>
  );
}
