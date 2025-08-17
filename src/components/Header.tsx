/**
 * Header Component with Hero UI Navbar
 * 
 * Installation command:
 * npx heroui-cli@latest add navbar
 * 
 * Features:
 * - Hide on scroll using shouldHideOnScroll prop
 * - Hamburger menu for mobile/tablet (< 1024px)
 * - Full navigation menu for desktop (≥ 1024px)
 * - Disabled animations for menu toggle
 * - Responsive design
 */

"use client";

import React from 'react';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from '@heroui/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Center navigation items
  const centerMenuItems = [
    { name: "Technology", href: "#technology" },
    { name: "Product", href: "#product" },
    { name: "Company", href: "#company" },
    { name: "Projects", href: "#projects" },
    { name: "Drive-by-Wire", href: "#drive-by-wire" },
  ];

  // Right side items
  const rightMenuItems = [
    { name: "Careers", href: "#careers" },
  ];

  // All items for mobile menu
  const allMenuItems = [
    ...centerMenuItems,
    ...rightMenuItems,
    { name: "Contact Us", href: "#contact-us" }
  ];

  return (
    <Navbar 
      shouldHideOnScroll 
      disableAnimation
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="px-4"
      classNames={{
        wrapper: "px-0 max-w-none",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      {/* Logo/Brand - Left Side */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Image
            src="/Layer 2.png"
            alt="Sensible Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Center Navigation Menu - Desktop Only */}
      <NavbarContent className="hidden lg:flex gap-8 px-8" justify="center">
        {centerMenuItems.map((item, index) => (
          <NavbarItem key={`center-${item.name}-${index}`}>
            <Link 
              color="foreground" 
              href={item.href}
              className="font-semibold hover:text-primary-500 transition-colors px-2"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Items - Desktop Only */}
      <NavbarContent className="hidden lg:flex gap-4" justify="end">
        {rightMenuItems.map((item, index) => (
          <NavbarItem key={`right-${item.name}-${index}`}>
            <Link 
              color="foreground" 
              href={item.href}
              className="font-semibold hover:text-primary-500 transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button 
            as={Link}
            color="primary"
            href="#contact-us"
            variant="solid"
            className="font-bold"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile/Tablet Menu Toggle - positioned on the right */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile/Tablet Navigation Menu - Centered Content */}
      <NavbarMenu className="pt-6">
        <div className="flex flex-col items-center space-y-4">
          {allMenuItems.map((item, index) => (
            <NavbarMenuItem key={`menu-${item.name}-${index}`} className="w-full flex justify-center">
              {item.name === "Contact Us" ? (
                <Button 
                  as={Link}
                  color="primary"
                  href={item.href}
                  variant="solid"
                  className="font-bold"
                  size="lg"
                >
                  {item.name}
                </Button>
              ) : (
                <Link
                  color="foreground"
                  className="text-lg py-2 text-center font-semibold hover:text-primary-500 transition-colors"
                  href={item.href}
                  size="lg"
                >
                  {item.name}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
