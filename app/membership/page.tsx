import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import './membership.css'

export default function Membership(){
    return(
        <PageWrapper>
            <main className="membership">
                <div className="title">
                    <div className="title-inner-wrapper">
                        <h1>Superhero Gadget Membership Programme</h1>
                        <div className="underscore"></div>
                    </div>
                </div>
                <div className="description">
                    <p>
                        Unlock a world of exclusive advantages by joining our esteemed membership program today. 
                        As a valued member, you'll gain access to a host of exceptional benefits designed to 
                        enhance your shopping experience and provide you with unparalleled value.
                    </p>
                </div>
                <div className="benefit" id="benefit-1">
                    <div className="benefit-inner-wrapper">
                        <div className="benefit-text">MEMBER BENEFITS</div>
                        <h2>Earn Reward Points</h2>
                        <p>
                            Every time you make a purchase, you'll accumulate valuable points that can be redeemed for 
                            exciting rewards and discounts. With each transaction, your points balance grows, allowing
                            you to indulge in future shopping sprees or enjoy irresistible savings.
                        </p>
                    </div>
                    <div id="benefit-1-image" className="benefit-image"></div>
                </div>
                <div className="benefit" id="benefit-2">
                    <div id="benefit-2-image" className="benefit-image"></div>
                    <div className="benefit-inner-wrapper">
                        <div className="benefit-text">MEMBER BENEFITS</div>
                        <h2>Stay Ahead of the Game</h2>
                        <p>
                            As a member, you'll always be one step ahead of the crowd. Be the first to know about our 
                            major promotions and discounts, ensuring you never miss out on incredible deals. Whether 
                            it's a limited-time sale, an exclusive pre-launch event, or a special member-only offer, 
                            you'll receive timely notifications, giving you a competitive edge in securing the products 
                            you love.
                        </p>
                    </div>                    
                </div>
                <div className="benefit" id="benefit-3">
                    <div className="benefit-inner-wrapper">
                        <div className="benefit-text">MEMBER BENEFITS</div>
                        <h2>Special Birthday Freebies</h2>
                        <p>
                            Celebrate your special day in style with our exclusive birthday freebies, crafted exclusively
                             for our esteemed members. Indulge in delightful surprises, personalized gifts, or exclusive 
                             discounts as our way of making your birthday extra memorable. It's our sincerest way of showing
                              appreciation for your continued loyalty.
                        </p>
                    </div>
                    <div id="benefit-3-image" className="benefit-image"></div>
                </div>
                <div className="benefit" id="benefit-4">
                    <div id="benefit-4-image" className="benefit-image"></div>
                    <div className="benefit-inner-wrapper">
                        <div className="benefit-text">MEMBER BENEFITS</div>
                        <h2>Personalized Recommendations</h2>
                        <p>
                            Our membership program goes beyond the ordinary by providing personalized product recommendations 
                            based on your preferences. Discover new items that align with your tastes and interests, ensuring
                             every purchase you make brings you joy and satisfaction.
                        </p>
                    </div>                    
                </div>
            </main>
        </PageWrapper>
    )
}