'use client'
import './globals.css'
import { useEffect } from 'react';

export default function ImageSlider() {
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    const manualNav = function(manual:any) {
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    };

    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    const repeat = () => {
      let active = document.getElementsByClassName('active');
      var repeater = () => {
        let i = 1;
        setTimeout(function() {
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

          slides[i].classList.add('active');
          btns[i].classList.add('active');
          i++;

          if (slides.length == i) {
            i = 0;
          }
          if (i >= slides.length) {
            return;
          }
        }, 5000);
      };
      repeater();
    };
    repeat()
  }, []);

  return (
    <div className="img-slider">
      <div className="slide active">
        <img src="/images/1.jpg" alt="" />
      </div>
      <div className="slide">
        <img src="/images/2.jpg" alt="" />
        <div className="info">
          <h2>We're Hiring!</h2>
          <p>
            We're excited to announce that we're looking for talented individuals to join our team!
          </p>
        </div>
      </div>
      <div className="slide">
        <img src="/images/3.jpg" alt="" />
        <div className="info">
          <h2>Low Price, High Value</h2>
          <p>
            Looking for the latest and greatest mobile accessories? Look no further than Superhero Gadget!
          </p>
        </div>
      </div>
      <div className="slide">
        <img src="/images/4.jpg" alt="" />
        <div className="info">
          <h2>Dummy Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="slide">
        <img src="/images/5.jpg" alt="" />
        <div className="info">
          <h2>Dummy Text</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="navigation">
        <div className="btn active"></div>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
      </div>
    </div>)
    }