import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-text">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Get In <span>Touch</span></h2>
          <p>
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-submit">Say Hello</button>
          
          {status && <p className={`status-msg ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
