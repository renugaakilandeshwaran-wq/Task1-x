import { createContext, useState } from "react";

export const BookingContext = createContext();

function BookingProvider({ children }) {
    const [bookings, setBookings] = useState([]);

    const addBooking = (booking) => {
        setBookings([...bookings, booking]);
    };

    const removeBooking = (id) => {
        setBookings(
            bookings.filter((booking) => booking.id !== id)
        );
    };

    return (
        <BookingContext.Provider
            value={{
                bookings,
                addBooking,
                removeBooking,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export default BookingProvider;