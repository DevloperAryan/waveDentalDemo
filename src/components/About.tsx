import React from 'react';
import { Coffee, Music, CheckCircle2 } from 'lucide-react';
import comfort from '../assets/comfort.svg';
import OwnerImg from '../assets/owner.avif'

import { useEffect } from "react";
import AOS from "aos";

const About: React.FC = () => {

   useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
      });
  
      AOS.refresh();
    }, []);

  return (
    <section id="about" className="py-24 bg-sand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Doctor Bio Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-wave-200 rounded-[2rem]"></div>
            <img 
              src={OwnerImg} 
              alt="Dr. Alex Rivera, the Owner of Dental Clinic" 
              className="relative w-full rounded-[2rem] shadow-xl z-10 aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
              <p className="font-serif italic text-lg text-slate-700">"We treat the person, not just the teeth."</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
               <h2 className="text-sm font-extrabold text-wave-600 tracking-widest uppercase mb-2 fontLato" data-aos="fade-left">The Founder</h2>
               <h3 className="text-4xl md:text-5xl font-serif font-extrabold text-slate-900 mb-6 fontLato" data-aos="fade-left" data-aos-delay="300">
                Meet Dr. Alex Rivera
              </h3>
            </div>
            
            <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed fontLat">
              <p>
                Dr. Rivera founded Wave Dental with a simple mission: to change the way people feel about going to the dentist. A graduate of UCSF School of Dentistry, Dr. Rivera has spent the last 15 years refining the art of painless dentistry.
              </p>
              <p>
                When not in the clinic, you can find Dr. Rivera surfing the local breaks or hiking the coastal trails with a golden retriever, Barnaby. This connection to nature inspires the calm, organic atmosphere of our practice.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-200">
              <div>
                <h4 className="text-3xl font-bold text-slate-900">15+</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-slate-900">2k+</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Smiles Restored</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us / Comfort Menu */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-extrabold text-slate-800 mb-4 fontLato">The Wave Experience</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We believe comfort is a necessity, not a luxury. Our patient amenities are designed to put you at ease from the moment you walk in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Coffee />, title: "Beverage Bar", desc: "Sparkling water, coffee, and herbal teas." },
              { icon: <Music />, title: "Noise Canceling", desc: "Bose headphones with your choice of music." },
              { icon: <img src={comfort} width={25}/>, title: "Comfort", desc: "Relaxed seating and peaceful ambience." },
              { icon: <CheckCircle2 />, title: "Sedation Options", desc: "Nitrous oxide and oral sedation available." },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4" data-aos="zoom-out" data-aos-duration="500">
                <div className="w-12 h-12 bg-wave-50 rounded-full flex items-center justify-center text-wave-600 fill-wave-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-extrabold text-slate-700 mb-2 fontLato">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;