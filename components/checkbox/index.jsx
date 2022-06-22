import styles from "./index.module.css";
import SvgIcon from "../svg-icon";
import cx from "classnames";

export default function Checkbox(props) {
  const { checked } = props;

  const className = cx(styles.container, {
    [styles.checked]: checked,
  });

  return (
    <div className={className}>
      {checked ? <SvgIcon icon="tick" className={styles.tick} /> : null}
    </div>
  );
}
