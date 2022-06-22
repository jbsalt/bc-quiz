import styles from './index.module.css'

export default function Content(props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}