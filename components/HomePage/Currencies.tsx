import Image from "next/image";
import classes from "./Currencies.module.css";

export default function Currencies() {
  return (
    <section
      className={`container ${["glassmorphism-block"]} ${classes.currencies}`}
    >
      <div className={`${classes["text-block"]} ml-60`}>
        <h2>
          One app, one account, <br></br>many currencies
        </h2>
        <p>
          ZEN Mastercard® was made for spending money. ZEN account is here to
          store and manage it peacefully, from the inside of your pocket.
        </p>
        <p>
          You can use it just like a regular account, as it has its own IBAN and
          works just the way any bank account would — but better. Store up to 30
          currencies and transfer them easily in many ways.
        </p>
      </div>
      <div className={classes["img-block"]}>
        <Image width={700} height={518} src="/ipad.gif" alt="Ipad" />
      </div>
    </section>
  );
}
