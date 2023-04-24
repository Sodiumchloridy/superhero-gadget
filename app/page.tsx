import styles from './page.module.css'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import Reviews from '../components/Reviews/Reviews';
import ItemSpotlight from '../components/ItemSpotlight/ItemSpotlight';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

export default function Home() {  

  return (
    <PageWrapper>
      <main className={styles.main}>
        <ImageSlider/>
        <ItemSpotlight/>
        <Reviews />
        <div className={styles.partnership__title}>
          <h2>In Partnership With</h2>
        </div>
        <div className={styles.partnership}>
          <img src='https://i.imgur.com/xMuiivb.png' style={{maxHeight:"100%", height:"auto", aspectRatio:"1", margin:"20px"}}/>
          <img src='https://i.imgur.com/xD7FSP0.png' style={{maxHeight:"100%", height:"auto", aspectRatio:"1", margin:"20px"}}/>
          <img src='https://i.imgur.com/9al5qxi.png' style={{maxHeight:"100%", height:"auto", aspectRatio:"1", margin:"20px"}}/>
          <img src='https://i.imgur.com/D5fzsSF.png' style={{maxHeight:"100%", height:"auto", aspectRatio:"1", margin:"20px"}}/>
        </div>
      </main>
    </PageWrapper>
  )
}