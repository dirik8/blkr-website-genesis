
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'lg';
  onClick?: () => void;
  withArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const CTAButton = ({
  children,
  className,
  variant = 'primary',
  size = 'default',
  onClick,
  withArrow = false,
  type = 'button',
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

  return (
    <Button 
      onClick={onClick}
      className={cn(
        "font-medium rounded-md transition-all duration-300 flex items-center gap-2",
        getButtonStyle(),
        getSizeStyle(),
        className
      )}
      type={type}
    >
      {children}
      {withArrow && <ArrowRight className="w-4 h-4" />}
    </Button>
  );
};

export default CTAButton;
