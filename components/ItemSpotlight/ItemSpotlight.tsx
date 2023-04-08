import './ItemSpotlight.css'

export default function ItemSpotlight() {
    return (
        <div className="item-spotlight">
            <h1>Hot Selling Products</h1>
            <div className='grid-container'>
                <div className='grid-item'>
                    <img src="https://i.imgur.com/J02htBX.png" alt="Remax RCC230 FM Transmitter, Handsfree & Car Charger" />
                    <h3>Remax RCC230 FM Transmitter, Handsfree & Car Charger</h3>
                </div>
                <div className="grid-item">
                    <img src="https://i.imgur.com/hfW2fmw.png" alt="Hoco CA55 Magnetic Car Holder" />
                    <h3>Hoco CA55 Magnetic Car Holder</h3>
                </div>
                <div className="grid-item">
                    <img src="https://i.imgur.com/WPOpS86.png" alt="Mcdodo CA-7410 Auto power off USB cable for Lightning" />
                    <h3>Mcdodo CA-7410 Auto power off USB cable for Lightning</h3>
                </div>
                <div className="grid-item">
                    <img src="https://i.imgur.com/wkfCyxh.png" alt="Remax RT-W02 Laptop Cooling Stand" />
                    <h3>Remax RT-W02 Laptop Cooling Stand</h3>
                </div>
                <div className="grid-item">
                    <img src="https://i.imgur.com/oveoc2H.png" alt="URbantin 303B Smart Power Strip" />
                    <h3>URbantin 303B Smart Power Strip</h3>
                </div>
            </div>
        </div>
    )
}