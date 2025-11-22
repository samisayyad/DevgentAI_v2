"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Script from "next/script";
import { FaGithub } from "react-icons/fa";
import {
  ArrowUpRight,
  BrainCircuit,
  Gauge,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Contect from "./_components/Contect";
import SphereImageGrid from "@/components/ui/img-sphere";
import {
  fadeInLeft,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/utils/motion";

const slides = [
  {
    title: "Master interviews with cinematic precision",
    desc: "Live body language, speech, and sentiment analysis with instant coaching loops powered by Devgent AI.",
  },
  {
    title: "Practice across 15+ high-stakes domains",
    desc: "Tailored technical, behavioral, and case interview paths that adapt to your performance in real time.",
  },
];

const services = [
  {
    title: "AI Question Generation",
    description: "Design bespoke interview flows with adaptive prompts and branded AI personas that feel human.",
    icon: BrainCircuit,
  },
  {
    title: "Speech Analysis",
    description: "Surface micro-expression, tone, and pacing analytics that quantify candidate readiness instantly.",
    icon: Gauge,
  },
  {
    title: "Behavioural Analysis",
    description: "Deploy collaborative review loops, smart reminders, and auto-generated scorecards at scale.",
    icon: Workflow,
  },
  {
    title: "Secure Delivery",
    description: "Enterprise-grade privacy with role-based access, encrypted sessions, and compliance guardrails.",
    icon: ShieldCheck,
  },
];

const portfolioProjects = [
  {
    title: "AI Mock Interviews",
    category: "",
    description: "Experience realistic interview scenarios with our advanced AI.",
    media:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Instant Feedback",
    category: "",
    description: "Get instant, personalized feedback to improve your performance.",
    media:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Comprehensive Reports",
    category: "",
    description: "Receive detailed reports highlighting your strengths and weaknesses.",
    media:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80",
  },
];

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    },
    text: "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@michaelchen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    text: "The feedback was spot on and helped me improve my answers. Highly recommend this service!",
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyrodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
    text: "This platform transformed my interview preparation. The real-time feedback is invaluable.",
  },
  {
    author: {
      name: "David Kim",
      handle: "@davidkim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    text: "Best investment I've made for my career. The AI coaching is incredibly accurate.",
  },
  {
    author: {
      name: "Jessica Williams",
      handle: "@jessicawilliams",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    text: "The practice sessions helped me land my dream job. Couldn't be happier!",
  },
  {
    author: {
      name: "Robert Taylor",
      handle: "@roberttaylor",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    },
    text: "Outstanding platform. The detailed reports helped me identify my weaknesses.",
  },
  {
    author: {
      name: "Amanda Brown",
      handle: "@amandabrown",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    text: "The AI analysis is incredibly detailed. I learned so much about my body language.",
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jameswilson",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80",
    },
    text: "Game changer for interview prep. The adaptive difficulty is perfect.",
  },
  {
    author: {
      name: "Lisa Anderson",
      handle: "@lisaanderson",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    },
    text: "I aced my interview thanks to this platform. The practice was exactly what I needed.",
  },
  {
    author: {
      name: "Christopher Lee",
      handle: "@christopherlee",
      avatar: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&w=150&q=80",
    },
    text: "The best interview prep tool I've used. The AI feedback is incredibly accurate.",
  },
  {
    author: {
      name: "Maria Garcia",
      handle: "@mariagarcia",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
    },
    text: "This platform boosted my confidence tremendously. The feedback is actionable.",
  },
  {
    author: {
      name: "Daniel Martinez",
      handle: "@danielmartinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    text: "Incredible tool for interview preparation. The AI coaching is spot on.",
  },
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    },
    text: "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@michaelchen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    text: "The feedback was spot on and helped me improve my answers. Highly recommend this service!",
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyrodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
    text: "This platform transformed my interview preparation. The real-time feedback is invaluable.",
  },
  {
    author: {
      name: "David Kim",
      handle: "@davidkim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    text: "Best investment I've made for my career. The AI coaching is incredibly accurate.",
  },
  {
    author: {
      name: "Jessica Williams",
      handle: "@jessicawilliams",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    text: "The practice sessions helped me land my dream job. Couldn't be happier!",
  },
  {
    author: {
      name: "Robert Taylor",
      handle: "@roberttaylor",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    },
    text: "Outstanding platform. The detailed reports helped me identify my weaknesses.",
  },
  {
    author: {
      name: "Amanda Brown",
      handle: "@amandabrown",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    text: "The AI analysis is incredibly detailed. I learned so much about my body language.",
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jameswilson",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80",
    },
    text: "Game changer for interview prep. The adaptive difficulty is perfect.",
  },
  {
    author: {
      name: "Lisa Anderson",
      handle: "@lisaanderson",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    },
    text: "I aced my interview thanks to this platform. The practice was exactly what I needed.",
  },
  {
    author: {
      name: "Christopher Lee",
      handle: "@christopherlee",
      avatar: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&w=150&q=80",
    },
    text: "The best interview prep tool I've used. The AI feedback is incredibly accurate.",
  },
  {
    author: {
      name: "Maria Garcia",
      handle: "@mariagarcia",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
    },
    text: "This platform boosted my confidence tremendously. The feedback is actionable.",
  },
  {
    author: {
      name: "Daniel Martinez",
      handle: "@danielmartinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    text: "Incredible tool for interview preparation. The AI coaching is spot on.",
  },
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    },
    text: "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@michaelchen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    text: "The feedback was spot on and helped me improve my answers. Highly recommend this service!",
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyrodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
    text: "This platform transformed my interview preparation. The real-time feedback is invaluable.",
  },
  {
    author: {
      name: "David Kim",
      handle: "@davidkim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    text: "Best investment I've made for my career. The AI coaching is incredibly accurate.",
  },
  {
    author: {
      name: "Jessica Williams",
      handle: "@jessicawilliams",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    text: "The practice sessions helped me land my dream job. Couldn't be happier!",
  },
  {
    author: {
      name: "Robert Taylor",
      handle: "@roberttaylor",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    },
    text: "Outstanding platform. The detailed reports helped me identify my weaknesses.",
  },
  {
    author: {
      name: "Amanda Brown",
      handle: "@amandabrown",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    text: "The AI analysis is incredibly detailed. I learned so much about my body language.",
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jameswilson",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80",
    },
    text: "Game changer for interview prep. The adaptive difficulty is perfect.",
  },
  {
    author: {
      name: "Lisa Anderson",
      handle: "@lisaanderson",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    },
    text: "I aced my interview thanks to this platform. The practice was exactly what I needed.",
  },
  {
    author: {
      name: "Christopher Lee",
      handle: "@christopherlee",
      avatar: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&w=150&q=80",
    },
    text: "The best interview prep tool I've used. The AI feedback is incredibly accurate.",
  },
  {
    author: {
      name: "Maria Garcia",
      handle: "@mariagarcia",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
    },
    text: "This platform boosted my confidence tremendously. The feedback is actionable.",
  },
  {
    author: {
      name: "Daniel Martinez",
      handle: "@danielmartinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    text: "Incredible tool for interview preparation. The AI coaching is spot on.",
  },
];

const sphereImages = testimonials.concat(testimonials).map((testimonial, index) => ({
  id: (index + 1).toString(),
  src: testimonial.author.avatar,
  alt: testimonial.author.name,
  title: testimonial.author.name,
  description: testimonial.text
}));

// const pricingPlans = [
//   {
//     title: "Starter",
//     price: "$39",
//     cadence: "per month",
//     popular: false,
//     features: [
//       "3 AI interview templates",
//       "Baseline sentiment analytics",
//       "Weekly performance snapshots",
//     ],
//   },
//   {
//     title: "Pro",
//     price: "$79",
//     cadence: "per month",
//     popular: true,
//     features: [
//       "Unlimited interview studios",
//       "Advanced signal intelligence",
//       "Collaborative reviewer workspace",
//       "Priority success coach",
//     ],
//   },
//   {
//     title: "Enterprise",
//     price: "Let's talk",
//     cadence: "custom plan",
//     popular: false,
//     features: [
//       "Dedicated AI strategist",
//       "SSO & role-based permissions",
//       "Onboarding & enablement playbooks",
//     ],
//   },
// ];

// const heroStats = [
//   { label: "Elevated candidates", value: "25K+" },
//   { label: "Sessions coached", value: "1.2M" },
//   { label: "Avg. score lift", value: "+23%" },
// ];

export default function LandingPage() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => embla.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [embla]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.add("home-page");
    document.documentElement.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
      document.documentElement.classList.remove("home-page");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"
        style={{ scaleX: scrollProgress }}
      />

      <Header scrolled={scrolled} />

      <main className="relative overflow-hidden">
        <HeroSection emblaRef={emblaRef} embla={embla} />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        {/* <PricingSection /> */}
        <ContactSection />
      </main>
    </div>
  );
}

function Header({ scrolled }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_30px_80px_rgba(58,42,255,0.25)]"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10" />
      <div className="container mx-auto flex items-center justify-between px-6 md:px-16 py-5">
        <Link href="/">
          <span className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Devgent AI
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-[0.18em] text-gray-300">
          <a className="hover:text-white transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
          <a className="hover:text-white transition-colors" href="#work">
            Case Studies
          </a>
          <a className="hover:text-white transition-colors" href="#testimonials">
            Testimonials
          </a>
          <a className="hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/interview-prep" className="hidden md:flex">
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/10">
              Interview Prep
            </Button>
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ emblaRef, embla }) {
  const initUnicornStudio = () => {
    // Unicorn Studio initializes automatically when the script loads and finds data-us-project attributes
    if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
      window.UnicornStudio.isInitialized = true;
    }
  };

  useEffect(() => {
    initUnicornStudio();

    // Also check after a short delay in case script loads async
    const timeout = setTimeout(initUnicornStudio, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center pt-28 md:pt-40 overflow-visible">
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
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js";
                i.onload=function(){
                  window.UnicornStudio.isInitialized=!0
                };
                (document.head || document.body).appendChild(i)
              }
            }();
          `,
        }}
      />
      {/* Unicorn Studio background - positioned behind content but above bg */}
      <div
        className="pointer-events-none absolute z-[-10]"
        data-us-project="rrqlnTJqQZz0hnC6ZFxZ"
        style={{ width: "1440px", height: "900px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#070213]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(172,167,255,0.15)_0%,_rgba(25,16,56,0.4)_55%,_rgba(6,2,20,0.6)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.25)_0%,_rgba(115,111,255,0.08)_28%,transparent_58%)] mix-blend-screen opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 top-1/3 h-48 bg-[radial-gradient(circle_at_center,_rgba(210,203,255,0.4),_rgba(12,7,26,0))] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 inset-x-0 h-72 bg-gradient-to-b from-transparent via-black/60 to-black" />
        <div className="pointer-events-none absolute -bottom-72 inset-x-0 h-[28rem] bg-black/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      </div>
      <div className="container mx-auto grid gap-16 px-6 md:px-16 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <motion.div
          variants={staggerContainer(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <motion.span
            variants={fadeInUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70"
          >
            <Sparkles className="h-3.5 w-3.5" /> Interview simulation OS
          </motion.span>

          <div className="mt-6 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <motion.div
                  key={slide.title}
                  className="min-w-0 shrink-0 basis-full pr-10"
                  variants={fadeInUp(index * 0.08)}
                >
                  <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="mt-6 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
                    {slide.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeInUp(0.2)}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/dashboard" className="sm:w-auto">
              <Button className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-10 text-base font-semibold text-white shadow-[0_30px_60px_rgba(67,56,202,0.35)]">
                Start your Interview
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/dashboard" className="sm:w-auto">
              <Button
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-transparent px-10 text-base font-semibold text-white/80 hover:border-white/40 hover:text-white"
              >
                View dashboard
              </Button>
            </Link>
          </motion.div>

          {/* <motion.div
            variants={fadeInUp(0.35)}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
                <div className="text-2xl font-semibold tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.28em] text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div> */}

          <motion.div
            variants={fadeInUp(0.45)}
            className="mt-10 flex gap-3"
          >
            <Button
              size="sm"
              variant="outline"
              onClick={() => embla?.scrollPrev()}
              className="h-12 w-12 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/15"
            >
              ←
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => embla?.scrollNext()}
              className="h-12 w-12 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/15"
            >
              →
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.22)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <motion.div
            variants={scaleIn(0.15)}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-purple-500/10 to-transparent p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-x-12 top-0 h-52 rounded-full bg-gradient-to-b from-purple-500/30 via-transparent to-transparent blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span className="font-medium">Session diagnostics</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" /> Live
                </span>
              </div>
              <div className="mt-6 grid gap-4">
                <Metric label="Posture alignment" value="92%" color="text-emerald-400" />
                <Metric label="Tone clarity" value="88%" color="text-blue-400" />
                <Metric label="Response relevance" value="94%" color="text-purple-400" />
                <Metric label="Confidence score" value="90%" color="text-amber-300" />
              </div>
              <motion.div
                variants={fadeInUp(0.3)}
                className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                  <span>Behavioural Analysis</span>
                  <span>Realtime</span>
                </div>
                <div className="mt-4 h-24 w-full rounded-xl bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.35),_transparent_70%)]" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative py-20 md:py-32"
      variants={staggerContainer(0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="container mx-auto grid items-center gap-12 px-6 md:px-16 lg:grid-cols-2">
        <motion.div variants={fadeInUp(0)} className="relative z-10">
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">
            About
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-white">
            We orchestrate unforgettable AI-led interview experiences.
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed">
            Devgent AI blends cinematic motion design with production-grade machine
            learning. Every interaction is orchestrated to feel distinctly human—while our
            analytics surface the signals that hiring teams care about most.
          </p>
          <div className="mt-8 grid gap-4">
            {["Adaptive flows tuned in minutes", "Collaborative playback with moment markers", "Privacy-first infrastructure with global reach"].map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp(0.15)}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/40 to-indigo-500/40">
                  <Layers className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm md:text-base text-white/70">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeInLeft(0.15)} className="relative z-10">
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent p-1"
          >
            <div className="h-full rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3)_0%,_rgba(24,24,27,0.8)_60%,_rgba(0,0,0,1)_100%)] p-10">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                    Studio timeline
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    Frame-by-frame Interview Analysis.
                  </h3>
                </div>
                <div className="mt-10 grid gap-4 text-sm text-white/60">
                  {[
                    "Realtime speech-to-insight overlays",
                    "Highlight reels auto-synced to transcripts",
                    "Give instant Feedback",
                  ].map((line) => (
                    <div
                      key={line}
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="relative py-20 md:py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer(0.16)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_65%)]" />
      <div className="container mx-auto px-6 md:px-16">
        <motion.div variants={fadeInUp(0)} className="text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">
            Services
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
            Modular services that scale with your ambition.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/60">
            Tailored AI interview environments, crafted to deliver Behavioural analysis,
            tight Questions Generation, and actionable data with every session.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeInUp(index * 0.08)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.18, 0.75, 0.2, 1] }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:via-purple-500/10 group-hover:to-transparent" />
              <div className="relative z-10 flex h-full flex-col">
                <service.icon className="h-8 w-8 text-white/80" />
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 text-sm text-white/60">
                  
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function PortfolioSection() {
  return (
    <motion.section
      id="work"
      className="relative py-20 md:py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer(0.18)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="container mx-auto px-6 md:px-16">
        <motion.div variants={fadeInUp(0)} className="text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">
            Features
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
            Signature builds engineered for scale.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/60">
            A selection of recent studios built with the Radison philosophy—rich
            interactions, effortless motion, and measurable outcomes.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeInUp(index * 0.1)}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(12,12,15,0.2) 0%, rgba(12,12,15,0.85) 75%), url(${project.media})` }}
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-[0.4em] text-white/60">
                  {project.category}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
                  
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      className="relative py-20 md:py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.28 }}
      variants={staggerContainer(0.14)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(167,139,250,0.2),_transparent_60%)]" />
      {/* Header container */}
      <div className="container mx-auto px-6 md:px-16">
        <motion.div variants={fadeInUp(0)} className="text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">Gallery</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">Explore our visual journey.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base text-white/60"></p>
        </motion.div>
      </div>

      {/* Sphere Image Grid */}
      <div className="mt-16 flex justify-center">
        <motion.div variants={fadeInUp(0.1)}>
          <SphereImageGrid
            images={sphereImages}
            containerSize={600}
            sphereRadius={250}
            autoRotate={true}
            autoRotateSpeed={0.2}
            dragSensitivity={0.8}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// function PricingSection() {
