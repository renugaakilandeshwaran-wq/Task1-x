import { useState, useEffect } from "react";

const fetchHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getHotels = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                const data = await response.json();

                setHotels(data);
            } catch (err) {
                setError("Failed to fetch hotels");
            } finally {
                setLoading(false);
            }
        };

        getHotels();
    }, []);

    return { hotels, loading, error };
};

export default fetchHotels;