import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
    return (
        <div className="hotel-card">
            <img
                src={hotel.images[0]}
                alt={hotel.name}
                width="250"
            />

            <h3>{hotel.name}</h3>

            <p>{hotel.city}</p>
            <p>₹{hotel.price}</p>
            <Link to={`/hotel/${hotel.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
}

export default HotelCard;