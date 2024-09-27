import classes from "./Menu.module.css";

export default function Menu({
  isMenuVisible,
  onClose,
}: {
  isMenuVisible: boolean;
  onClose: () => void;
}) {
  const active = isMenuVisible ? "active" : "";

  return (
    <>
      <div className={`${classes.backdrop} ${classes[active]}`}></div>
      <ul className={`${classes.menu} ${classes[active]}`}>
        <div onClick={onClose} id={classes.close}>
          &#10005;
        </div>
        <li>Personal</li>
        <li>Business</li>
        <li>Zenefits</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
    </>
  );
}
