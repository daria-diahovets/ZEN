import InvertBlock from "@/UI/InvertBlock";
import classes from "./Partners.module.css";
import Image from "next/image";

export default function Partners() {
  return (
    <section className={`${classes.partners} container`}>
      <h2>Our Partners</h2>
      <InvertBlock className={classes["partners-wrapper"]}>
        <Image
          width={195}
          height={70}
          src="/partners/booking.svg"
          alt="booking partner"
        />
        <Image
          width={195}
          height={70}
          src="/partners/aliexpress.svg"
          alt="aliexpress partner"
        />
        <Image
          width={195}
          height={70}
          src="/partners/allegro.svg"
          alt="allegro partner"
        />
        <Image
          width={195}
          height={70}
          src="/partners/zalando.svg"
          alt="zalando partner"
        />
        <Image
          width={195}
          height={70}
          src="/partners/lidl.svg"
          alt="lidl partner"
        />
        <Image
          width={195}
          height={70}
          src="/partners/media-markt.svg"
          alt="media-markt partner"
        />
        <Image
          width={195}
          height={70}
          src="/partners/RTV.svg"
          alt="RTV partner"
        />
        <Image
          width={195}
          height={70}
          src="/partners/groupon.svg"
          alt="groupon partner"
        />
        <Image
          width={195}
          height={70}
          src="/partners/booking.svg"
          alt=""
        />
        <Image
          width={195}
          height={70}
          src="/partners/aliexpress.svg"
          alt=""
        />
        <Image
          width={195}
          height={70}
          src="/partners/allegro.svg"
          alt=""
        />
        <Image
          width={195}
          height={70}
          src="/partners/zalando.svg"
          alt=""
        />
        <Image
          width={195}
          height={70}
          src="/partners/lidl.svg"
          alt=""
        />
        <Image
          width={195}
          height={70}
          src="/partners/media-markt.svg"
          alt=""
        />
        <Image
          width={195}
          height={70}
          src="/partners/RTV.svg"
          alt=""
        />
        <Image
          width={195}
          height={70}
          src="/partners/groupon.svg"
          alt=""
        />
      </InvertBlock>
    </section>
  );
}
