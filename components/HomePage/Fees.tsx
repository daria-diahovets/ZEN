import Image from "next/image";
import classes from "./Fees.module.css";

export default function Fees() {
  return (
    <section className={`container ${["glassmorphism-block"]} ${classes.fees}`}>
      <div className={classes["img-block"]}>
        <Image className={classes.phone} width={546.8} height={334.4} src="/phone-fees.png" alt="phone fees"/>
        {/* 1367 × 836 / 455 × 267 /2.5 */}
        <Image className={classes.card} width={182} height={106.8} src="/card-fees.png" alt="card-fees"/>
      </div>
      <div className={classes["text-block"]}>
        <h2>Shopping with no fees</h2>
        <p>
          Online shopping is flawed with all kind of fees. Currency exchange
          fees, processing fees and even fees for having multiple fees. Getting
          rid of them became our hobby. Same goes for ATM withdrawal fees.
        </p>
        <p>
          Enjoy your money globally. Every uncut part of it. Keep reading. ZEN
          goes beyond shopping with a fully functional account.
        </p>
      </div>
    </section>
  );
}
