"use client";

import React, { useState, useEffect, useMemo } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Contect from "./_components/Contect";
import useEmblaCarousel from "embla-carousel-react";
import { FaGithub } from "react-icons/fa";


const slides = [
  {
    title: "Master Interviews with Real-time AI Coaching",
    desc: "Live body language, speech, and emotion analysis with instant feedback.",
  },
  {
    title: "Practice Across 15+ Domains",
    desc: "Technical, behavioral, HR, and case studies with adaptive difficulty.",
  },
];

const testimonials = [
  { name: "Sarah Johnson", quote: "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview.", company: "Google", avatar: "SJ" },
  { name: "Michael Chen", quote: "The feedback was spot on and helped me improve my answers. Highly recommend this service!", company: "Microsoft", avatar: "MC" },
  { name: "Emily Rodriguez", quote: "This platform transformed my interview preparation. The real-time feedback is invaluable.", company: "Amazon", avatar: "ER" },
  { name: "David Kim", quote: "Best investment I've made for my career. The AI coaching is incredibly accurate.", company: "Meta", avatar: "DK" },
  { name: "Jessica Williams", quote: "The practice sessions helped me land my dream job. Couldn't be happier!", company: "Apple", avatar: "JW" },
  { name: "Robert Taylor", quote: "Outstanding platform. The detailed reports helped me identify my weaknesses.", company: "Netflix", avatar: "RT" },
  { name: "Amanda Brown", quote: "The AI analysis is incredibly detailed. I learned so much about my body language.", company: "Tesla", avatar: "AB" },
  { name: "James Wilson", quote: "Game changer for interview prep. The adaptive difficulty is perfect.", company: "Uber", avatar: "JW" },
  { name: "Lisa Anderson", quote: "I aced my interview thanks to this platform. The practice was exactly what I needed.", company: "Airbnb", avatar: "LA" },
  { name: "Christopher Lee", quote: "The best interview prep tool I've used. The AI feedback is incredibly accurate.", company: "LinkedIn", avatar: "CL" },
  { name: "Maria Garcia", quote: "This platform boosted my confidence tremendously. The feedback is actionable.", company: "Salesforce", avatar: "MG" },
  { name: "Daniel Martinez", quote: "Incredible tool for interview preparation. The AI coaching is spot on.", company: "Oracle", avatar: "DM" },
  { name: "Jennifer Davis", quote: "The practice sessions are realistic and the feedback is incredibly helpful.", company: "IBM", avatar: "JD" },
  { name: "Matthew Thompson", quote: "This platform helped me improve significantly. Highly recommend to everyone.", company: "Adobe", avatar: "MT" },
  { name: "Ashley White", quote: "The AI analysis is thorough and the suggestions are practical. Love it!", company: "Spotify", avatar: "AW" },
  { name: "Ryan Harris", quote: "Best interview prep platform I've tried. The real-time feedback is amazing.", company: "Twitter", avatar: "RH" },
  { name: "Nicole Clark", quote: "The detailed reports helped me understand my interview style better.", company: "Snapchat", avatar: "NC" },
  { name: "Kevin Lewis", quote: "This platform is a must-have for anyone serious about acing interviews.", company: "Pinterest", avatar: "KL" },
  { name: "Rachel Walker", quote: "The AI coaching is incredibly insightful. I learned so much!", company: "Zoom", avatar: "RW" },
  { name: "Brandon Hall", quote: "Outstanding platform. The practice sessions are incredibly realistic.", company: "Slack", avatar: "BH" },
];

