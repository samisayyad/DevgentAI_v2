"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";

const Footer = () => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  const handleLinkClick = (e, href) => {
    // Public routes that don't require login
    const publicRoutes = ["/", "/sign-in", "/sign-up"];
    const isPublicRoute = publicRoutes.includes(href);

    // If not logged in and trying to access protected route, redirect to sign-in
    if (!isLoaded) return; // Wait for auth to load
    
    if (!isSignedIn && !isPublicRoute && href !== "#") {
      e.preventDefault();
      router.push("/sign-in");
    }
  };

  const FooterLink = ({ href, children, ...props }) => {
    if (href === "#") {
      return (
        <a
          href={href}
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        onClick={(e) => handleLinkClick(e, href)}
        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        {...props}
      >
        {children}
      </Link>
    );
  };

  return (
    <footer className={`w-full border-t ${
      isHomePage 
        ? 'bg-black border-gray-800' 
        : 'bg-background border-border'
    }`}>
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Left Section - Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                AI
              </div>
              <h3 className={`text-2xl font-bold ${
                isHomePage ? 'text-white' : 'text-foreground'
              }`}>
                Devgent AI
              </h3>
            </div>
            <p className={`text-sm leading-relaxed ${
              isHomePage ? 'text-gray-400' : 'text-muted-foreground'
            }`}>
              AI-powered interview practice with real-time body language, speech, and emotion analysis.
            </p>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Column */}
            <div>
              <h4 className={`font-semibold mb-5 text-sm tracking-wide uppercase ${
                isHomePage ? 'text-gray-300' : 'text-foreground'
              }`}>
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <FooterLink href="/">Home</FooterLink>
                </li>
                <li>
                  <FooterLink href="/interview-prep">Practice</FooterLink>
                </li>
                <li>
                  <FooterLink href="/dashboard">Dashboard</FooterLink>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className={`font-semibold mb-5 text-sm tracking-wide uppercase ${
                isHomePage ? 'text-gray-300' : 'text-foreground'
              }`}>
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <FooterLink href="#careers">Careers</FooterLink>
                </li>
                <li>
                  <FooterLink href="#privacy">Privacy</FooterLink>
                </li>
                <li>
                  <FooterLink href="#terms">Terms</FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className={`border-t pt-8 ${
          isHomePage ? 'border-gray-800' : 'border-border'
        }`}>
          <p className={`text-xs text-center tracking-wide ${
            isHomePage ? 'text-gray-500' : 'text-muted-foreground'
          }`}>
            © 2025 Devgent AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
