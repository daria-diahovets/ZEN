import Image from "next/image";
import classes from "./Cards.module.css";
import InvertBlock from "@/UI/InvertBlock";

export default function Cards() {
  return (
    <section
      className={`container ${["glassmorphism-block"]} ${classes.cards}`}
    >
      <div className={`${classes["text-block"]} ml-60`}>
        <h2>ZEN shopping Mastercard</h2>
        <p>You shouldn’t be bound to use one card at a time, especially when it has so many benefits! With ZEN, you can manage your shopping and finances with both physical and virtual cards.</p>
        <p>It’s convenient, streamlined, and works like a charm. You can have a shopping card, a subscription card, and whatever other cards that make sense to you.</p>
        <p>You can also link it to Google Pay and Apple Pay for more convenient payments.</p>
        <InvertBlock className={classes.icons}>
          <Image width={90} height={60} src="/apple-pay.svg" alt="apple pay"/>
          <Image width={90} height={60} src="/google-pay.svg" alt="google pay"/>
        </InvertBlock>
      </div>
      <div className={classes["img-block"]}>
        <Image width={380} height={320} src="/card-front.png" alt="zencard front"/>
        <Image width={380} height={300} src="/card-back.png" alt="zencard back"/>
      </div>
    </section>
  );
}
