import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/layout/about/about';
import CV from '../components/layout/cv/cv';
import Projects from '../components/layout/projects/projects';
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Ertkjern</title>
        <meta
          name="description"
          title='Ertkjern.com'
          content="CV og prosjekter."
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
        <div className={`${styles.text} ${styles.largeText}`}>ERTKJERN</div>
        <div className={`${styles.text} ${styles.smallText}`}>
          <span>ERT</span>
          <span>KJERN</span>
          </div>

        <div className={styles.navigation}>
        <div className={styles.navigationLinkWrapper}>
            <Link href="/#about">
              <a>Om</a>
              </Link>
          </div>
          <div className={styles.navigationLinkWrapper}>
            <Link href="/#projects">
              <a>Prosjekt</a>
            </Link>
          </div>
          <div className={styles.navigationLinkWrapper}>
            <Link href="/#CV">
              <a>CV</a>
            </Link>
          </div>
        </div>
        <div className={styles.mainContent}>
          <About />
          <Projects />
          <CV />
        </div>
      </main>
    </>
  );
};

export default Home;
