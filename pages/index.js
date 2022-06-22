import Head from 'next/head'
import Button from '../components/button'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Creator Quiz</title>
        <meta name="description" content="Test your knowledge on some stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Book Creator Quiz
        </h1>
        <Button large href="/quiz/question/1">Start</Button>
      </main>
    </div>
  )
}
