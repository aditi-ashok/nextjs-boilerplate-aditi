import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditi Ashok</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            Aditi Ashok
          </h1>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/aditi_pic.jpg"
            alt="Chai pic"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="about"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about Aditi
            </p>
          </a>

          <a
            href="contact"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find Aditi's contact information
            </p>
          </a>

          <a
            href="gallery"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Gallery <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              See Aditi's work
            </p>
          </a>

        </div>
      </main>
    </>
  )
}
