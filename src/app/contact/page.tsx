"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">
              We welcome inquiries about our pieces, commissions, and services. 
              Please use the form to contact us, and we'll respond promptly to your request.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Visit Our Atelier</h3>
              <p className="mb-1">By appointment only</p>
              <p className="mb-1">23 Fashion Street</p>
              <p className="mb-1">London, E1 6PX</p>
              <p className="mb-4">United Kingdom</p>
              <p className="italic text-sm">
                Note: Our atelier is not open to the public without a scheduled appointment.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
              <p className="mb-1">Tuesday - Friday: 10:00 - 18:00</p>
              <p className="mb-1">Saturday: 11:00 - 16:00 (By appointment only)</p>
              <p className="mb-1">Sunday - Monday: Closed</p>
            </div>
          </div>
          
          <div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block mb-1 font-medium">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="specific-piece">Specific Piece Inquiry</option>
                    <option value="appointment">Appointment Request</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  ></textarea>
                </div>
                
                {error && (
                  <div className="text-red-600 font-medium">{error}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-black text-white rounded font-medium hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="mb-6">
                  Your message has been successfully sent. We appreciate your interest in MISS VOID and will respond to your inquiry as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-black text-white rounded font-medium hover:bg-gray-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 