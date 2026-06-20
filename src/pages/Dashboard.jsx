import { useState } from "react";

function Dashboard() {
    const [bookings, setBookings] = useState([]);
    const [guestName, setGuestName] = useState("");
    const [roomType, setRoomType] = useState("");

    const addBooking = () => {
        if (!guestName || !roomType) {
            alert("Please fill all fields");
            return;
        }

        const newBooking = {
            id: Date.now(),
            guestName,
            roomType,
        };

        setBookings([...bookings, newBooking]);

        setGuestName("");
        setRoomType("");
    };

    const deleteBooking = (id) => {
        setBookings(
            bookings.filter((booking) => booking.id !== id)
        );
    };

    return (
        <div className="dashboard">
            <h1>Booking Dashboard</h1>

            <div className="booking-form">
                <input
                    type="text"
                    placeholder="Guest Name"
                    value={guestName}
                    onChange={(e) =>
                        setGuestName(e.target.value)
                    }
                />

                <select
                    value={roomType}
                    onChange={(e) =>
                        setRoomType(e.target.value)
                    }
                >
                    <option value="">Select Room</option>
                    <option value="Standard">Standard</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Suite">Suite</option>
                </select>

                <button onClick={addBooking}>
                    Add Booking
                </button>
            </div>

            <h2>Booking List</h2>

            {bookings.length === 0 ? (
                <p>No Bookings Available</p>
            ) : (
                bookings.map((booking) => (
                    <div key={booking.id}>
                        <h4>{booking.guestName}</h4>
                        <p>Room: {booking.roomType}</p>

                        <button
                            className=" delete-btn"
                            onClick={() =>
                                deleteBooking(booking.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))
            )
            }
        </div >
    );
}

export default Dashboard;