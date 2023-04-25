'use client'
import './ItemSpotlight.css'
import { useEffect } from 'react'

export default function ItemSpotlight() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        });
    
        const targets = document.querySelectorAll('.fade-in');
        targets.forEach((target) => {
          observer.observe(target);
        });
    
        return () => {
          targets.forEach((target) => {
            observer.unobserve(target);
          });
        }
      }, []);
    return (
        <div className="item-spotlight">
            <h1>Hot Selling Products</h1>
            <div className='grid-container'>
                <div className='grid-item fade-in'>
                    <img src="https://i.ibb.co/vXDKrLh/rcc230.webp" alt="Remax RCC230 FM Transmitter, Handsfree & Car Charger" />
                    <h3>Remax RCC230 FM Transmitter, Handsfree & Car Charger</h3>
                </div>
                <div className="grid-item fade-in">
                    <img src="https://i.ibb.co/1Xtsb6b/ca55.webp" alt="Hoco CA55 Magnetic Car Holder" />
                    <h3>Hoco CA55 Magnetic Car Holder</h3>
                </div>
                <div className="grid-item fade-in">
                    <img src="https://i.ibb.co/zX4yWPx/7410.webp" alt="Mcdodo CA-7410 Auto power off USB cable for Lightning" />
                    <h3>Mcdodo CA-7410 Auto power off USB cable for Lightning</h3>
                </div>
                <div className="grid-item fade-in">
                    <img src="https://i.ibb.co/nLBYKgh/rt-w02.webp" alt="Remax RT-W02 Laptop Cooling Stand" />
                    <h3>Remax RT-W02 Laptop Cooling Stand</h3>
                </div>
                <div className="grid-item fade-in">
                    <img src="https://i.ibb.co/jb4S2WM/303b.webp" alt="URbantin 303B Smart Power Strip" />
                    <h3>URbantin 303B Smart Power Strip</h3>
                </div>
            </div>
        </div>
    )
}