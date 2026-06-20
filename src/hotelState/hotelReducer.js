const hotelReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOKING":
            return [...state, action.payload];

        case "DELETE_BOOKING":
            return state.filter(
                (booking) => booking.id !== action.payload
            );

        case "UPDATE_BOOKING":
            return state.map((booking) =>
                booking.id === action.payload.id
                    ? action.payload
                    : booking
            );

        default:
            return state;
    }
};

export default hotelReducer;