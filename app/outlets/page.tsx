import styles from './page.module.css'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

export default function Outlets(){
    return(
        <PageWrapper>
            <div className='main'>
                <h1>Outlets</h1>
                <div className={styles.grid}>
                    <div className={styles.outlet}>
                        <h2>C180 Branch</h2>
                        <img className={styles.img} src="/images/1.jpg" alt="C180 Branch" />
                        <iframe 
                            className={styles.maps} 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2209216454244!2d101.7639032152523!3d3.0353234546870995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc350bb0a4fa47%3A0x5e3f7ae6c6d95d7f!2sSuperhero%20Gadget!5e0!3m2!1sen!2smy!4v1680237878234!5m2!1sen!2smy" 
                            loading="lazy"
                        ></iframe>
                        <p>23-G JALAN C180-1 DATARAN C180, Cheras, Selangor, Malaysia</p>
                    </div>
                </div>
            </div>
        </PageWrapper>
        
    )
}