import Image from "next/image";
import classes from "./Account.module.css";

export default function Account() {
  return (
    <section
      className={`container ${["glassmorphism-block"]} ${classes.account}`}
    >
      <div className={classes["img-block"]}>
        <Image width={477} height={426} src="/iphone-account.png" alt="Iphone Account" />
      </div>
      <div className={classes["text-block"]}>
        <h2>Quick and easy account creation</h2>
        <p>
          Now, you might be thinking that it’s just like any other account
          creation… Long, tiresome and full of endless blanks to fill in. Well,
          it’s not.
        </p>
        <p>
          We have designed the whole process to make it the simplest and the
          shortest one ever conceived for a personal account. Download the app
          and see for yourself!
        </p>
      </div>
    </section>
  );
}
