import { 
  MapPin, Clock, Phone, ArrowRight, Navigation,
  Sparkles, ShieldCheck, Star, Users, Trophy, Facebook, Twitter
} from 'lucide-react';

// import yelpIco from "../assets/yelp.svg";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="w-5 h-5">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const YelpIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 1016.09 1333.33" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M25.87 641.95C4.22 676.65-4.93 785.94 2.59 858.47c2.65 23.94 6.98 43.91 13.29 55.81 8.66 16.48 23.22 26.28 39.81 26.88 10.64.54 17.26-1.26 217.43-65.62 0 0 88.96-28.39 89.31-28.57 22.19-5.65 37.11-26.05 38.56-52.09 1.44-26.7-12.33-50.28-35.07-58.82 0 0-62.73-25.56-62.85-25.56-215.08-88.71-224.76-92.2-235.59-92.32-16.59-.67-31.33 7.7-41.62 23.76zM515.4 545.6c-3.91-90.1-31.04-491.27-34.22-509.86-4.57-16.84-17.74-28.87-36.63-33.62-58.04-14.37-279.86 47.76-320.94 90.16-13.23 13.78-18.1 30.74-14.14 45.78 6.5 13.29 281.3 445.68 281.3 445.68 40.6 65.86 73.74 55.63 84.63 52.2 10.76-3.31 43.72-13.54 40-90.34zm228.19 187.72c227.35-55.1 236.13-57.98 245.09-63.88 13.78-9.26 20.69-24.78 19.49-43.67 0-.6.12-1.27 0-1.93-5.84-55.81-103.63-201.01-151.81-224.58-17.08-8.19-34.16-7.64-48.35 1.86-8.78 5.71-15.22 14.38-136.95 180.86 0 0-54.97 74.88-55.63 75.6-14.49 17.62-14.73 42.88-.54 64.54 14.68 22.44 39.46 33.38 62.19 27.07 0 0-.91 1.62-1.15 1.93 11.19-4.21 31.22-9.15 67.66-17.8zm103.39 496.44c50.52-20.15 160.71-160.35 168.47-214.3 2.7-18.77-3.19-34.94-16.12-45.29-8.48-6.37-14.92-8.84-214.96-74.52 0 0-87.75-28.99-88.9-29.53-21.23-8.24-45.47-.61-61.77 19.48-16.96 20.63-19.49 47.88-5.96 68.45l35.31 57.5c118.73 192.83 127.81 206.48 136.35 213.16 13.23 10.4 30.07 12.09 47.57 5.05zm-339.94 73.2c3.49-10.11 3.91-17.02 4.51-227.3 0 0 .48-92.93.54-93.83 1.44-22.8-13.29-43.54-37.41-52.81-24.84-9.56-51.6-3.67-66.64 15.04 0 0-43.9 52.09-44.03 52.09-150.66 177.01-156.97 185.19-160.65 195.65-2.23 6.13-3.13 12.75-2.41 19.31.91 9.38 5.17 18.64 12.21 27.3 34.95 41.5 202.51 103.15 256.04 94.01 18.58-3.37 32.12-13.83 37.83-29.47z" fill="#bf2519" fillRule="nonzero"/></svg>
);

