import React from 'react';
import { Smile, Zap, Activity, Heart, ShieldCheck, Gem, ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '../types';

import { useEffect } from "react";
import AOS from "aos";

const Services: React.FC = () => {

   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    AOS.refresh();
  }, []);

  const services: ServiceItem[] = [
    {
      id: 'general',
      title: 'Preventative Care',
      description: 'Comprehensive exams, gentle cleanings, and digital screenings to keep your foundation strong.',
      icon: 'shield'
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Artistry',
      description: 'Custom veneers, bonding, and full smile makeovers designed to complement your unique features.',
      icon: 'gem'
    },
    {
      id: 'ortho',
      title: 'Invisalign®',
      description: 'Straighten your teeth discreetly with clear aligners. No metal, no wires, just results.',
      icon: 'smile'
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      description: 'The gold standard for replacing missing teeth. Permanent, natural-looking, and functional.',
      icon: 'activity'
    },
    {
      id: 'whitening',
      title: 'Brightening',
      description: 'Professional grade whitening options: in-office treatments for instant results or take-home kits.',
      icon: 'zap'
    },
    {
      id: 'emergency',
      title: 'Urgent Care',
      description: 'We prioritize emergencies. Same-day appointments available for pain or accidents.',
      icon: 'heart'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'shield': return <ShieldCheck className="w-6 h-6 text-wave-600" />;
      case 'gem': return <Gem className="w-6 h-6 text-purple-500" />;
      case 'smile': return <Smile className="w-6 h-6 text-ocean-500" />;
      case 'activity': return <Activity className="w-6 h-6 text-emerald-500" />;
      case 'zap': return <Zap className="w-6 h-6 text-yellow-500" />;
      case 'heart': return <Heart className="w-6 h-6 text-rose-500" />;
      default: return <Smile className="w-6 h-6 text-wave-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-md font-extrabold text-wave-600 tracking-widest uppercase mb-3 fontLato">Holistic Care</h2>
          <p className="text-4xl md:text-5xl font-serif font-extrabold text-slate-900 mb-6 fontLato">
            Curated Dental Services
          </p>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            From routine maintenance to complex restoration, our studio is equipped to handle all your dental needs with precision and grace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} data-aos="fade-up">
            <div          
              className="group relative h-full bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-wave-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-sand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-wave-50 transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif fontLato">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-wave-600 hover:text-[17px] transition-all ">
                Learn More <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;