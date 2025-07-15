import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ContactPage.css";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSf-EP5gGK5b28pCyjgKN4_andhtud9FKz8pgzvMz7bWOZNKuQ/formResponse";

const ContactPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        contact: '',
        explain: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        // Allow Google Forms to handle submission, but show a message
        setSubmitted(true);
    };

    return (
        <>
        <h1>Connect with us</h1>
        <h2>
            Tinqbit is a cogent problem solver equipping custom build solutions employing all modern technologies.We represent a set of award winning young minds working to build up shift left trends in technologies
        </h2>
        <div className="form">
            {submitted ? (
                <div className="success-message">Thank you for contacting us! We'll get back to you soon.</div>
            ) : (
            <form action={GOOGLE_FORM_ACTION} method="POST" target="_blank" onSubmit={handleSubmit}>
                {/* User-friendly fields */}
                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
                <input type="text" name="company" placeholder="Your company" value={form.company} onChange={handleChange} />
                <input type="text" name="contact" placeholder="Your contact" value={form.contact} onChange={handleChange} />
                <textarea name="explain" placeholder="How can we help you?" value={form.explain} onChange={handleChange} rows={4} required />
                {/* Hidden Google Form fields */}
                <input type="hidden" name="entry.746537809" value={form.name} />
                <input type="hidden" name="entry.1918955007" value={form.email} />
                <input type="hidden" name="entry.1995112195" value={form.company} />
                <input type="hidden" name="entry.1631277103" value={form.contact} />
                <input type="hidden" name="entry.1767831638" value={form.explain} />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
        </>
    );
}

export default ContactPage;