//   return (
//     <motion.section
//       id="pricing"
//       className="relative py-20 md:py-32"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={staggerContainer(0.16)}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
//       <div className="container mx-auto px-6 md:px-16">
//         <motion.div variants={fadeInUp(0)} className="text-center">
//           <span className="text-xs uppercase tracking-[0.4em] text-white/60">
//             Pricing
//           </span>
//           <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
//             Flexible plans built for relentless iteration.
//           </h2>
//           <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/60">
//             Launch today, scale tomorrow. Every plan includes cinematic motion presets,
//             on-brand theming, and signal intelligence out of the box.
//           </p>
//         </motion.div>

//         <div className="mt-16 grid gap-8 md:grid-cols-3">
//           {pricingPlans.map((plan, index) => (
//             <motion.div
//               key={plan.title}
//               variants={fadeInUp(index * 0.08)}
//               whileHover={{ y: -10, scale: plan.popular ? 1.05 : 1.03 }}
//               transition={{ duration: 0.4, ease: [0.18, 0.75, 0.2, 1] }}
//               className={`relative overflow-hidden rounded-[32px] border border-white/10 p-8 backdrop-blur-xl ${
//                 plan.popular
//                   ? "bg-gradient-to-br from-blue-500/25 via-purple-500/15 to-transparent shadow-[0_30px_80px_rgba(67,56,202,0.35)]"
//                   : "bg-white/5"
//               }`}
//             >
//               {plan.popular && (
//                 <motion.span
//                   initial={{ opacity: 0, y: -8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
//                   className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white"
//                 >
//                   Most loved
//                 </motion.span>
//               )}
//               <div className="text-sm uppercase tracking-[0.3em] text-white/60">
//                 {plan.title}
//               </div>
//               <div className="mt-6 text-4xl font-semibold text-white">
//                 {plan.price}
//               </div>
//               <div className="text-xs uppercase tracking-[0.3em] text-white/50">
//                 {plan.cadence}
//               </div>
//               <div className="mt-8 space-y-4">
//                 {plan.features.map((feature) => (
//                   <div
//                     key={feature}
//                     className="flex items-center gap-3 text-sm text-white/70"
//                   >
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
//                       <Sparkles className="h-4 w-4 text-white" />
//                     </div>
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>
//               <Button
//                 className={`mt-10 w-full rounded-full border-white/20 text-white ${
//                   plan.popular
//                     ? "bg-white text-black hover:bg-white/90"
//                     : "bg-white/10 hover:bg-white/20"
//                 }`}
//               >
//                 Choose plan
//               </Button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="relative py-20 md:py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer(0.18)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(37,99,235,0.2),_transparent_65%)]" />
      <div className="container mx-auto px-6 md:px-16">
        <motion.div variants={fadeInUp(0)} className="text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/60">
            Contact
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
            Ready to orchestrate your AI Interview?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/60">
            Tell us about your next hiring moment. We will assemble a DevgentAI-inspired
            experience tuned to your brand voice and talent goals.
          </p>
        </motion.div>
        <div className="mt-16">
          <Contect />
        </div>
      </div>
    </motion.section>
  );
}

function Metric({ label, value, color }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm">
      <span className="text-white/60">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}
