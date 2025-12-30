import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Jenkins",
      text: "I used to be terrified of the dentist. Dr. Rivera and the team completely changed that. The office feels like a spa, and the care is incredibly gentle.",
      rating: 4.5
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "The technology they use is amazing. I got a crown done in a single visit and it looks perfectly natural. Highly recommend Wave Dental!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Wilson",
      text: "Finally, a dentist that listens. They took the time to explain my options for Invisalign and never pressured me. My smile has never looked better.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-wave-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-wave-300 tracking-widest uppercase mb-2 fontLato">Patient Stories</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white fontLato">
              Don't just take our<br/>word for it.
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-wave-300 text-sm">Average Rating</p>
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="fill-yellow-400 text-yellow-400 w-6 h-6" />)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors">
              <Quote className="text-wave-300 mb-6 w-8 h-8 opacity-50" />
              <p className="text-lg leading-relaxed text-slate-100 mb-8 font-light">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wave-400 to-ocean-500 flex items-center justify-center font-bold text-white">
                    {/* {t.name.charAt(0)} */}
                    <img  
                    src={`https://picsum.photos/50/50?random=${t.id}`} 
                    alt="Patient" 
                    className="w-10 h-10 rounded-full border-2 border-sand-50"
                  />
                 </div>
                 <div>
                   <p className="font-bold text-white">{t.name}</p>
                   <p className="text-xs text-wave-200">Verified Patient</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;