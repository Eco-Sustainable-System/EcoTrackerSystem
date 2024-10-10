import React from 'react';
import { Phone, Mail, MapPin, Twitter, Facebook, Youtube } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
        {/* Contact Information */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 md:p-12 flex flex-col justify-between md:w-2/5 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="mb-8 text-lg opacity-90">Say something to start a live chat!</p>
            
            <div className="space-y-6 text-md">
              <p className="flex items-center"><Phone className="mr-4" size={24} /> +1012 3456 789</p>
              <p className="flex items-center"><Mail className="mr-4" size={24} /> demo@gmail.com</p>
              <p className="flex items-center"><MapPin className="mr-4" size={24} /> 132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
            </div>
          </div>
          
          <div className="mt-12 flex space-x-4">
            <Twitter size={24} className="cursor-pointer hover:text-orange-200 transition-colors" />
            <Facebook size={24} className="cursor-pointer hover:text-orange-200 transition-colors" />
            <Youtube size={24} className="cursor-pointer hover:text-orange-200 transition-colors" />
          </div>

          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80">
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-orange-400 rounded-full opacity-50"></div>
              <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="p-8 md:p-12 md:w-3/5 bg-white">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <label className="text-sm text-gray-600 font-medium block mb-2">First Name</label>
                <input className="w-full p-3 border-b-2 border-gray-300 focus:border-orange-500 transition-colors focus:outline-none" placeholder="John" />
              </div>
              <div className="md:w-1/2">
                <label className="text-sm text-gray-600 font-medium block mb-2">Last Name</label>
                <input className="w-full p-3 border-b-2 border-gray-300 focus:border-orange-500 transition-colors focus:outline-none" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <label className="text-sm text-gray-600 font-medium block mb-2">Email</label>
                <input className="w-full p-3 border-b-2 border-gray-300 focus:border-orange-500 transition-colors focus:outline-none" type="email" placeholder="johndoe@example.com" />
              </div>
              <div className="md:w-1/2">
                <label className="text-sm text-gray-600 font-medium block mb-2">Phone Number</label>
                <input className="w-full p-3 border-b-2 border-gray-300 focus:border-orange-500 transition-colors focus:outline-none" type="tel" placeholder="+1 012 3456 789" />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 font-medium block mb-2">Select Subject?</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {['General Inquiry', 'Technical Support', 'Billing Question', 'Feature Request'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <input type="radio" id={`subject-${index}`} name="subject" className="mr-2 accent-orange-500" />
                    <label htmlFor={`subject-${index}`} className="text-sm">{item}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 font-medium block mb-2">Message</label>
              <textarea className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 transition-colors focus:outline-none" rows="4" placeholder="Write your message here..."></textarea>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-8 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;