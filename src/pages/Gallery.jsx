
import { useState } from "react";

function Gallery() {
    const places = [
        {
            title: "Swimming Pool",
            image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc",
        },
        {
            title: "Luxury Spa",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
        },
        {
            title: "Restaurant",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        },
        {
            title: "Deluxe Room",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        },
    ];

    const [page, setPage] = useState(0);

    return (
        <div className="gallery-page">


            <div className="gallery-card">
                <img src={places[page].image} alt={places[page].title} />
                <h3>{places[page].title}</h3>
            </div>

            <div className="pagination">
                {places.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Gallery;