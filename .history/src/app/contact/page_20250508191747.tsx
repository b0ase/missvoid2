"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interest: '',
    message: '',
    preferred: 'email'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact MISS VOID Concept</h1>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8 text-center">
          <h2 className="text-xl font-semibold mb-4 text-white">Conceptual Design Studio</h2>
          <p className="text-gray-300 mb-4">
            MISS VOID is a fashion concept and design study rather than an actual brand with physical premises.
            This contact page is part of our conceptual brand exploration.
          </p>
          <p className="text-gray-300">
            While you can interact with the form below as part of the experience, no real services are currently offered.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5">
            <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Conceptual London Atelier</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Fictional Location</h3>
                <p className="mb-1">37 Redchurch Street</p>
                <p className="mb-1">Shoreditch</p>
                <p className="mb-1">London E2 7DJ</p>
                <p>United Kingdom</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Theoretical Hours</h3>
                <p className="mb-1">Tuesday - Friday: 11am - 7pm</p>
                <p className="mb-1">Saturday: 12pm - 6pm</p>
                <p>Sunday & Monday: By appointment only</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Imagined Contact</h3>
                <p className="mb-1">Email: inquiries@missvoid.com</p>
                <p className="mb-1">Phone: +44 (0)20 0000 0000</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Global Concept</h3>
                <p className="mb-4">
                  In this brand concept, private appointments would be conducted in fashion capitals around the world.
                </p>
                <p>
                  This conceptual vision includes virtual consultations for international clients interested in the MISS VOID aesthetic.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            {isSubmitted ? (
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Concept Interaction</h2>
                <p className="mb-6">
                  Thank you for engaging with our conceptual brand experience. In a real-world implementation of MISS VOID, your inquiry would be received by our design team.
                </p>
                <p className="mb-8">
                  While this is a fictional brand study, we appreciate your interest in the concept.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
                >
                  Return to Form
                </button>
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Concept Inquiry Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 font-medium">Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="location" className="block mb-2 font-medium">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, Country"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="interest" className="block mb-2 font-medium">Concept Interest*</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                    >
                      <option value="">Select your interest</option>
                      <option value="bespoke">Bespoke Concept</option>
                      <option value="ready-to-wear">Ready-to-Wear Collection</option>
                      <option value="performance">Performance/Theatrical Costume</option>
                      <option value="bridal">Alternative Bridal</option>
                      <option value="restoration">Restoration Concept</option>
                      <option value="workshop">Theoretical Workshop</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-700"
                    ></textarea>
                  </div>

                  <div className="mb-8">
                    <p className="mb-2 font-medium">Theoretical Contact Method*</p>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferred"
                          value="email"
                          checked={formData.preferred === 'email'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferred"
                          value="phone"
                          checked={formData.preferred === 'phone'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Phone
                      </label>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-500 text-sm italic mb-4">This form is part of the conceptual experience and does not connect to actual services.</p>
                    <button
                      type="submit"
                      className="bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition"
                    >
                      Submit Conceptual Inquiry
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 