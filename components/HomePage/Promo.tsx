import Image from "next/image";
import classes from "./Promo.module.css";
import InvertBlock from "@/UI/InvertBlock";

export default function Promo() {
  return (
    <section
      className={`container ${["glassmorphism-block"]} ${classes.promo}`}
    >
      <main className={`${classes["text-block"]} ml-60`}>
        <div className={classes.playBtn}>
          <InvertBlock className={classes["playBtn-img"]}>
            <Image
              src="/play-btn.svg"
              width={25}
              height={25}
              alt="Play button"
            />
          </InvertBlock>
          <p>In every beginning, there is chaos.</p>
        </div>
        <h1>
          Peaceful shopping.<br></br> Mindful money.
        </h1>
        <p className={classes.paragraph}>
          See how we can help with making your shopping <br></br> experience and
          money management more ZEN.
        </p>
        <div className={classes.btns}>
          <a
            target="_blank"
            href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
          >
            <Image
              src="/app-store.svg"
              width={170}
              height={50}
              alt="Play button"
            />
          </a>
          <a target="_blank" href="https://play.google.com/store/games?hl=ru">
            <Image
              src="/google-play.svg"
              width={170}
              height={50}
              alt="Play button"
            />
          </a>
        </div>
      </main>
      <div className={classes["img-block"]}>
        <div className={classes["card-front"]}>
          <Image
            width={306}
            height={251}
            src="/zencard.png"
            alt="ZenBank card front"
          />
        </div>
        <Image
          className={classes.phone}
          width={428}
          height={510}
          src="/iphone-promo.png"
          alt="Promo Phone Image"
        />
        <div className={classes["card-back"]}>
          <Image
            width={286}
            height={231}
            src="/zencard.png"
            alt="ZenBank card front"
          />
        </div>
      </div>
    </section>
  );
}
