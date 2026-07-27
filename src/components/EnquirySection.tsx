import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';

interface EnquirySectionProps {
  initialProgramTitle?: string;
  onOpenTour?: () => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialProgramTitle, onOpenTour }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: initialProgramTitle ? `Enquiry for ${initialProgramTitle}` : '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;

    setSubmitting(true);
    setErrorMessage('');
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hallmark Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Reach Out To Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch With Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about admissions, campus visits, or our early learning curriculum? Our team is always here to assist you.
          </p>
        </div>

        {/* Main 2-Column Layout matching reference layout with website theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Contact Information
            </h2>

            {/* List of Contact Details */}
            <div className="space-y-6">
              
              {/* Item 1: Address */}
              {/* Item 1: Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">Address</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Little%27s+Heaven+Child+Care+%26+Early+Learning+1st+floor+Federal+Bank+Dasarahalli+Main+Rd+Bhuvaneswari+Nagar+Hebbal+Bengaluru+Karnataka+560024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-blue-600 leading-snug font-normal block transition-colors"
                  >
                    <strong className="text-slate-800 font-semibold block mb-0.5">Little's Heaven Child Care & Early Learning</strong>
                    1st floor Federal Bank, Dasarahalli Main Rd, Bhuvaneswari Nagar, Hebbal, Bengaluru, Karnataka 560024 ↗
                  </a>
                </div>
              </div>

              {/* Item 2: Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">Phone</h3>
                  <div className="flex flex-col gap-1 text-sm text-slate-700 font-medium">
                    <a href="tel:+917736181828" className="hover:text-blue-600 transition-colors">+91 77361 81828</a>
                    <a href="tel:+917306426871" className="hover:text-blue-600 transition-colors">+91 73064 26871</a>
                  </div>
                </div>
              </div>

              {/* Item 3: Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">Email</h3>
                  <a
                    href="mailto:contact@littlesheaven.edu.in"
                    className="text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    contact@littlesheaven.edu.in
                  </a>
                </div>
              </div>

              {/* Item 4: Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">Business Hours</h3>
                  <div className="text-sm text-slate-600 leading-snug font-normal space-y-0.5">
                    <p><strong className="text-slate-800 font-semibold">Mon – Fri:</strong> 7:00 AM – 8:00 PM</p>
                    <p><strong className="text-slate-800 font-semibold">Saturday:</strong> Opens at 10:00 AM</p>
                    <p><strong className="text-slate-800 font-semibold">Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Embedded Interactive Map Card */}
            <div className="pt-2 space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Little%27s+Heaven+Child+Care+%26+Early+Learning+1st+floor+Federal+Bank+Dasarahalli+Main+Rd+Bhuvaneswari+Nagar+Hebbal+Bengaluru+Karnataka+560024"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/80 shadow-md bg-slate-100 group block cursor-pointer"
                aria-label="Open location in Google Maps"
              >
                {/* Google Maps Embed iframe */}
                <iframe
                  title="Little's Heaven Child Care & Early Learning Location"
                  src="https://maps.google.com/maps?q=Little%27s%20Heaven%20Child%20Care%20%26%20Early%20Learning%201st%20floor%20Federal%20Bank%20Dasarahalli%20Main%20Rd%20Bhuvaneswari%20Nagar%20Hebbal%20Bengaluru%20Karnataka%20560024&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale-[0.05] contrast-[1.02] pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Top-Left Glass Badge: Open in Google Maps */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-white/95 shadow-md text-xs font-extrabold text-blue-700 group-hover:bg-white group-hover:scale-105 flex items-center gap-1.5 transition-all">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Subtle Hover Tint Overlay */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors pointer-events-none" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Send Us a Message Card */}
          <div className="lg:col-span-7">
            <div className="glass-card bg-white/85 backdrop-blur-2xl border border-white/90 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-11 shadow-[0_16px_48px_rgba(37,99,235,0.08)]">
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6 sm:mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.firstName}</strong>. We have received your inquiry and our counselor will reach out to you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-blue-600 bg-white border border-blue-200 hover:bg-blue-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-blue-50/30 border border-blue-100/80 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-blue-50/30 border border-blue-100/80 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-blue-50/30 border border-blue-100/80 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-blue-50/30 border border-blue-100/80 text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="">Select a subject</option>
                        <option value="Admissions & Enrollment">Admissions & Enrollment</option>
                        <option value="Book a Campus Tour">Book a Campus Tour</option>
                        <option value="Fee Structure & Tuition">Fee Structure & Tuition</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Enquiry for Day Care">Enquiry for Day Care</option>
                        <option value="Enquiry for Play Group (PG)">Enquiry for Play Group (PG)</option>
                        <option value="Enquiry for Nursery">Enquiry for Nursery</option>
                        <option value="Enquiry for LKG">Enquiry for LKG</option>
                        <option value="Enquiry for UKG">Enquiry for UKG</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-blue-50/30 border border-blue-100/80 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    />
                    <div className="text-xs text-slate-400 font-normal pt-1">
                      Maximum 500 characters
                    </div>
                  </div>

                  {/* Send Message Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-send-message-btn"
                      className="btn-shine-sweep w-full py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span>Send Message</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

