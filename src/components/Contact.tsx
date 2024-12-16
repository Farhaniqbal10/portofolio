import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ success: false, error: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    emailjs
      .send(
        'service_5yhdkrs', // Replace with your EmailJS Service ID
        'template_pqbvnp9', // Replace with your EmailJS Template ID
        {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        },
        'xmYy1sXJVBs25Lr4z' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setFormStatus({ success: true, error: false });
          form.reset(); // Clear the form
        },
        (error) => {
          console.error('FAILED...', error);
          setFormStatus({ success: false, error: true });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">farhanmaulanaiqbal10@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">087805459298</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Display status message */}
          {formStatus.success && (
            <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
          )}
          {formStatus.error && (
            <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
