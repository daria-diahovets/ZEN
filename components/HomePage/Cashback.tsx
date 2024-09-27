import classes from "./Cashback.module.css";

export default function Cashback() {
  return (
    <section className={`${classes.cashback} container`}>
      <h2>and cashback!</h2>
      <p>
        It saves a little bit of money while you’re shopping, but in many cases
        it takes ages to get anything out of it. We gave it a thought and made
        cashback way more friendly. Up to 14% of what you spend using ZEN
        Mastercard ® will materialize on your account right after the purchase.
        It's like you haggled some cash, despite you didn't have to. Just don't
        forget to use in-app cashback link.
      </p>
    </section>
  );
}
