
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'lg';
  onClick?: () => void;
  withArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  externalLink?: boolean;
}

const CTAButton = ({
  children,
  className,
  variant = 'primary',
  size = 'default',
  onClick,
  withArrow = false,
  type = 'button',
  href,
  externalLink = false,
}: CTAButtonProps) => {
  
  const getButtonStyle = () => {
    switch(variant) {
      case 'primary':
        return "bg-blkr-gold text-black hover:bg-blkr-gold/90";
      case 'secondary':
        return "bg-transparent text-blkr-gold border border-blkr-gold hover:bg-blkr-gold/10";
      case 'outline':
        return "bg-transparent text-blkr-white border border-blkr-white hover:bg-white/10";
      default:
        return "bg-blkr-gold text-black hover:bg-blkr-gold/90";
    }
  };

  const getSizeStyle = () => {
    switch(size) {
      case 'lg':
        return "text-lg py-6 px-8";
      default:
        return "py-4 px-6";
    }
  };

  const buttonContent = (
    <>
      {children}
      {withArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );
  
  const buttonClasses = cn(
    "font-medium rounded-md transition-all duration-300 flex items-center gap-2",
    getButtonStyle(),
    getSizeStyle(),
    className
  );
  
  // If it's an external link
  if (href && externalLink) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }
  
  // If it's an internal link
  if (href && !externalLink) {
    return (
      <Link 
        to={href}
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }
  
  // If it's a regular button
  return (
    <Button 
      onClick={onClick}
      className={buttonClasses}
      type={type}
    >
      {buttonContent}
    </Button>
  );
};

export default CTAButton;
