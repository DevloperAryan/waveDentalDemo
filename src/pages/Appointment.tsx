import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Mail, Phone, User, CheckCircle, MapPin, Waves, ChevronDown, Check } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    isCurrentPatient: 'no', // default to no
    dayPreference: 'Any day',
    timePreference: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const daysOptions = ["Any day", "Mon", "Tue", "Thu", "Fri"];
  const timeOptions = ["Any Time", "Morning (9AM - 1PM)", "Evening (2PM - 6PM)"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTimeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDaySelect = (day) => {
    setFormData(prev => ({
      ...prev,
      dayPreference: day
    }));
  };

  const handleTimeSelect = (time) => {
    setFormData(prev => ({
      ...prev,
      timePreference: time
    }));
    setIsTimeOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset after 3 seconds for demo purposes
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        isCurrentPatient: 'no',
        dayPreference: 'Any day',
        timePreference: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div  className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-6 font-sans relative pt-25 pb-20 md:pt-25 md:pb-32 overflow-hidden bg-sand-50">
      <div className="max-w-8xl w-full bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Visual & Info Panel */}
        <div className="bg-wave-700 text-white p-6 md:p-12 md:w-5/12 flex flex-col justify-between relative overflow-hidden shrink-0">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-500 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-800 rounded-full opacity-30 blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <span className="text-2xl md:text-3xl"><Waves/></span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight fontLato">Wave<span className="text-gray-800 ml-1 font-extrabold">Dental</span></h1>
                <p className="text-teal-100 text-xs md:text-sm tracking-widest uppercase fontLato">California</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 md:mb-6 fontLato">
              Book Your Next Visit Online
            </h2>
            <p className="text-teal-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Experience gentle, state-of-the-art dental care. Fill out the form and we'll confirm your appointment within 24 hours.
            </p>

            <div className="space-y-3 md:space-y-4 text-teal-50 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-200 shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-200 shrink-0" />
                <span>123 Medical Center Dr, Suite 100</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-200 shrink-0" />
                <span className="break-all">appointments@brightsmile.com</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 md:mt-12 text-xs text-teal-200/60">
            &copy; 2024 Bright Smile Dental Clinic. All rights reserved.
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-6 md:px-12 md:pt-4 md:pb-12 md:w-7/12 bg-white relative">
          
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Sent!</h3>
              <p className="text-gray-500 max-w-xs mx-auto">
                Thank you for booking with us. We have received your request and will contact you shortly to confirm.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
              >
                Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-600 mb-1 fontLato">Appointment Form</h3>
                <p className="text-gray-400 text-sm">Please provide your information below <span className='text-red-400 ml-2'>(*Avoid sending confidential Info)</span>.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-teal-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:bg-white transition-all outline-none text-gray-700 placeholder-gray-400 text-base md:text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-500" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:bg-white transition-all outline-none text-gray-700 placeholder-gray-400 text-base md:text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:bg-white transition-all outline-none text-gray-700 placeholder-gray-400 text-base md:text-sm"
                  />
                </div>

                {/* Current Patient Radio */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-teal-500" /> Current Patient?
                  </label>
                  <div className="flex flex-wrap items-center gap-4 min-h-[50px]">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.isCurrentPatient === 'yes' ? 'border-teal-500 bg-teal-500' : 'border-gray-300 bg-white group-hover:border-teal-400'}`}>
                        {formData.isCurrentPatient === 'yes' && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <input 
                        type="radio" 
                        name="isCurrentPatient" 
                        value="yes" 
                        checked={formData.isCurrentPatient === 'yes'} 
                        onChange={handleChange} 
                        className="hidden" 
                      />
                      <span className={`text-sm ${formData.isCurrentPatient === 'yes' ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>Yes</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.isCurrentPatient === 'no' ? 'border-teal-500 bg-teal-500' : 'border-gray-300 bg-white group-hover:border-teal-400'}`}>
                         {formData.isCurrentPatient === 'no' && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <input 
                        type="radio" 
                        name="isCurrentPatient" 
                        value="no" 
                        checked={formData.isCurrentPatient === 'no'} 
                        onChange={handleChange} 
                        className="hidden" 
                      />
                      <span className={`text-sm ${formData.isCurrentPatient === 'no' ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>No</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Day Preference */}
            <div className='flex flex-wrap gap-3 items-center justify-between'>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-teal-500" /> Preferred Day
                </label>
                <div className="flex flex-wrap gap-2">
                  {daysOptions.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDaySelect(day)}
                      className={`flex-1 sm:flex-none px-3 xl:py-3 py-2 md:px-4 rounded-lg text-sm font-medium transition-all duration-200 border text-center cursor-pointer ${
                        formData.dayPreference === day
                          ? 'bg-wave-600 text-white border-wave-700 shadow-md shadow-teal-200'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300 hover:text-teal-600'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Preference - CUSTOM DROPDOWN */}
              <div className="space-y-1.5 sm:w-[50%] xl:w-[50%]" ref={dropdownRef}>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-500" /> Preferred Time
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsTimeOpen(!isTimeOpen)}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-50 border flex items-center justify-between transition-all outline-none text-base md:text-sm text-left cursor-pointer ${
                      isTimeOpen 
                        ? 'border-teal-500 ring-2 ring-teal-200 bg-white' 
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <span className={formData.timePreference ? "text-gray-700" : "text-gray-400"}>
                      {formData.timePreference || "Select a time slot"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isTimeOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Custom Options Container */}
                  {isTimeOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-fade-in-down">
                      {timeOptions.map((time) => (
                        <div
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`px-4 py-3 cursor-pointer flex items-center justify-between text-sm transition-colors duration-150 ${
                            formData.timePreference === time
                              ? 'bg-teal-50 text-teal-700 font-medium'
                              : 'text-gray-600 hover:bg-teal-50 hover:text-teal-600'
                          }`}
                        >
                          {time}
                          {formData.timePreference === time && (
                            <Check className="w-4 h-4 text-teal-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Hidden select for form submission validity if needed later, but state handles it now */}
                  <input type="hidden" name="timePreference" value={formData.timePreference} required />
                </div>
              </div>
            </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <span className="text-teal-500 font-bold text-lg leading-none">@</span>
                  </div>
                   Additional Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your dental concern..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:bg-white transition-all outline-none text-gray-700 placeholder-gray-400 resize-none text-base md:text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-wave-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-gray-500 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Book Appointment</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;