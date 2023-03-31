import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
import ImageSlider from './ImageSlider'

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageSlider/>
      <div>
        <h2>Superhero Gadget - Low Price, High Value</h2>
        <p>Looking for the latest and greatest mobile accessories? Look no further than Superhero Gadget! Our wide selection of high-quality phone cases, chargers, screen protectors, and more will keep your phone protected and running smoothly at an affordable price. With our commitment to low prices and high value, you can trust that youre getting the best deal possible. Shop now and see for yourself why Superhero Gadget is the go-to source for mobile accessories!</p>
      </div>
    </main>
  )
}
