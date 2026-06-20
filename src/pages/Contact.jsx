import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.message
        ) {
            alert("Please fill all fields");
            return;
        }

        alert("Message Sent Successfully!");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>
                Have questions about bookings? Contact our support team.
            </p>

            <div className="contact-content">
                <div className="contact-info">
                    <h3>Hotel Information</h3>
                    <p>📍 Chennai, Tamil Nadu</p>
                    <p>📞 +91 9876543210</p>
                    <p>📧 ajren@hotelbooking.com</p>
                    <p>🕒 Available 24/7</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Enter Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;