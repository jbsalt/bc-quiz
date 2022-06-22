import Link from "next/link";
import SvgIcon from "../svg-icon";
import cx from "classnames";
import styles from "./index.module.css";

export default function Button(props) {
  const {
    children,
    disabled,
    onClick,
    large,
    href,
    style,
    text,
    icon,
    secondary,
  } = props;

  const className = cx(styles.button, {
    [styles.large]: large,
    [styles.text]: text,
    [styles.secondary]: secondary,
  });

  const sharedProps = {
    className,
    onClick,
    style,
    disabled,
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <a {...sharedProps}>
          {icon ? <SvgIcon icon={icon} className={styles.icon} /> : null}
          {children}
        </a>
      </Link>
    );
  }

  return <button {...sharedProps}>{children}</button>;
}
