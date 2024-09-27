import Image from "next/image";
import classes from "./Boost.module.css";

export default function Boost() {
  return (
    <section className={`container ${["glassmorphism-block"]} ${classes.boost}`}>
      <div className={classes["img-block"]}>
        <Image src="/phone-boost.gif" width={420} height={498} alt="phone" unoptimized/>
      </div>
      <div className={classes["text-block"]}>
        <h2>1-year warranty boost</h2>
        <p>
          ZEN cards have a very neat feature that will help you whenever your
          electronic devices start failing after the standard warranty ends,
          which is pretty common.
        </p>
        <p>
          When you buy any electronics with your ZEN shopping Mastercard®, their
          warranty gets extended by one year. How does it work? It simply does.
          Automatically.
        </p>
      </div>
    </section>
  );
}
