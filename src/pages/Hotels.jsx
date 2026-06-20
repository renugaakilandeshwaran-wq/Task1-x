

import hotels from "../data/hotels";
import HotelCard from "../components/HotelCard";

function Hotels() {
    return (
        <div className="hotels-page">

            <div className="hotel-container">
                {hotels.map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hotels;