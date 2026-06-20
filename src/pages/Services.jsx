import { Link, Outlet } from "react-router-dom";

function Services() {
    return (
        <div className="services-container">
            <h2>Our Hotel Services</h2>

            <div className="service-links">
                <Link to="spa">Spa</Link>
                <Link to="restaurant">Restaurant</Link>
                <Link to="pool">Pool</Link>
            </div>

            <div className="service-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Services;