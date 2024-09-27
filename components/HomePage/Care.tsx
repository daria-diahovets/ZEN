import Image from "next/image";
import classes from "./Care.module.css";

export default function Care() {
  return (
    <section className={`container ${["glassmorphism-block"]} ${classes.care}`}>
      <div className={`${classes["text-block"]} ml-60`}>
        <h2>ZEN Care</h2>
        <p>
          Shopping online is usually a delightful experience. Until it's not.
        </p>
        <p>
          Until something you buy, proves to be faulty, missing or a totally
          wrong item, you’re in for long product return procedures.
        </p>
        <p>
          But, here comes ZEN Care: a free, built-in shopping protection. You
          can rest assured we’ll handle all of the transaction-related problems
          faster and with higher success rates. Where lone consumers can be
          ignored or dumped by dishonest merchants, ZEN doesn't get discouraged.
          ZEN persists.
        </p>
      </div>
      <div className={classes['img-block']}>
        <Image
          width={342}
          height={433}
          src="/iphone-care.png"
          alt="Care Phone"
        />
      </div>
    </section>
  );
}
