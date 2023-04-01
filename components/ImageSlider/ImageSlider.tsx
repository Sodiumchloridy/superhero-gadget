'use client'
import './ImageSlider.css'
import { useEffect } from 'react';

export default function ImageSlider() {
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const btns = document.querySelectorAll('.btn');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    let currentSlide = 0;
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
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    };
  
    const prevSlide = () => {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    };
  
    // Handle button clicks
    btnLeft?.addEventListener('click', () => {
      prevSlide();
      clearInterval(slideInterval);
      startSlideShow();
    });
  
    btnRight?.addEventListener('click', () => {
      nextSlide();
      clearInterval(slideInterval);
      startSlideShow();
    });
  
    // Autoplay slides
    const startSlideShow = () => {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
    };
  
    startSlideShow();
  
    const sliderContainer = document.querySelector('.img-slider');
    sliderContainer?.addEventListener('mouseover', (event) => {
      const target = event.target as HTMLElement;
      const tagNames = ['IMG', 'SVG', 'PATH', 'DIV'];
      if (tagNames.includes(target.tagName)) {
        // Pause the slide show
        clearInterval(slideInterval);
      }
    });

    sliderContainer?.addEventListener('mouseout', (event) => {
      // Start the slide show
      const target = event.target as HTMLElement;
      const tagNames = ['IMG', 'SVG', 'PATH', 'DIV'];
      if (tagNames.includes(target.tagName)) {
        startSlideShow();
      }
    });
  }, []);  

  return (
    <div className="img-slider">
      <div className="slide active">
        <img src="/images/1.jpg" alt="" />
      </div>
      <div className="slide">
        <img src="/images/2.jpg" alt="" />
      </div>
      <div className="slide">
        <img src="/images/3.jpg" alt="" />
      </div>
      <div className="slide">
        <img src="/images/4.jpg" alt="" />
      </div>
      <div className="slide">
        <img src="/images/5.jpg" alt="" />
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