import styles from "./index.module.css";

export default function LeaderboardEntry(props) {
  const { entry, highlighted } = props;

  return (
    <li className={`${styles.list} ${highlighted ? styles.highlighted : ""}`}>
      <div className={styles.listInner}>
        {entry.name || "Anon 👀"} <span style={{color: '#cccccc', marginLeft: '5px'}}>{entry.score} / 3</span>
      </div>
    </li>
  );
}
