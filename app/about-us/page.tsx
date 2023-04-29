'use client';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import './about-us.css'
import {useEffect} from 'react'

export default function AboutUs(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    useEffect(() => {
        const targets = document.querySelectorAll('.hacker') as NodeListOf<HTMLElement>;

        let interval_iterations = 0;
        const interval = setInterval(() => 
        {
            targets.forEach((target) => {
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
            })
        }, 30)
    }, [])
    return(
        <PageWrapper>
            <main className="about-us">
                <h1 data-value="ABOUT US" className='hacker'>ABOUT US</h1>
                <div className="section-wrapper">
                    <div className="drop-shadow-wrapper">
                        <img src="https://i.ibb.co/vz5WTfs/balkouras-nicos-5yl-Xkp-d-Zng-unsplash.webp" alt="" />
                    </div>
                    <div className="text-wrapper">
                        <p>
                            Looking for the latest and greatest mobile accessories? Look no further than
                            Superhero Gadget! We provide the latest and greatest gadgets and accessories to enhance your 
                            mobile experience. Our mission is to offer high-quality products at an affordable 
                            price so that everyone can enjoy the latest technology without breaking the bank.
                        </p>
                    </div>
                </div>
                <h2 className='motto'>Low Price, High Value</h2>
            </main>
        </PageWrapper>
        
    )
}
