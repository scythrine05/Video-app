import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

//Components
import Navbar from "../components/Navbar";
import BucketContainer from "../containers/BucketContainer";

export default function Buckets() {
  return (
    <>
      <Head>
        <title>Convin | Buckets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <BucketContainer />
      </main>
    </>
  )
}