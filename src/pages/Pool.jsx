import "./Pool.css";

function Pool() {
    return (
        <div className="pool-container">


            <p>
                Enjoy our luxurious swimming pool with a relaxing
                atmosphere, crystal-clear water, and world-class facilities.
            </p>

            <div className="pool-card">
                <h2>Pool Features</h2>
                <ul>
                    <li>Outdoor Infinity Pool</li>
                    <li>Kids Swimming Pool</li>
                    <li>Poolside Lounge Chairs</li>
                    <li>Poolside Refreshments</li>
                    <li>Professional Lifeguards</li>
                </ul>
            </div>

            <div className="pool-card">
                <h2>Pool Timings</h2>
                <p>Monday - Sunday</p>
                <p>06:00 AM - 09:00 PM</p>
            </div>

            <div className="pool-card">
                <h2>Entry Charges</h2>
                <p>Adults - ₹500</p>
                <p>Children - ₹250</p>
                <p>Hotel Guests - Free Access</p>
            </div>

            <div className="pool-card">
                <h2>Special Offers</h2>
                <p>Free Pool Access for Suite Guests</p>
                <p>20% Off on Weekend Family Packages</p>
                <p>Complimentary Welcome Drink</p>
            </div>

            <div className="pool-card">
                <h2>Safety Rules</h2>
                <ul>
                    <li>Proper Swimwear Required</li>
                    <li>No Running Near Pool Area</li>
                    <li>Children Must Be Accompanied</li>
                    <li>Follow Lifeguard Instructions</li>
                </ul>
            </div>
        </div>
    );
}

export default Pool;