const DentalClinicContact = () => {
  // Theme constants
  const THEME = {
    primary: '#06a478',
    sand: '#F7F5F0',
    sandDark: '#E8E4D9',
    white: '#FFFFFF',
    textDark: '#1F2937',
    textLight: '#6B7280'
  };

  // Mock Data
  const clinicInfo = {
    name: "BrightSmile Dental Care",
    description: "We are located in the heart of the city, offering a relaxing environment for all your dental needs. Our facility is wheelchair accessible and features free parking for patients.",
    address: "123 Wellness Blvd, Suite 400, Healthy City, HC 90210",
    phone: "+1 (555) 123-4567",
    email: "hello@brightsmile-clinic.com",
  };

  const workingHours = [
    { day: "Monday", open: "08:00 AM", close: "06:00 PM" },
    { day: "Tuesday", open: "08:00 AM", close: "06:00 PM" },
    { day: "Wednesday", open: "08:00 AM", close: "06:00 PM" },
    { day: "Thursday", open: "08:00 AM", close: "08:00 PM" },
    { day: "Friday", open: "08:00 AM", close: "05:00 PM" },
    { day: "Saturday", open: "09:00 AM", close: "02:00 PM" },
    { day: "Sunday", open: "Closed", close: "" },
  ];

  const openMap = () => {
    const encodedQuery = encodeURIComponent(`${clinicInfo.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`, '_blank');
  };


  const customStyles = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `;

  return (
    <div
      className="min-h-screen font-sans selection:bg-[#06a478] selection:text-white"
      style={{ backgroundColor: THEME.sand }}
    >
      <style>{customStyles}</style>

      {/* Decorative Top Border */}
      <div className="h-1.5 w-full" style={{ backgroundColor: THEME.primary }}></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-sm md:text-base font-bold tracking-widest uppercase mb-2" style={{ color: THEME.primary }}>
            Visit Us
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Smile Starts Here
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Experience state-of-the-art dental care in a warm, welcoming environment. 
          </p>
        </div>

        {/* Flex Layout Container */}
        {/* items-start is crucial for sticky to work; it prevents the sticky column from stretching to full height */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6 order-2 lg:order-1">
            
            {/* div1: Contact Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-50/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#06a478]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-[#06a478]/10 text-[#06a478]">
                    <MapPin size={20} />
                  </span>
                  Get In Touch
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold text-[#06a478] mb-1 uppercase tracking-wide">Location</p>
                    <p className="text-gray-700 text-base leading-snug">{clinicInfo.address}</p>
                    <button 
                      onClick={openMap}
                      className="mt-2 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                      style={{ color: THEME.primary }}
                    >
                      Get Directions <ArrowRight size={16} />
                    </button>
                  </div>

                  <div className="w-full h-px bg-gray-100"></div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-[#06a478] mb-1 uppercase tracking-wide">Phone</p>
                      <a href={`tel:${clinicInfo.phone}`} className="text-gray-700 font-medium hover:text-[#06a478] transition-colors block">
                        {clinicInfo.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#06a478] mb-1 uppercase tracking-wide">Email</p>
                      <a href={`mailto:${clinicInfo.email}`} className="text-gray-700 font-medium break-all hover:text-[#06a478] transition-colors block">
                        hello@dental.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button 
                    onClick={() => window.location.href = `tel:${clinicInfo.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
                    style={{ backgroundColor: THEME.primary }}
                  >
                    <Phone size={16} />
                    Call Now
                  </button>
                  <button 
                    onClick={openMap}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold border-2 bg-transparent hover:bg-gray-50 transition-colors text-sm cursor-pointer"
                    style={{ borderColor: THEME.primary, color: THEME.primary }}
                  >
                    <Navigation size={16} />
                    Navigate
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center gap-2 flex-wrap sm:flex-nowrap">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">Socials</span>
                    <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
                      {[
                        { icon: <Facebook size={18} />, color: "text-blue-600 bg-blue-50" },
                        { icon: <Twitter size={18} />, color: "text-black bg-gray-50" },
                        { icon: <GoogleIcon />, color: "bg-red-50" },
                        { icon: <YelpIcon />, color: "bg-red-50" }
                      ].map((social, idx) => (
                        <a key={idx} href="#" className={`p-2.5 rounded-full hover:scale-110 transition-all ${social.color}`}>
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* div2: Hours Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-50/50">
              <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-[#06a478]/10 text-[#06a478]">
                  <Clock size={20} />
                </span>
                Working Hours
              </h3>
              
              <div className="space-y-2">
                {workingHours.map((schedule, index) => {
                  const isToday = new Date().getDay() === (index + 1) % 7;
                  const isClosed = schedule.open === "Closed";

                  return (
                    <div 
                      key={schedule.day} 
                      className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${isToday ? 'bg-[#06a478]/10' : 'hover:bg-gray-50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-sm md:text-base font-medium ${isToday ? 'text-[#06a478] font-bold' : 'text-gray-600'}`}>
                          {schedule.day}
                        </span>
                        {isToday && (
                          <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#06a478] text-white">
                            Today
                          </span>
                        )}
                      </div>
                      <div className={`text-sm ${isClosed ? 'text-gray-400 italic' : 'text-gray-900 font-medium'}`}>
                        {isClosed ? 'Closed' : `${schedule.open} - ${schedule.close}`}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column */}
          
          <div className="w-full lg:w-7/12 order-1 lg:order-2 lg:sticky lg:top-[4.3rem] lg:self-start lg:h-[calc(100vh-3rem)]">
            <div className="h-full min-h-[500px] md:min-h-0 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white/50 backdrop-blur-sm flex flex-col justify-center">
              
              {/* Animated Background Blobs */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-12 w-96 h-96 bg-[#06a478] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-0 -right-12 w-96 h-96 bg-[#E8E4D9] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-96 h-96 bg-[#06a478] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] md:min-h-0">
                
                {/* Central Floating Feature */}
                <div className="mb-8 md:mb-10 relative animate-float">
                  <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-[#06a478]/5">
                    <Sparkles size={48} className="text-[#06a478] md:w-16 md:h-16" />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#06a478]/20 scale-125 animate-pulse"></div>
                </div>

                {/* Headline */}
                <div className="text-center max-w-md mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Experience the Difference</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Modern technology meets compassionate care. Join thousands of happy patients.
                  </p>
                </div>

                {/* Floating Stat Cards (Responsive Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                  {/* Card 1 */}
                  <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-500 shrink-0">
                      <Star fill="currentColor" size={20} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">4.9/5</p>
                      <p className="text-xs text-gray-500 font-medium">Rating</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">10k+</p>
                      <p className="text-xs text-gray-500 font-medium">Patients</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-[#06a478] shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">100%</p>
                      <p className="text-xs text-gray-500 font-medium">Sterile</p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">Top 10</p>
                      <p className="text-xs text-gray-500 font-medium">Clinic</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        {/* <div className="mt-12 text-center pb-8">
            <p className="text-gray-400 text-xs uppercase tracking-wide">
                &copy; 2024 BrightSmile Dental Care. All rights reserved.
            </p>
        </div> */}
      </div>
    </div>
  );
};

export default function App() {
  return <DentalClinicContact />;
}