import Image from "next/image";
import Logo from "../../public/images/book-creator-badge.png";
import styles from "./index.module.css";

export default function Header(props) {
  const { subtitle, title } = props;
  return (
    <div className={styles.container}>
      <div className={styles.logo} data-testid="logo">
        <Image src={Logo} alt="" />
      </div>
      {title ? (
        <h1 className={styles.title} data-testid="title">
          {title} {subtitle ? <em data-testid="subtitle">{subtitle}</em> : null}
        </h1>
      ) : null}
    </div>
  );
}
