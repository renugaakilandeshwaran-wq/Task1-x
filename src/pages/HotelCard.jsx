import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
    return (
        <div className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />

            <h3>{hotel.name}</h3>

            <p>{hotel.city}</p>

            <Link to={`/hotel/${hotel.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
}

export default HotelCard;