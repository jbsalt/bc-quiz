import Arrow from "/public/images/icons/arrow.svg";
import Tick from "/public/images/icons/tick.svg";
import cx from "classnames";
import styles from "./index.module.css";

export default function SvgIcon(props) {
  const { icon, className } = props;
  let Icon;
  let style = {};
  switch (icon) {
    case "leftarrow":
      Icon = Arrow;
      style.transform = `rotate(180deg)`;
      break;
    case "tick":
      Icon = Tick;
      break;
    default:
      return null;
  }

  return (
    <span className={cx(styles.icon, className)} style={style} data-testid="svg-icon">
      <Icon />
    </span>
  );
}
