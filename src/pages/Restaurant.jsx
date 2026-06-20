import "./Restaurant.css";

function Restaurant() {
    return (
        <div className="restaurant-container">


            <p>
                Experience delicious food prepared by our expert chefs
                with a variety of cuisines and premium dining services.
            </p>

            <div className="restaurant-card">
                <h2>Our Specialties</h2>
                <ul>
                    <li>South Indian Traditional Meals</li>
                    <li>North Indian Special Dishes</li>
                    <li>Chinese Cuisine</li>
                    <li>Continental Food</li>
                    <li>Fresh Seafood Specials</li>
                </ul>
            </div>

            <div className="restaurant-card">
                <h2>Dining Timings</h2>
                <p>Breakfast: 7:00 AM - 10:30 AM</p>
                <p>Lunch: 12:00 PM - 3:00 PM</p>
                <p>Dinner: 7:00 PM - 11:00 PM</p>
            </div>

            <div className="restaurant-card">
                <h2>Popular Menu</h2>
                <p>Veg Meals - ₹250</p>
                <p>Chicken Biryani - ₹350</p>
                <p>Fish Fry - ₹400</p>
                <p>Paneer Butter Masala - ₹280</p>
                <p>Dessert Combo - ₹200</p>
            </div>

            <div className="restaurant-card">
                <h2>Special Offers</h2>
                <p>15% Discount on Family Dinner</p>
                <p>Free Dessert on Weekend Bookings</p>
                <p>Kids Under 5 Eat Free</p>
            </div>

            <div className="restaurant-card">
                <h2>Facilities</h2>
                <ul>
                    <li>Air Conditioned Dining Hall</li>
                    <li>Private Family Seating</li>
                    <li>Live Music on Weekends</li>
                    <li>Free Wi-Fi</li>
                    <li>Online Table Reservation</li>
                </ul>
            </div>
        </div>
    );
}

export default Restaurant;