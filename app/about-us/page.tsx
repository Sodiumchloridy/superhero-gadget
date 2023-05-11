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
                    <div className="slogan-text-wrapper">
                        <h3 className='our-mission'>Our Mission</h3>
                        <div className="underscore"></div>
                        <h2 className='slogan-text'>Low Price, High Value</h2>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="text-wrapper">
                        <div className="title">
                            <h1 data-value="ABOUT US" className='hacker'>ABOUT US</h1>
                            <div className="underscore"></div>
                        </div>
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
                    </div>
                    <div className="drop-shadow-wrapper">
                        <img src="https://i.ibb.co/vz5WTfs/balkouras-nicos-5yl-Xkp-d-Zng-unsplash.webp" alt="" />
                    </div>        
                </div>
                <div className="why-us">
                    <div className="title">Why Choose Us?</div>
                    <div className="grid-container">
                        <div className="grid-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill='#FFFFFF' d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"/>
                            </svg>
                            <h2>Low Prices</h2>
                            <p>Shop top-notch products at unbeatable prices at our outlets.</p>
                        </div>
                        <div className="grid-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill='#FFFFFF' d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/>
                            </svg>
                            <h2>High Quality</h2>
                            <p>Discover high-quality products hand-picked by us.</p>
                        </div>
                        <div className="grid-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill='#FFFFFF' d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"/>
                            </svg>
                            <h2>Great Service</h2>
                            <p>Get exceptional service when you shop with us.</p>
                        </div>
                    </div>
                </div>
            </main>
        </PageWrapper>
        
    )
}
