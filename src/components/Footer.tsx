'use client';

import React, { useState } from 'react';

type FooterGroup = { title: string; links?: { label: string; href: string }[] };

const footerData = {
  email: "info@sensible4.fi",
  socials: [
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "YouTube", href: "#", icon: "youtube" },
    { name: "Instagram", href: "#", icon: "instagram" },
  ],
  quick: [
    { label: "Contact Us", href: "#" },
    { label: "Deployments", href: "#" },
    { label: "Privacy", href: "#" },
  ],
  blurb:
    "Sensible 4 – Self-Driving software technology start-up from Finland focusing on autonomous driving for all weather conditions | © 2022 Sensible 4 Oy. All rights reserved.",
  groups: [
    { title: "Technology" },
    { title: "Product", links: [
      { label: "DAWN™", href: "#" },
      { label: "DAWN™ for Industrial Transportation", href: "#" },
    ]},
    { title: "Projects" },
    { title: "Company", links: [
      { label: "Sensible Approach", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Media Kit", href: "#" },
    ]},
    { title: "For Investors", links: [
      { label: "Commercially Ready", href: "#" },
      { label: "Automated Driving Platform", href: "#" },
    ]},
    { title: "Insights" },
    { title: "Careers", links: [{ label: "Employee Stories", href: "#" }]},
    { title: "Contact Us", links: [{ label: "Contact Us", href: "#" }]},
    { title: "日本語", links: [
      { label: "テクノロジー", href: "#" },
      { label: "産業車両専用DAWN™", href: "#" },
    ]},
  ] as FooterGroup[],
};

// Social Media Icon Components
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.017 0C8.396 0 7.989.016 6.756.071 5.526.126 4.72.332 4.022.629a5.888 5.888 0 0 0-2.126 1.384A5.888 5.888 0 0 0 .512 4.139C.214 4.837.008 5.643-.047 6.873-.102 8.106-.118 8.513-.118 12.134s.016 4.028.071 5.261c.055 1.23.261 2.036.558 2.734a5.888 5.888 0 0 0 1.384 2.126 5.888 5.888 0 0 0 2.126 1.384c.698.297 1.504.503 2.734.558 1.233.055 1.64.071 5.261.071s4.028-.016 5.261-.071c1.23-.055 2.036-.261 2.734-.558a5.888 5.888 0 0 0 2.126-1.384 5.888 5.888 0 0 0 1.384-2.126c.297-.698.503-1.504.558-2.734.055-1.233.071-1.64.071-5.261s-.016-4.028-.071-5.261c-.055-1.23-.261-2.036-.558-2.734a5.888 5.888 0 0 0-1.384-2.126A5.888 5.888 0 0 0 19.728.629C19.03.332 18.224.126 16.994.071 15.761.016 15.354 0 11.733 0H12.017zm-.284 2.165c.405 0 .753.007 1.077.019 3.632.166 5.414 1.954 5.58 5.58.012.324.019.672.019 1.077s-.007.753-.019 1.077c-.166 3.632-1.954 5.414-5.58 5.58-.324.012-.672.019-1.077.019s-.753-.007-1.077-.019c-3.632-.166-5.414-1.954-5.58-5.58-.012-.324-.019-.672-.019-1.077s.007-.753.019-1.077c.166-3.632 1.954-5.414 5.58-5.58.324-.012.672-.019 1.077-.019zm0 1.835a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm0 6.267a2.467 2.467 0 1 1 0-4.934 2.467 2.467 0 0 1 0 4.934zm4.833-6.4a.892.892 0 1 0 0-1.784.892.892 0 0 0 0 1.784z"/>
  </svg>
);

const iconMap = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stub handler as requested
    console.log('Newsletter signup:', { email, agreeToPrivacy });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Brand/Contact */}
          <div className="lg:col-span-3 space-y-6">
            {/* Brand Logo */}
            <div>
              <h2 className="text-3xl font-bold lowercase">sensible<sup className="text-lg">4</sup></h2>
            </div>
            
            {/* Email */}
            <div>
              <a 
                href={`mailto:${footerData.email}`}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                {footerData.email}
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {footerData.socials.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Follow us on ${social.name}`}
                    className="text-primary-foreground hover:text-primary-foreground/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded p-1"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
            
            {/* Quick Links */}
            <div className="space-y-2">
              {footerData.quick.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground hover:text-primary-foreground/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded block"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
            
            {/* Company Blurb */}
            <div className="text-sm text-primary-foreground/80 leading-relaxed hidden lg:block">
              {footerData.blurb}
            </div>
          </div>
          
          {/* Middle Columns - Navigation */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {footerData.groups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <h3 className="font-semibold text-primary-foreground">{group.title}</h3>
                  {group.links && (
                    <ul className="space-y-2">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Newsletter */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Get our latest updates</h3>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email-input" className="sr-only">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="EMAIL ADDRESS"
                      required
                      className="w-full bg-transparent border-0 border-b border-primary-foreground text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-primary-foreground/80 pb-2 text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <input
                      id="privacy-checkbox"
                      type="checkbox"
                      checked={agreeToPrivacy}
                      onChange={(e) => setAgreeToPrivacy(e.target.checked)}
                      className="mt-1 h-4 w-4 text-primary-foreground focus:ring-primary-foreground border-primary-foreground rounded bg-transparent"
                      required
                    />
                    <label htmlFor="privacy-checkbox" className="text-sm text-primary-foreground/80">
                      I agree with the{' '}
                      <a 
                        href="#" 
                        className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                      >
                        privacy policy
                      </a>
                    </label>
                  </div>
                  
                  <div className="text-sm text-primary-foreground/70">
                    <a 
                      href="#" 
                      className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                    >
                      Read our privacy policy here
                    </a>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary-foreground text-primary px-6 py-2 text-sm font-medium hover:bg-primary-foreground/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Company Blurb for mobile */}
        <div className="text-sm text-primary-foreground/80 leading-relaxed mt-8 lg:hidden">
          {footerData.blurb}
        </div>
      </div>
      
      {/* Thin Divider Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary-foreground/20"></div>
      </div>
      
      {/* Oversized Wordmark Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold lowercase text-primary-foreground/10">
          sensible
        </div>
      </div>
      
      {/* Bottom Legal Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 text-sm text-primary-foreground/70">
          <div>
            © 2022 Sensible 4 Oy. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a 
              href="#" 
              className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded"
            >
              Deployments
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