export default function LandingPage() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => embla.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [embla]);

  const [users, setUsers] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let u = 0,
      s = 0,
      c = 0;
    const id = setInterval(() => {
      u = Math.min(25000, u + 500);
      s = Math.min(1200000, s + 30000);
      c = Math.min(23, c + 1);
      setUsers(u);
      setSessions(s);
      setScore(c);
    }, 50);
    return () => clearInterval(id);
  }, []);

  // Initialize Unicorn Studio
  useEffect(() => {
    const initUnicornStudio = () => {
      if (typeof window !== "undefined" && window.UnicornStudio && !window.UnicornStudio.isInitialized) {
        if (window.UnicornStudio.init) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      }
    };

    // Check immediately
    initUnicornStudio();

    // Also check after a short delay in case script loads async
    const timeout = setTimeout(initUnicornStudio, 100);

    return () => clearTimeout(timeout);
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add home-page class to body for black background
    document.body.classList.add('home-page');
    document.documentElement.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
      document.documentElement.classList.remove('home-page');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Unicorn Studio Background - Centered in hero section */}
      <Script
        id="unicornstudio-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){
              if(!window.UnicornStudio){
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js";
                i.onload=function(){
                  window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
                };
                (document.head || document.body).appendChild(i)
              }
            }();
          `,
        }}
      />
      
      {/* Header */}
      <header className={`w-full py-4 transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? 'bg-black/70 backdrop-blur-2xl border-b border-white/20 shadow-2xl' 
          : 'bg-black/30 backdrop-blur-xl border-b border-white/10'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-30" />
        <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white cursor-pointer hover:text-gray-300 transition-colors">Devgent AI</h1>
          </Link>
          <nav className="flex flex-col sm:flex-row items-center mt-4 md:mt-0 gap-4">
            <a href="#features" className="text-white hover:text-gray-300 transition-colors">Features</a>
            <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            <a href="/interview-prep" className="text-white hover:text-gray-300 transition-colors">
              Interview Prep </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero / Carousel Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20 bg-black">
        {/* Unicorn Studio Background Effect - Centered, limited to hero section */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <div
            data-us-project="rrqlnTJqQZz0hnC6ZFxZ"
            className="w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        
        {/* Gradient overlay to fade into dark sections and hide watermark */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/95 via-black/80 to-transparent z-[5] pointer-events-none" />
        {/* Additional solid black overlay at bottom to ensure watermark is hidden */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-black z-[6] pointer-events-none" />
        
        {/* Content Layer */}
        <div className="container py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center relative z-10">
          <div>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((s, i) => (
                  <div key={i} className="min-w-0 shrink-0 basis-full pr-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl md:text-5xl font-bold leading-tight text-white"
                    >
                      {s.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mt-4 text-lg text-gray-200"
                    >
                      {s.desc}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline" onClick={() => embla?.scrollPrev()} className="border-gray-600 !text-white hover:bg-gray-800 hover:!text-white bg-transparent">
                Prev
              </Button>
              <Button size="sm" variant="outline" onClick={() => embla?.scrollNext()} className="border-gray-600 !text-white hover:bg-gray-800 hover:!text-white bg-transparent">
                Next
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard">
                <Button size="lg" className="h-12 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 !text-white border-0 font-semibold hover:opacity-90">
                  Get Started
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="h-12 px-6 border-gray-600 !text-white hover:bg-gray-800 hover:!text-white bg-transparent font-semibold">
                  View Dashboard
                </Button>
              </Link>
            </div>

            {/* <div className="mt-8 grid grid-cols-3 gap-6 text-center text-white">
              <Stat label="Active Users" value={users.toLocaleString()} suffix="+" />
              <Stat label="Sessions" value={Math.floor(sessions / 1000).toLocaleString()} suffix="k+" />
              <Stat label="Avg. Score↑" value={score.toString()} suffix="%" />
            </div> */}
          </div>

          {/* Live AI Analysis Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900/90 via-purple-900/30 to-gray-900/90 backdrop-blur-sm shadow-lg overflow-hidden">
              <div className="p-6 relative z-10">
                <h3 className="font-semibold text-white mb-4">Live AI Analysis</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Metric label="Posture" value="92%" color="text-emerald-500" />
                  <Metric label="Eye Contact" value="87%" color="text-blue-500" />
                  <Metric label="Clarity" value="90%" color="text-emerald-500" />
                  <Metric label="Confidence" value="88%" color="text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-16 bg-black px-6 md:px-0 z-10 -mt-32 pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
          <div className="flex flex-wrap justify-center mt-8 gap-6">
            <FeatureCard title="AI Mock Interviews" desc="Experience realistic interview scenarios with our advanced AI." />
            <FeatureCard title="Instant Feedback" desc="Get instant, personalized feedback to improve your performance." />
            <FeatureCard title="Comprehensive Reports" desc="Receive detailed reports highlighting your strengths and weaknesses." />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-20 bg-black px-0 z-10 overflow-hidden">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">What Our Users Say</h2>
          
          {/* Top Row - Scrolls Left */}
          <div className="mb-12 overflow-hidden">
            <div className="flex animate-marquee-left" style={{ width: 'fit-content' }}>
              {/* Duplicate cards for seamless loop */}
              {[...testimonials.slice(0, 10), ...testimonials.slice(0, 10)].map((testimonial, idx) => (
                <div key={`top-${idx}`} className="flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolls Right */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-right" style={{ width: 'fit-content' }}>
              {/* Duplicate cards for seamless loop */}
              {[...testimonials.slice(10, 20), ...testimonials.slice(10, 20)].map((testimonial, idx) => (
                <div key={`bottom-${idx}`} className="flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-16 bg-black px-6 md:px-0 z-10">
        <Contect />
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-black text-white text-center z-10">
        <p>© 2024 Devgent AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Components
function Stat({ label, value, suffix }) {
  const out = useMemo(() => `${value}${suffix ?? ""}`, [value, suffix]);
  return (
    <div>
      <div className="text-2xl font-bold">{out}</div>
      <div className="text-xs text-gray-300">{label}</div>
    </div>
  );
}

function Metric({ label, value, color }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm px-3 py-2">
      <span className="text-gray-200">{label}</span>
      <span className={"font-semibold " + color}>{value}</span>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="w-full md:w-1/3 bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, quote, company, avatar }) {
  return (
    <Card className="w-80 min-w-[320px] bg-gradient-to-br from-gray-800/90 via-gray-800/70 to-gray-900/90 backdrop-blur-sm border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
              {avatar}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
              "{quote}"
            </p>
            <div>
              <h4 className="text-white font-semibold text-base">{name}</h4>
              <p className="text-gray-400 text-sm mt-1">{company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
