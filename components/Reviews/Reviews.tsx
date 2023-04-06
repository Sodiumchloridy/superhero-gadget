import { useState } from "react";
import './Reviews.css'

export default function Reviews() {
    const [hasError, setHasError] = useState(false);
  
    function handleIframeError() {
      setHasError(true);
    }
  
    return (
      <div className="reviews">
        <div className="title-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"className="quote">
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
            </svg>
            <h1>What People Say About Us</h1>
        </div>
        
        <div className="reviews-container">
          {hasError ? (
            <p>Sorry, there was an error loading the reviews.</p>
          ) : (
            <>
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Famy.neng.3%2Fposts%2Fpfbid033SE7AhjJWb9tjNxBNR4xnQZMbMQDM39njEu989StPsFwE7Rv2GicAVLJnRHCTkZ3l&show_text=true&width=350"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                onError={handleIframeError}
              />
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaren.wong.376043%2Fposts%2Fpfbid02XoG1piCfySJ6ukrX5Cougkh3k5VFZGafHL3bSdMSwBBAyJ7mT9Z678taUKw6amtkl&show_text=true&width=350"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                onError={handleIframeError}
              />
            </>
          )}
        </div>
      </div>
    );
  }
  