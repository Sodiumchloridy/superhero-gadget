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
                <div className="section-wrapper">
                    <ul>
                        <li>Accumulate points every time you make a purchase.</li>
                        <li>Stay ahead of the game by being the first to know about our major promotions and discounts.</li>
                        <li>Receive special birthday freebies that are only available to members.</li>
                    </ul>
                </div>
                <div className="benefit">
                    <div className="benefit-inner-wrapper">
                        <div className="benefit-text">MEMBER BENEFITS</div>
                        <h2>Earn Reward Points</h2>
                        <p>
                            Every time you make a purchase, you'll accumulate valuable points that can be redeemed for 
                            exciting rewards and discounts. With each transaction, your points balance grows, allowing
                            you to indulge in future shopping sprees or enjoy irresistible savings.
                        </p>
                    </div>
                    <div id="benefit-1" className="benefit-image"></div>
                </div>
            </main>
        </PageWrapper>
    )
}