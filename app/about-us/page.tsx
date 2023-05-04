'use client';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import './about-us.css'
import {useEffect} from 'react'

export default function AboutUs(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                let interval_iterations = 0;
                const interval = setInterval(() => 
                {
                    if (!target.textContent) return;
                    if (!target.dataset.value) target.dataset.value = target.textContent;
                    target.textContent = target.textContent.split('').map((letter, index) => {
                        if (!target.dataset.value) return;
                        if(index < interval_iterations) return `${target.dataset.value[index]}`
                        if (letter !== ' ') {
                            return `${letters[Math.floor(Math.random() * 26)]}`
                        } else {
                            return `${letter}`
                        }
                    }).join('') 
                    
                    if (interval_iterations >= target.dataset.value.length) {
                        clearInterval(interval)
                    }

                    interval_iterations += 1/3;
                }, 40)
              }
            });
          });

        const target = document.querySelector('.hacker') as HTMLElement;
        observer.observe(target);
        return () => {
            observer.unobserve(target);
        };
    }, [])
    return(
        <PageWrapper>
            <main className="about-us">
                <div className="slogan">
                    <h2 className='slogan-text'>Low Price, High Value</h2>
                </div>
                <div className="flex-wrapper">
                    <div className="title">
                        <h1 data-value="ABOUT US" className='hacker'>ABOUT US</h1>
                        <div className="title-underscore"></div>
                    </div>
                    <div className="section-wrapper">
                        <p>
                            Looking for the latest and greatest mobile accessories? Look no further than
                            Superhero Gadget! We provide the latest and greatest gadgets and accessories to enhance your 
                            mobile experience. Our mission is to offer high-quality products at an affordable 
                            price so that everyone can enjoy the latest technology without breaking the bank.
                            <br></br>
                            <br></br>
                            We understand that your mobile device is an integral part of your life, and that's 
                            why we are committed to providing you with products that not only protect your device, 
                            but also reflect your unique style. From phone cases to chargers to screen protectors, 
                            we have everything you need to keep your device looking great and functioning at its best.
                            <br></br>
                            <br></br>
                            We are constantly updating our inventory to ensure that we offer the latest and greatest 
                            mobile accessories on the market. Whether you're looking for a new phone case to show off
                            your personality, a durable screen protector to keep your device safe, or a high-speed 
                            charger to keep you connected, we have you covered.
                        </p>
                        <div className="drop-shadow-wrapper">
                            <img src="https://i.ibb.co/vz5WTfs/balkouras-nicos-5yl-Xkp-d-Zng-unsplash.webp" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </PageWrapper>
        
    )
}
