'use client'
import './ImageSlider.css'
import { useEffect, useState } from 'react';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const btns = document.querySelectorAll('.btn');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    let slideInterval: NodeJS.Timeout;
  
    const showSlide = (slideIndex:number) => {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
  
      slides[slideIndex].classList.add('active');
      btns[slideIndex].classList.add('active');
    };
  
    const nextSlide = () => {
      setCurrentSlide((currentSlide) => {
        let nextSlideIndex = currentSlide + 1;
        if (nextSlideIndex >= slides.length) {
          nextSlideIndex = 0;
        }
        showSlide(nextSlideIndex);
        return nextSlideIndex;
      });
    };
    
    const prevSlide = () => {
      setCurrentSlide((currentSlide) => {
        let prevSlideIndex = currentSlide - 1;
        if (prevSlideIndex < 0) {
          prevSlideIndex = slides.length - 1;
        }
        showSlide(prevSlideIndex);
        return prevSlideIndex;
      });
    };    
  
    // Handle button clicks
    btnLeft?.addEventListener('click', () => {
      if (slideInterval) {prevSlide(); return}
    });
  
    btnRight?.addEventListener('click', () => {
      if (slideInterval) {nextSlide(); return}
    });
  
    // Autoplay slides
    const startSlideShow = () => {
      if (slideInterval) return;
      slideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
    };
  
    startSlideShow();
    return () => clearInterval(slideInterval);
  }, []);  

  return (
    <div className="img-slider">
      <div className="slide active">
        <img src="/images/1.webp" alt="" />
      </div>
      <div className="slide">
        <img src="/images/2.webp" alt="" />
      </div>
      <div className="slide">
        <img src="/images/3.webp" alt="" />
      </div>
      <div className="slide">
        <img src="/images/4.webp" alt="" />
      </div>
      <div className="slide">
        <img src="/images/5.webp" alt="" />
      </div>
      <div className="navigation">
        <div className="btn active"></div>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
      </div>
      <div className='btn-left'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
      </svg>
      </div>
      <div className='btn-right'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
        </svg>
      </div>
      
    </div>)
    }