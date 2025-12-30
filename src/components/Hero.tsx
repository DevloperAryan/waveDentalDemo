import React from "react";
import { ArrowRight, Star, ShieldCheck, Sparkles } from "lucide-react";

import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-sand-50"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-wave-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div
        className="absolute top-0 right-0 mr-40 mt-40 w-[400px] h-[400px] bg-ocean-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      ></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-sand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-slate-600 text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-100">
              <ShieldCheck size={14} className="text-wave-500" />
              <span>Accepting New Patients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] fontLato">
              Dentistry <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wave-600 to-ocean-500 italic fontCookie text-8xl">
                Reimagined.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-light">
              We've created a dental experience that feels less like a doctor's
              visit and more like a breath of fresh air. Gentle care, modern
              technology, and a judgment-free zone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/Appointment"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-wave-600 transition-all hover:scale-105 shadow-xl shadow-slate-200"
              >
                Book Your Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold hover:bg-wave-50 hover:border-wave-200 transition-all"
              >
                Our Services
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200/60">
              <div className="flex -space-x-4">
                {[10, 15, 22, 33].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/50/50?random=${i}`}
                    alt="Patient"
                    className="w-12 h-12 rounded-full border-4 border-sand-50"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-600">
                  500+ 5-Star Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Image Content replace  */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 rotate-1 hover:rotate-0 transition-all duration-700">
              <img
                src={heroImg}
                alt="Modern Dental Office image with technology"
                className="w-full h-full object-cover"
                width="1200"
                height="600"
                loading="eager"
                fetchPriority="high"
              />

              {/* Floating Badge 1 */}
              <div className="absolute top-8 right-8 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float shadow-lg">
                <div className="bg-wave-100 p-2 rounded-full text-wave-600">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    Technology
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Digital X-Rays
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div
                className="absolute bottom-8 left-8 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float shadow-lg"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="bg-ocean-100 p-2 rounded-full text-ocean-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    Comfort
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Relaxation Menu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
