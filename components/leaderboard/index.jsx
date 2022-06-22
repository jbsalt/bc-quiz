import LeaderboardEntry from "./entry";
import styles from "./index.module.css";

export default function Leaderboard(props) {
  const { entries, userId } = props;

  return (
    <ol className={styles.leaderboard}>
      {entries.map((entry, index) => (
        <LeaderboardEntry key={entry.id} entry={entry} highlighted={entry.id == userId } />
      ))}
    </ol>
  );
}
