import styles from './page.module.css'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import Reviews from '../components/Reviews/Reviews';
import ItemSpotlight from '../components/ItemSpotlight/ItemSpotlight';

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageSlider/>
      <ItemSpotlight/>
      <Reviews />
    </main>
  )
}