'use client'
import { useState, useEffect } from "react";
import './Reviews.css'

export default function Reviews() {
    const [hasError, setHasError] = useState(false);
  
    function handleIframeError() {
      setHasError(true);
    }

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
      <div className="reviews">
        <div className="title-wrapper fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"className="quote">
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
            </svg>
            <h2>What People Say About Us</h2>
        </div>
        <div className="grid-container">
          {hasError ? (
            <p>Sorry, there was an error loading the reviews.</p>
          ) : (
            <>
              <div className="grid-item fade-in">
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFrEiNdZzZz%2Fposts%2Fpfbid02y82WbdGjTP8advBSVWq79qQ8JLLZg8kVbMoJWLw27qy1uKH3QNV9cKJgDvybTJ43l&width=350&show_text=false&height=186&appId" 
                  width="350"
                  height="186" 
                  onError={handleIframeError}
                />
              </div>
              <div className="grid-item fade-in">
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaren.wong.376043%2Fposts%2Fpfbid0UFcpuYaK8FUYEuhpgLYG9fmDLWFNbB3XM2jkcgGHWtzNGiRsUjozf98HCErTHvgfl&width=350&show_text=false&height=227&appId" 
                  width="350" 
                  height="227"
                  onError={handleIframeError}
                />
              </div>
              <div className="grid-item fade-in">
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Famy.neng.3%2Fposts%2Fpfbid0yQdPgtXjqcno8T7gFaDVEeaBfgmJvMWF8EgXAn9VMdBJ5WisngPdjyVbd5v62Zpkl&width=350&show_text=false&height=169&appId" 
                  width="350" 
                  height="169"
                  onError={handleIframeError}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
  