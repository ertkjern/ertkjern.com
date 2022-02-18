import type { NextPage } from 'next';
import Head from 'next/head';
import CV from '../components/layout/cv/cv';
import styles from '../styles/pages/Home.module.scss';

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
        <div className={styles.navigation}>
          <a>CV</a>
          <a><span>Proj</span><span>ects</span></a>
          <a>About</a>
        </div>
        <CV />
      </main>
    </>
  );
};

export default Home;
