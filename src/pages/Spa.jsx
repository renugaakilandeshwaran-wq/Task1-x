// 

function Spa() {
    return (
        <div className="spa-container">

            <p>
                Relax and rejuvenate with our premium spa treatments
                designed to refresh your body and mind.
            </p>

            <div className="spa-card">
                <h2>Services Available</h2>
                <ul>
                    <li>Full Body Massage</li>
                    <li>Facial Treatment</li>
                    <li>Aromatherapy</li>
                    <li>Hot Stone Therapy</li>
                    <li>Steam Bath</li>
                </ul>
            </div>

            <div className="spa-card">
                <h2>Timing</h2>
                <p>Monday - Sunday</p>
                <p>09:00 AM - 09:00 PM</p>
            </div>

            <div className="spa-card">
                <h2>Charges</h2>
                <p>Basic Spa Package - ₹1,499</p>
                <p>Premium Spa Package - ₹2,999</p>
                <p>Luxury Couple Package - ₹4,999</p>
            </div>

            <div className="spa-card">
                <h2>Special Offers</h2>
                <p>20% Off on Weekdays</p>
                <p>Buy 1 Get 1 for Couples (Friday)</p>
                <p>Free Herbal Tea with Premium Package</p>
            </div>
        </div>
    );
}

export default Spa;