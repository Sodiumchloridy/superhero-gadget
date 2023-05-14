import './outlets.css'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

export default function Outlets(){
    return(
        <PageWrapper>
            <main className='outlets'>
                <div className="title">
                    <div>
                        <h1>Outlets</h1>
                        <div className="underscore"></div>
                    </div>
                </div>
                <div className="grid">
                    <div className="outlet">
                        <h2>C180 Branch</h2>
                        <img className="img" src="/images/store-front.webp" alt="C180 Branch" />
                        <iframe 
                            className="maps" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2209216454244!2d101.7639032152523!3d3.0353234546870995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc350bb0a4fa47%3A0x5e3f7ae6c6d95d7f!2sSuperhero%20Gadget!5e0!3m2!1sen!2smy!4v1680237878234!5m2!1sen!2smy" 
                            loading="lazy"
                        ></iframe>
                        <div className="info-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="white" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                            </svg>
                            <p>23-G JALAN C180-1 DATARAN C180, Cheras, Selangor, Malaysia</p>
                        </div>
                        <div className="info-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="white" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                            </svg>
                            <p>03-9082-1091</p>
                        </div>
                        <div className="info-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="white" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                            </svg>
                            <p>10:30am - 10pm</p>
                        </div>
                    </div>
                </div>
            </main>
        </PageWrapper>
        
    )
}