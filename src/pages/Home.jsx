


import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="overlay">
                <h1><b>Welcome to AR Hotel </b></h1>
                <p>Book your dream stay with us.</p>

                <button
                    className="home-btn"
                    onClick={() => navigate("/gallery")}
                >
                    Explore Hotels
                </button>
            </div>
        </div>
    );
}

export default Home;



