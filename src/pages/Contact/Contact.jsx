import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contactContainer">
            <h1>Contact Us</h1>
            <form className="contactForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Write down your idea!'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submitButton">Send Message</button>
            </form>
        </div>
    );
}
