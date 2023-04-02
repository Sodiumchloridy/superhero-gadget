'use client'
import styles from './page.module.css'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ItemSpotlight = dynamic(() => import('../components/ItemSpotlight/ItemSpotlight'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

async function getData() {
  const cheerio = require('cheerio');

  return fetch('https://shopee.com.my/gadget_2u#product_list')
      .then((response: { text: () => any; }) => response.text())
      .then((html: any) => {
          const $ = cheerio.load(html);
          const element = $('#main > div > div:nth-child(3) > div > div > div > div.shop-page > div > div.container > div.shop-page__all-products-section > div.shop-page_product-list > div > div.shop-search-result-view > div > div:nth-child(1) > a > div > div > div:nth-child(1) > div > img');
          
          // check if the element exists and log its source URL
          if (element.length) {
              const imgSrc = element.attr('src');
              return imgSrc;
          }
      })
      .catch((error: any) => console.error(error));
}

export default function Home() {
  const [imgSource, setImgSource] = useState("https://down-my.img.susercontent.com/file/ed42c510a18eb5d4131d43102f13876b_tn");

  useEffect(() => {
    async function fetchData() {
      const imgSrc = await getData();
      console.log(imgSrc);
      // setImgSource(imgSrc);
    }

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <ImageSlider/>
      <ItemSpotlight src={imgSource} />
    </main>
  )
}