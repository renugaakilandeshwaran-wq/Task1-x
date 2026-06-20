// import { useState } from "react";

// function RoomReservation() {
//     const [guestName, setGuestName] = useState("");
//     const [roomType, setRoomType] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!guestName || !roomType) {
//             alert("Please fill all fields");
//             return;
//         }

//         alert("Room Reserved Successfully");
//     };

//     return (
//         <div>
//             <h2>Room Reservation</h2>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Guest Name"
//                     value={guestName}
//                     onChange={(e) => setGuestName(e.target.value)}
//                 />

//                 <select
//                     value={roomType}
//                     onChange={(e) => setRoomType(e.target.value)}
//                 >
//                     <option value="">Select Room</option>
//                     <option value="Standard">Standard</option>
//                     <option value="Deluxe">Deluxe</option>
//                     <option value="Suite">Suite</option>
//                 </select>

//                 <button type="submit">
//                     Reserve Room
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default RoomReservation;