
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dentrix-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dentrix<span className="text-dentrix-teal">Pay</span></h3>
            <p className="text-sm text-gray-300 mt-2">
              The complete payment processing solution for dental practices.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-dentrix-teal transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-dentrix-teal transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-dentrix-teal transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-dentrix-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-dentrix-teal transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-dentrix-teal transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-dentrix-teal transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-dentrix-teal transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>1-800-DENTRIX</li>
              <li>support@dentrixpay.com</li>
              <li>123 Dental Avenue</li>
              <li>Suite 100</li>
              <li>Salt Lake City, UT 84121</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} DentrixPay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-dentrix-teal">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-dentrix-teal">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-dentrix-teal">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
