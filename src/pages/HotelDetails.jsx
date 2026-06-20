import { useParams } from "react-router-dom";
import hotels from "../data/hotels";

function HotelDetails() {
    const { id } = useParams();

    const hotel = hotels.find(
        (hotel) => hotel.id === Number(id)
    );

    if (!hotel) {
        return <h2>Hotel Not Found</h2>;
    }

    return (
        <div className="details-container">

            <div className="hotel-gallery">
                {hotel.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Hotel ${index + 1}`}
                        className="gallery-image"
                    />
                ))}
            </div>



            <p>
                <strong>Location:</strong> {hotel.city}
            </p>
            <br />

            <p>
                <strong>Rating:</strong> ⭐ 4.8 / 5
            </p>
            <br />
            <p>
                <strong>Description:</strong> Enjoy a luxurious stay with premium facilities,
                spacious rooms, fine dining, and exceptional hospitality.
            </p> <br />

            <h3>1.Room Types</h3>
            <br />
            <ul>
                <li>Standard Room</li>
                <li>Deluxe Room</li>
                <li>Executive Suite</li>
                <li>Presidential Suite</li>
            </ul>
            <br />
            <h3>2.Amenities</h3>
            <br />
            <ul>
                <li>Free Wi-Fi</li>
                <li>Swimming Pool</li>
                <li>Spa & Wellness Center</li>
                <li>Multi-Cuisine Restaurant</li>
                <li>Fitness Center</li>
                <li>24/7 Room Service</li>
                <li>Free Parking</li>
                <li>Airport Pickup</li>
            </ul>
            <br />
            <h3>3.Check-In / Check-Out</h3>
            <br />
            <p>Check-In: 12:00 PM</p>
            <p>Check-Out: 11:00 AM</p>

            <h3>4.Contact Information</h3>
            <br />
            <p>Phone: +91 98765 43210</p>
            <p>Email: reservations@ajhotel.com</p>
            <br />
            <h3>5.Price Per Night</h3>
            <br />
            <p>₹{hotel.price}</p>

        </div>
    );
}

export default HotelDetails;