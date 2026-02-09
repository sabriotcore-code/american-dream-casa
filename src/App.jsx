import React, { useState, useEffect } from 'react';
import { Home, Phone, CheckCircle, ArrowRight, Calendar, PhoneCall, FileCheck, Key, Shield, Heart, DollarSign, Users, ChevronDown, Menu, X, Star } from 'lucide-react';

export default function AmericanDreamCasaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [language, setLanguage] = useState('EN');
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitPopupShown, setExitPopupShown] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  // Exit Intent Detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !exitPopupShown) {
        setShowExitPopup(true);
        setExitPopupShown(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [exitPopupShown]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Brand Colors
  const colors = {
    navy: '#1a3a6e',      // Deep navy blue
    red: '#c41e3a',       // American red
    lightBlue: '#2563eb', // Accent blue
    white: '#ffffff',
    cream: '#fafafa',
    gray: '#64748b'
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-blue-950/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* Simplified Logo Mark */}
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Flag stripes background */}
                  <rect x="5" y="25" width="45" height="6" fill="#c41e3a" rx="3"/>
                  <rect x="5" y="37" width="55" height="6" fill="#c41e3a" rx="3"/>
                  <rect x="5" y="49" width="50" height="6" fill="#c41e3a" rx="3"/>
                  {/* Blue field with stars */}
                  <rect x="5" y="10" width="30" height="35" fill="#1a3a6e"/>
                  <circle cx="12" cy="18" r="2" fill="white"/>
                  <circle cx="20" cy="18" r="2" fill="white"/>
                  <circle cx="28" cy="18" r="2" fill="white"/>
                  <circle cx="12" cy="27" r="2" fill="white"/>
                  <circle cx="20" cy="27" r="2" fill="white"/>
                  <circle cx="28" cy="27" r="2" fill="white"/>
                  {/* House roof */}
                  <path d="M50 15 L95 50 L90 50 L90 55 L55 55 L55 50 L50 50 Z" fill="#c41e3a"/>
                  {/* Window */}
                  <rect x="70" y="58" width="12" height="12" fill="#1a3a6e"/>
                  <line x1="76" y1="58" x2="76" y2="70" stroke="white" strokeWidth="2"/>
                  <line x1="70" y1="64" x2="82" y2="64" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <span className={`text-lg font-bold tracking-tight ${scrolled ? 'text-blue-950' : 'text-white'}`}>
                  AmericanDreamCasa.com
                </span>
                <a 
                  href="tel:501-777-5502" 
                  className={`block text-xs ${scrolled ? 'text-red-600' : 'text-red-400'} font-medium hover:underline`}
                >
                  501-777-5502
                </a>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#how-it-works" className={`text-sm font-medium hover:opacity-70 transition whitespace-nowrap ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>How It Works</a>
              <a href="#properties" className={`text-sm font-medium hover:opacity-70 transition whitespace-nowrap ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>Properties</a>
              <a href="#about" className={`text-sm font-medium hover:opacity-70 transition whitespace-nowrap ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>About</a>
              <a href="#faq" className={`text-sm font-medium hover:opacity-70 transition whitespace-nowrap ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>FAQ</a>
              
              {/* Phone number - visible when scrolled */}
              <a 
                href="tel:501-777-5502" 
                className={`flex items-center gap-2 text-sm font-semibold transition ${scrolled ? 'text-blue-950' : 'text-white'}`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">501-777-5502</span>
              </a>
              
              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-lg shadow-red-600/25 whitespace-nowrap">
                Schedule a Showing
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Mobile Call Button */}
              <a 
                href="tel:501-777-5502" 
                className={`p-2 rounded-full transition ${scrolled ? 'bg-blue-950 text-white' : 'bg-white/20 text-white'}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 
                  <X className={scrolled ? 'text-blue-950' : 'text-white'} /> : 
                  <Menu className={scrolled ? 'text-blue-950' : 'text-white'} />
                }
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 space-y-4">
              <a href="#how-it-works" className="block text-slate-600 font-medium">How It Works</a>
              <a href="#properties" className="block text-slate-600 font-medium">Properties</a>
              <a href="#about" className="block text-slate-600 font-medium">About</a>
              <a href="#faq" className="block text-slate-600 font-medium">FAQ</a>
              
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a 
                  href="tel:501-777-5502" 
                  className="flex items-center justify-center gap-2 w-full bg-blue-950 text-white px-5 py-3 rounded-lg font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  Call: 501-777-5502
                </a>
                <button className="w-full bg-red-600 text-white px-5 py-3 rounded-lg font-semibold">
                  Schedule a Showing
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Tagline Banner */}
        <div className="bg-blue-900 text-center py-2 text-sm">
          <span className="text-white/90 tracking-wide">FINANCING YOUR DREAM HOME - OWNER TO OWNER</span>
          <span className="mx-3 text-white/50">|</span>
          <span className="text-white/70 tracking-wide">FINANCIACIÓN DE LA CASA DE SUS SUEÑOS - DUEÑO A DUEÑO</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background with Flag-inspired gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
          {/* Stars pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 1l3.09 9.51h10l-8.09 5.88 3.09 9.51L25 20.02l-8.09 5.88 3.09-9.51-8.09-5.88h10z' fill='%23ffffff' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
          {/* Red stripe accent */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-600" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Star className="w-4 h-4 text-red-400 fill-red-400" />
            <span className="text-white/90 text-sm font-medium">Owner Financing Available Now</span>
            <Star className="w-4 h-4 text-red-400 fill-red-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Own a Home
            <span className="block text-red-500">Without a Bank Loan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop wasting money on rent. REI REALTY helps hard-working people become homeowners through simple owner financing—even if you don't qualify for a bank loan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-red-600/30 hover:shadow-red-500/40 hover:scale-105">
              Schedule a Showing Today
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold transition border border-white/30">
              See Available Homes
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-red-400" />
              <span>No Bank Loan Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-red-400" />
              <span>Licensed Real Estate Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-red-400" />
              <span>50+ Families Helped Since 2023</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">The Problem</span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4 mb-6 leading-tight">
                Can't Qualify for a Bank Loan?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                You work hard. You have money for a down payment and enough income to cover monthly mortgage payments. But bank loans require strict qualifications that don't fit everyone:
              </p>
              <ul className="space-y-4">
                {[
                  'Credit issues from the past',
                  'Self-employment or non-traditional income',
                  'Not enough "paperwork" to satisfy their rigid rules',
                  'Previous financial hardships (divorce, medical bills, job loss)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-10 relative overflow-hidden border border-slate-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -translate-y-1/2 translate-x-1/2" />
                <p className="text-2xl text-slate-700 leading-relaxed relative z-10">
                  Meanwhile, you're stuck paying rent—building <span className="text-red-600 font-semibold">someone else's equity</span> instead of your own.
                </p>
                <p className="text-lg text-slate-500 mt-4 relative z-10">That's frustrating. And it's not fair.</p>
                <div className="mt-8 pt-8 border-t border-slate-300 relative z-10">
                  <p className="text-blue-800 font-bold text-xl">The good news? There's another way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        {/* American flag inspired stripes */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
          {[...Array(13)].map((_, i) => (
            <div 
              key={i} 
              className={`h-[7.69%] ${i % 2 === 0 ? 'bg-red-600' : 'bg-white'}`}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            We Help You Become a Homeowner—<span className="text-red-500">No Bank Loan Needed</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            At REI REALTY, we specialize in owner financing. That means we focus on your <em>current ability to pay</em>—not just your credit score.
          </p>
          <p className="text-lg text-blue-200 mb-12">
            If you have funds for a down payment and steady income to handle monthly payments, we can help you own a home.
          </p>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {['Simple', 'Fast', 'Transparent'].map((word, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">{word}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4">
              Getting Started is Simple
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: Calendar,
                title: 'Schedule a Showing',
                description: 'Send a photo of your ID or passport, and tour the property at your convenience.',
                color: 'blue'
              },
              {
                step: '02',
                icon: PhoneCall,
                title: 'Phone Consultation',
                description: 'Discuss the buying process, financing terms, and get pre-qualified.',
                color: 'red'
              },
              {
                step: '03',
                icon: FileCheck,
                title: 'Get Officially Qualified',
                description: 'Send us your income documents. We\'ll handle the rest and get you approved.',
                color: 'blue'
              },
              {
                step: '04',
                icon: Key,
                title: 'Close & Get Your Keys',
                description: 'Pick your closing date, meet us at our office to review and sign, and get the keys to your new home.',
                color: 'red'
              }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-slate-100 hover:border-blue-200 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl ${item.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'} flex items-center justify-center mb-6`}>
                    <item.icon className={`w-7 h-7 ${item.color === 'blue' ? 'text-blue-800' : 'text-red-600'}`} />
                  </div>
                  <div className={`text-5xl font-bold mb-4 ${item.color === 'blue' ? 'text-blue-900' : 'text-red-600'}`}>{item.step}</div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition shadow-lg shadow-red-600/25">
              Schedule a Showing Today
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet / Transitional CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Guide Offer */}
            <div className="text-white">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                FREE GUIDE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Ready Yet? Get Our Free Homebuyer's Guide
              </h2>
              <p className="text-lg text-red-100 mb-6 leading-relaxed">
                Download <strong>"5 Things You Need to Know About Owner Financing"</strong> and learn how families just like yours are becoming homeowners—even without a bank loan.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'How owner financing actually works',
                  'What you need to qualify (it\'s less than you think)',
                  'Hidden costs to watch out for',
                  'Questions to ask before signing',
                  'Real success stories from Arkansas families'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-red-50">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Email Capture Form */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-slate-800"
                  />
                  <button className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-bold transition whitespace-nowrap">
                    Send My Free Guide
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  No spam, ever. Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
            
            {/* Right Side - Calculator Preview */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-2">
                  What Could Your Payment Be?
                </h3>
                <p className="text-slate-600">
                  Get a quick estimate of your monthly payment
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Home Price</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input 
                      type="text" 
                      placeholder="150,000"
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Down Payment</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input 
                      type="text" 
                      placeholder="15,000"
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-slate-600 mb-1">Estimated Monthly Payment</p>
                <p className="text-3xl font-bold text-blue-950">$1,150 - $1,350</p>
                <p className="text-xs text-slate-500 mt-1">*Actual payment depends on terms</p>
              </div>
              
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold transition shadow-lg">
                Get My Exact Payment Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Available Now</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Move-in ready homes available with owner financing. No bank loan needed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                address: '2612 Dorchester Dr',
                city: 'Little Rock, AR 72204',
                price: '$154,900',
                beds: 3,
                baths: 2,
                sqft: '1,450',
                payment: '$1,150/mo*',
                tag: 'Just Listed',
                tagColor: 'bg-green-600'
              },
              {
                address: '17 Neal Place',
                city: 'Little Rock, AR 72204',
                price: '$139,900',
                beds: 3,
                baths: 1.5,
                sqft: '1,280',
                payment: '$1,050/mo*',
                tag: 'Popular',
                tagColor: 'bg-blue-600'
              },
              {
                address: '4521 Maple Street',
                city: 'North Little Rock, AR 72116',
                price: '$169,900',
                beds: 4,
                baths: 2,
                sqft: '1,680',
                payment: '$1,275/mo*',
                tag: 'Move-In Ready',
                tagColor: 'bg-red-600'
              }
            ].map((property, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 group">
                {/* Property Image Placeholder */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  {/* House illustration placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 120 100" className="w-32 h-32 text-slate-300">
                      <path d="M60 10 L110 50 L100 50 L100 90 L20 90 L20 50 L10 50 Z" fill="currentColor" opacity="0.5"/>
                      <rect x="45" y="60" width="30" height="30" fill="currentColor" opacity="0.7"/>
                      <rect x="35" y="35" width="15" height="15" fill="white" opacity="0.8"/>
                      <rect x="70" y="35" width="15" height="15" fill="white" opacity="0.8"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Tag Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${property.tagColor} text-white px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide shadow-lg`}>
                      {property.tag}
                    </span>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-blue-950 text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg">
                      {property.price}
                    </span>
                  </div>
                </div>
                
                {/* Property Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 mb-1">{property.address}</h3>
                  <p className="text-slate-500 mb-4">{property.city}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      {property.beds} Beds
                    </span>
                    <span>•</span>
                    <span>{property.baths} Baths</span>
                    <span>•</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-green-700">
                      <span className="font-semibold">Est. Payment:</span> {property.payment}
                    </p>
                  </div>
                  
                  <button className="w-full bg-blue-950 hover:bg-blue-900 text-white py-3 rounded-xl font-semibold transition">
                    Schedule a Showing
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-4">*Estimated payment based on typical owner financing terms. Actual payment may vary.</p>
            <button className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white px-8 py-3 rounded-xl font-semibold transition">
              View All Available Properties
            </button>
          </div>
        </div>
      </section>

      {/* Why REI REALTY Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4 mb-6">
                We're Experts in Owner Financing
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed italic border-l-4 border-red-600 pl-4">
                "We know how frustrating it is to want a home but not qualify for a bank loan. That's why we created a better way."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Licensed Professionals',
                  description: 'Licensed, experienced, and here to guide you every step of the way.'
                },
                {
                  icon: Home,
                  title: 'Owner Financing Specialists',
                  description: 'Bank said no? We specialize in finding a way to say yes.'
                },
                {
                  icon: DollarSign,
                  title: 'Transparent Process',
                  description: 'No hidden fees. No confusing jargon. Everything is clear and in writing.'
                },
                {
                  icon: Heart,
                  title: 'We Actually Care',
                  description: 'We\'re not here to sell you a house. We\'re here to help you own one.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:bg-blue-50 transition group border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 group-hover:bg-blue-800 flex items-center justify-center mb-4 transition">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stakes Section */}
      <section className="py-24 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Every Month You Wait is Money You'll <span className="text-red-500">Never Get Back</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Keep Renting */}
            <div className="bg-red-950/30 backdrop-blur-sm rounded-2xl p-8 border border-red-800/30">
              <h3 className="text-xl font-bold text-red-400 mb-6">If you keep renting:</h3>
              <ul className="space-y-4">
                {[
                  'You\'re building your landlord\'s equity, not yours',
                  'You\'re wasting $10,000-$20,000+ per year with nothing to show for it',
                  'You\'re stuck in uncertainty—rent can go up, leases can end',
                  'You\'re delaying stability and security for your family'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Become Homeowner */}
            <div className="bg-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
              <h3 className="text-xl font-bold text-blue-300 mb-6">If you become a homeowner:</h3>
              <ul className="space-y-4">
                {[
                  'Every payment builds YOUR equity',
                  'You have pride of ownership and control over your future',
                  'Your family has stability and a place to call home',
                  'You\'re building wealth and financial security'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-center text-2xl font-bold mt-12 text-white">
            The choice is yours. <span className="text-red-400">Keep renting</span>, or <span className="text-blue-300">start owning</span>.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4">
              Real People. Real Homes. Real Results.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'We couldn\'t qualify for a bank loan after three tries. We thought we\'d never own a home. Then we found REI REALTY. Within 30 days, we had keys in hand. Our kids finally have a stable place to grow up.',
                name: 'Sarah M.',
                location: 'Little Rock'
              },
              {
                quote: 'As a contractor, I couldn\'t qualify for a bank loan—they wanted 2 years of tax returns and paperwork I didn\'t have. REI REALTY made it simple—I showed them my bank statements and got approved in 3 days.',
                name: 'Carlos R.',
                location: 'North Little Rock'
              },
              {
                quote: 'After my divorce, my credit was destroyed. I thought I\'d be renting forever. REI REALTY gave me a second chance. I\'m now a proud homeowner and my kids have their own rooms.',
                name: 'Jennifer T.',
                location: 'Sherwood'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-red-500 fill-red-500" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="text-white font-bold">{item.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-blue-950">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-slate-600 mt-12">
            We've helped <span className="font-bold text-blue-800">50+ families</span> achieve homeownership. You could be next.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to the most common questions about owner financing.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                category: 'About Owner Financing',
                questions: [
                  {
                    q: 'What is Owner Financing?',
                    a: 'Owner financing is a real estate transaction where the seller acts as the lender instead of the buyer getting a traditional mortgage. It\'s a simpler, faster path to homeownership.'
                  },
                  {
                    q: 'Why does Owner Financing exist?',
                    a: 'It\'s used when buyers can\'t qualify for a bank loan, sellers want faster closings, or both prefer more flexible terms. It creates a win-win situation for everyone involved.'
                  },
                  {
                    q: 'Is this the same as rent-to-own?',
                    a: 'No. Owner financing transfers ownership to you immediately at closing. Rent-to-own is a lease with an option to buy later. With owner financing, you own the home from day one.'
                  },
                  {
                    q: 'What are the benefits for buyers?',
                    a: 'Easier qualification, faster closings, flexible terms, and no traditional bank approval needed—a simpler, smarter path to homeownership.'
                  }
                ]
              },
              {
                category: 'Qualification & Process',
                questions: [
                  {
                    q: 'How do I qualify to buy?',
                    a: 'Provide your income qualifying documents such as tax returns, 3 months of pay stubs, or 3 months of bank statements. We focus on your current ability to pay, not just your credit score.'
                  },
                  {
                    q: 'How fast can we close?',
                    a: 'Typically within 1–4 weeks—much faster than traditional financing. In some cases, we\'ve closed homes within days of first contact. The timeline depends on how quickly you want to move forward and your qualification status.'
                  },
                  {
                    q: 'How do I visit homes?',
                    a: 'Schedule a showing, provide a valid ID or passport, and we\'ll give you lockbox access to tour the property at your convenience.'
                  },
                  {
                    q: 'Is there a contract to sign?',
                    a: 'Yes. We meet at our Little Rock office to review the owner-finance contract and answer any questions. Once agreed, both parties sign electronically, and you receive a fully executed contract and certificate of authenticity.'
                  }
                ]
              },
              {
                category: 'Terms & Payments',
                questions: [
                  {
                    q: 'What is the typical down payment?',
                    a: 'The typical down payment is around 5–10% of the purchase price, designed to make homeownership more accessible. The exact amount can vary based on the home\'s size, condition, quality, and location.'
                  },
                  {
                    q: 'What are the interest rates?',
                    a: 'Our typical interest rate is 10.95%. This reflects the speed, certainty, and access to homeownership that owner financing provides without bank approval.'
                  },
                  {
                    q: 'What is the loan term?',
                    a: 'The loan term is typically 30 years, consistent with standard financing practices. This term may be subject to limited negotiation upon mutual agreement.'
                  },
                  {
                    q: 'Are there balloon payments?',
                    a: 'No. Our financing structure is straightforward—we don\'t include any balloon payments in our agreements. Your payment stays consistent throughout the loan.'
                  }
                ]
              },
              {
                category: 'Closing & Keys',
                questions: [
                  {
                    q: 'What do I bring to closing?',
                    a: 'Bring your income verification documents, down payment (cashier\'s check or cash), and a valid ID or passport.'
                  },
                  {
                    q: 'How does the closing work?',
                    a: 'Buyer and seller set a closing date, meet at our office, review the documents together, and sign everything electronically. It\'s simple and straightforward.'
                  },
                  {
                    q: 'When do I get my keys?',
                    a: 'You receive your keys at closing. Once the documents are signed and the down payment is received, the home is yours!'
                  }
                ]
              }
            ].map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                    const uniqueIndex = `${catIndex}-${faqIndex}`;
                    return (
                      <div 
                        key={faqIndex}
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition"
                      >
                        <button
                          onClick={() => toggleFaq(uniqueIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                        >
                          <span className="font-semibold text-blue-950">{faq.q}</span>
                          <ChevronDown 
                            className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
                              openFaq === uniqueIndex ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openFaq === uniqueIndex && (
                          <div className="px-6 pb-4">
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a 
              href="tel:501-777-5502" 
              className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              <Phone className="w-5 h-5" />
              Call Us: 501-777-5502
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 1l3.09 9.51h10l-8.09 5.88 3.09 9.51L25 20.02l-8.09 5.88 3.09-9.51-8.09-5.88h10z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Stop Renting.<br /><span className="text-red-500">Start Owning.</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Take the first step toward homeownership today. Schedule a showing and see what homes are available for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:scale-105">
              Schedule a Showing Today
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold transition border border-white/30">
              <Phone className="w-5 h-5" />
              Call Now: (501) 777-5502
            </button>
          </div>
          
          <p className="text-blue-200 text-sm">
            No obligation. No credit check. Just a conversation about your future.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* Mini Logo */}
                <div className="w-10 h-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="5" y="25" width="45" height="6" fill="#c41e3a" rx="3"/>
                    <rect x="5" y="37" width="55" height="6" fill="#c41e3a" rx="3"/>
                    <rect x="5" y="49" width="50" height="6" fill="#c41e3a" rx="3"/>
                    <rect x="5" y="10" width="30" height="35" fill="#1a3a6e"/>
                    <circle cx="12" cy="18" r="2" fill="white"/>
                    <circle cx="20" cy="18" r="2" fill="white"/>
                    <circle cx="28" cy="18" r="2" fill="white"/>
                    <circle cx="12" cy="27" r="2" fill="white"/>
                    <circle cx="20" cy="27" r="2" fill="white"/>
                    <circle cx="28" cy="27" r="2" fill="white"/>
                    <path d="M50 15 L95 50 L90 50 L90 55 L55 55 L55 50 L50 50 Z" fill="#c41e3a"/>
                    <rect x="70" y="58" width="12" height="12" fill="#1a3a6e"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">AmericanDreamCasa.com</span>
              </div>
              <p className="text-sm text-blue-300">Homeownership Without a Bank Loan</p>
              <div className="mt-4">
                <p className="text-sm">Phone: (501) 777-5502</p>
                <p className="text-sm">Email: support@americandreamcasa.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Available Properties</a></li>
                <li><a href="#" className="hover:text-white transition">Schedule a Showing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Servicing Areas</h4>
              <p className="text-sm">
                Little Rock, North Little Rock, Sherwood, Jacksonville, Benton, and surrounding Central Arkansas areas.
              </p>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-sm">
            <p>© 2026 REI REALTY LLC. All rights reserved. | Licensed Real Estate Broker - Arkansas</p>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowExitPopup(false)}
          />
          
          {/* Popup Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-950 to-blue-900 px-8 py-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Wait! Don't Leave Empty-Handed</h3>
              <p className="text-blue-200">Get our free guide before you go</p>
            </div>
            
            {/* Body */}
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg mb-1">
                    Free Guide: "5 Things You Need to Know About Owner Financing"
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Learn how families just like yours are becoming homeowners—even without a bank loan.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {[
                  'How owner financing actually works',
                  'What you need to qualify',
                  'Questions to ask before signing'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Email Form */}
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition">
                  Send My Free Guide
                </button>
              </div>
              
              <p className="text-xs text-slate-400 text-center mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
              
              <button 
                onClick={() => setShowExitPopup(false)}
                className="w-full text-center text-sm text-slate-400 hover:text-slate-600 mt-4 transition"
              >
                No thanks, I'm okay with my current living situation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
