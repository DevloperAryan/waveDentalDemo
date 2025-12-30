import React from 'react';
import { Facebook, Instagram, Twitter, Waves } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="text-wave-400" />
              <span className="text-xl font-bold">Wave<span className="text-wave-400">Dental</span></span>
               <span className='text-sm text-slate-400 align-baseline'>SINCE 1996</span>
            </div>
            <p className="text-slate-400 text-sm">
              Modern dentistry with a focus on comfort, technology, and lasting results.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 fontLato">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-wave-400 transition-colors">General Dentistry</a></li>
              <li><a href="#" className="hover:text-wave-400 transition-colors">Cosmetic Veneers</a></li>
              <li><a href="#" className="hover:text-wave-400 transition-colors">Invisalign</a></li>
              <li><a href="#" className="hover:text-wave-400 transition-colors">Implants</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 fontLato">Patient Info</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-wave-400 transition-colors">New Patient Forms</a></li>
              <li><a href="#" className="hover:text-wave-400 transition-colors">Insurance & Billing</a></li>
              <li><a href="#" className="hover:text-wave-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-wave-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 fontLato">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-wave-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-wave-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-wave-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Wave Dental. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;