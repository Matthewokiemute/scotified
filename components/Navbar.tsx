"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const showMenuFunc = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <span className="text-2xl font-medium">
          Scotti<span className="font-semibold text-green-50">fied.</span>
        </span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Contact Us"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* <!-- MOBILE SCREEN --> */}
      <div className="fixed top-8 right-8 z-50">
        {!showMobileMenu ? (
          <button onClick={showMenuFunc}>
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          </button>
        ) : (
          <button onClick={showMenuFunc}>
            <Image
              src="close.svg"
              alt="close"
              width={32}
              height={32}
              className="inline-block text-black cursor-pointer lg:hidden"
            />
          </button>
        )}
      </div>
      {showMobileMenu && (
        <div className="bg-green-90 h-[100vh] fixed inset-0">
          <div className="h-full grid place-items-center pt-20">
            <ul className="h-full gap-8 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-20 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
              <Button
              type="button"
              title="Start Your Journey Now"
              variant="btn_green"
            />
            <Button
              type="button"
              title="Request Consultation"
              //   icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
            </ul>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
