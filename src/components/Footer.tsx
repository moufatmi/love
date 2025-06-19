import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-rose-400 fill-current" />
              <h3 className="text-3xl font-serif font-bold">Mariem & Moussab</h3>
              <Heart className="w-8 h-8 text-rose-400 fill-current" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Thank you for visiting our love story. Every moment shared with you makes our journey even more beautiful.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-rose-400" />
              <span className="text-gray-300">mariem.moussab.love@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-rose-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Mariem & Moussab. Made with love and endless cups of coffee.
              </p>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400 fill-current animate-pulse" />
                <span className="text-gray-400 text-sm">Forever and always</span>
                <Heart className="w-4 h-4 text-rose-400 fill-current animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;