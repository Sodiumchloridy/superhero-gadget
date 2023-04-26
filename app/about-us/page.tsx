import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import './about-us.css'

export default function AboutUs(){
    return(
        <PageWrapper>
            <main className="about-us">
                <div className="section-wrapper">
                    <div className="drop-shadow-wrapper">
                        <img src="https://i.ibb.co/vz5WTfs/balkouras-nicos-5yl-Xkp-d-Zng-unsplash.webp" alt="" />
                    </div>
                    <div className="text-wrapper">
                        <h1>About Us</h1>
                        <p>
                            Looking for the latest and greatest mobile accessories? Look no further than
                            Superhero Gadget! We provide the latest and greatest gadgets and accessories to enhance your 
                            mobile experience. Our mission is to offer high-quality products at an affordable 
                            price so that everyone can enjoy the latest technology without breaking the bank.
                        </p>
                    </div>
                </div>
                <h2 style={{textAlign:'center'}}>Low Price, High Value</h2>
            </main>
        </PageWrapper>
        
    )
}
