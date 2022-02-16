import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ertkjern</title>
        <meta
          name="description"
          content="Presentational website for Ertkjern"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <video
          id="backgroundVideo"
          playsInline
          autoPlay
          muted
          loop
          className={styles.headerVideo}
        >
          <source src="/video/waves.mp4" type="video/mp4" />
        </video>
        <div className={styles.text}>ERTKJERN</div>
        <nav className={styles.navigation}>
          <a>CV</a>
          <a>Projects</a>
          <a>About</a>
        </nav>
      </main>
    </>
  );
};

export default Home;
