'use client'
import React, { useState, useEffect } from "react";
import BrandLogo from "../logo";
import HeaderMenu from "./children/HeaderMenu";
import CartTrigger from "@/site-ui/cart/CartTrigger";
import SideBarTrigger from "../sidebar";
import CommonSpacingLayout from "../layouts/CommonSpacingLayout";

const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
     
      if (currentScrollY === 0) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`w-full bg-brand-primary fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex flex-row items-center justify-between px-4 ">
        <BrandLogo />
        <div className="w-full flex-row lg:flex items-center justify-center hidden">
          <div className="flex flex-row items-center space-x-10">
            <HeaderMenu />
          </div>
        </div>
        <CartTrigger />
        <SideBarTrigger />
      </div>
    </div>
  );
};

export default MainHeader;