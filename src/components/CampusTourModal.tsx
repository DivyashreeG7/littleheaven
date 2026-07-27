import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, PhoneCall } from 'lucide-react';

interface CampusTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone || !date) return;

    setSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/tour-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName,
          phone,
          preferredDate: date,
          preferredTimeSlot: timeSlot
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 2500);
      } else {
        setErrorMessage(data.error || 'Tour booking failed security check.');
      }
    } catch (err) {
      setErrorMessage('Network connection error.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-card bg-white/95 backdrop-blur-2xl border border-white/95 rounded-[32px] p-6 sm:p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Campus Tour Scheduled!</h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Our admissions team will send a confirmation SMS & WhatsApp with visitor pass details for {date || 'your chosen date'} at {timeSlot}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Schedule a Campus Tour</h3>
                <p className="text-xs text-slate-500">Walk through our glassmorphism classrooms & sensory parks.</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Parent Name</label>
              <input
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl glass-input text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Time Slot</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl glass-input text-xs font-medium bg-white"
                >
                  <option value="10:00 AM">10:00 AM (Morning)</option>
                  <option value="11:30 AM">11:30 AM (Morning)</option>
                  <option value="02:30 PM">02:30 PM (Afternoon)</option>
                  <option value="04:00 PM">04:00 PM (Evening)</option>
                </select>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center gap-2 text-[11px] text-blue-700 font-semibold">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Campus Location: 42 Palm Avenue, Indiranagar, Bangalore</span>
            </div>

            <button
              type="submit"
              className="btn-shine-sweep w-full py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/20 hover:scale-105 transition-all cursor-pointer"
            >
              Confirm Tour Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
