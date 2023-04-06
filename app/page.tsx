'use client'
import styles from './page.module.css'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Reviews from '../components/Reviews/Reviews';

const ItemSpotlight = dynamic(() => import('../components/ItemSpotlight/ItemSpotlight'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [imgSource, setImgSource] = useState("https://down-my.img.susercontent.com/file/ed42c510a18eb5d4131d43102f13876b_tn");

  useEffect(() => {
    async function fetchData() {
      // setImgSource(imgSrc);
    }

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <ImageSlider/>
      <ItemSpotlight src={imgSource} />
      <Reviews />
    </main>
  )
}