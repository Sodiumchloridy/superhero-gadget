import './about-us.css'

export default function AboutUs(){
    return(
        <main className="about-us">
            <div className="section-wrapper">
                <div className="drop-shadow-wrapper">
                    <img src="https://images.unsplash.com/photo-1681142990331-e1e84aac661f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="flex-wrapper">
                    <h1>About Us</h1>
                    <p>
                        Looking for the latest and greatest mobile accessories? Look no further than
                        Superhero Gadget! We provide the latest and greatest gadgets and accessories to enhance your 
                        mobile experience. Our mission is to offer high-quality products at an affordable 
                        price so that everyone can enjoy the latest technology without breaking the bank.
                    </p>
                </div>
            </div>
            <h2 style={{textAlign:'center'}}>Low Price, High Value</h2>
        </main>
    )
}
