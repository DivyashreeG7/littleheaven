import React, { useState } from 'react';
import { PARENT_REVIEWS } from '../data/preschoolData';
import { ParentReview } from '../types';
import { Star, Heart, MessageSquarePlus, CheckCircle2, X } from 'lucide-react';

export const ParentReviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ParentReview[]>(PARENT_REVIEWS);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    childName: '',
    childClass: 'Nursery',
    reviewText: '',
    rating: 5
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Divide reviews into 2 sets
  const set1 = reviewsList.slice(0, Math.ceil(reviewsList.length / 2));
  const set2 = reviewsList.slice(Math.ceil(reviewsList.length / 2));

  // Repeat each set 2 times for exact 50% seamless infinite loop
  const marqueeSet1 = [...set1, ...set1];
  const marqueeSet2 = [...set2, ...set2];

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.reviewText) return;

    const created: ParentReview = {
      id: `rev-custom-${Date.now()}`,
      name: newReview.name,
      childName: newReview.childName || 'Child',
      childClass: `${newReview.childClass} Student`,
      rating: newReview.rating,
      reviewText: newReview.reviewText,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200`,
      location: 'Parent Reviewer',
      date: 'Just now'
    };

    setReviewsList([created, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setAddModalOpen(false);
      setNewReview({ name: '', childName: '', childClass: 'Nursery', reviewText: '', rating: 5 });
    }, 2000);
  };

  return (
    <section id="reviews" className="scroll-mt-24 sm:scroll-mt-28 relative py-20 lg:py-28 bg-white overflow-hidden">
      
      {/* Background ambient glowing blurs */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-extrabold tracking-wide uppercase shadow-xs">
            <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            <span>Parent Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by Parents, <br />
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 bg-clip-text text-transparent drop-shadow-xs">
              Cherished by Children
            </span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            Hear directly from our vibrant community of parents about their child's transformational journey at Little's Heaven Child Care & Early Learning.
          </p>

          {/* ⭐ 5.0 / 5.0 Based on 11 Google Reviews Banner */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-amber-200/80 shadow-[0_8px_25px_rgba(245,158,11,0.12)]">
              {/* Google G Icon */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                Based on <strong>Google Reviews</strong>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* DUAL DIRECTION INFINITE CAROUSELS */}
      <div className="space-y-6">
        
        {/* SET 1: Moving LEFT -> RIGHT (Right Marquee) */}
        <div className="relative w-full overflow-hidden py-3">
          <div className="hidden sm:block absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-6 animate-marquee-right whitespace-nowrap py-2 md:hover:[animation-play-state:paused]">
            {marqueeSet1.map((rev, index) => (
              <div
                key={`set1-${rev.id}-${index}`}
                className="w-[280px] sm:w-[350px] p-5 sm:p-6 rounded-[22px] sm:rounded-[26px] border border-slate-200/80 bg-white shadow-[0_6px_20px_rgba(37,99,235,0.05)] shrink-0 whitespace-normal flex flex-col justify-center space-y-3 hover:shadow-[0_12px_28px_rgba(37,99,235,0.1)] transition-all duration-300 select-none"
              >
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium italic">
                  "{rev.reviewText}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SET 2: Moving RIGHT -> LEFT (Left Marquee) */}
        <div className="relative w-full overflow-hidden py-3">
          <div className="hidden sm:block absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-6 animate-marquee-left whitespace-nowrap py-2 md:hover:[animation-play-state:paused]">
            {marqueeSet2.map((rev, index) => (
              <div
                key={`set2-${rev.id}-${index}`}
                className="w-[280px] sm:w-[350px] p-5 sm:p-6 rounded-[22px] sm:rounded-[26px] border border-slate-200/80 bg-white shadow-[0_6px_20px_rgba(37,99,235,0.05)] shrink-0 whitespace-normal flex flex-col justify-center space-y-3 hover:shadow-[0_12px_28px_rgba(37,99,235,0.1)] transition-all duration-300 select-none"
              >
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium italic">
                  "{rev.reviewText}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SHARE REVIEW MODAL */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg glass-card bg-white/95 backdrop-blur-2xl border border-white/95 rounded-[32px] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setAddModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedMessage ? (
              <div className="text-center py-8 space-y-3 animate-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Thank You, Parent!</h3>
                <p className="text-xs text-slate-600">Your review has been successfully added to our community wall.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReviewSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Share Your Experience</h3>
                  <p className="text-xs text-slate-500">Your testimonial inspires new parents in our community.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Child's Name</label>
                    <input
                      type="text"
                      value={newReview.childName}
                      onChange={(e) => setNewReview({ ...newReview, childName: e.target.value })}
                      placeholder="e.g. Aarav"
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Program</label>
                    <select
                      value={newReview.childClass}
                      onChange={(e) => setNewReview({ ...newReview, childClass: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl glass-input text-xs font-medium bg-white"
                    >
                      <option value="Day Care">Day Care</option>
                      <option value="Play Group">Play Group</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Rating</label>
                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        onClick={() => setNewReview({ ...newReview, rating: s })}
                        className={`w-6 h-6 cursor-pointer ${s <= newReview.rating ? 'fill-amber-400' : 'text-slate-300'}`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Review Details</label>
                  <textarea
                    rows={3}
                    required
                    value={newReview.reviewText}
                    onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })}
                    placeholder="Tell us what you love about Little Dreams Preschool..."
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shine-sweep w-full py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/20 hover:scale-105 transition-all cursor-pointer"
                >
                  Submit Story
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
