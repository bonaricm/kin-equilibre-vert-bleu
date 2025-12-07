import { cn } from "@/lib/utils";

interface BalanceLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const BalanceLogo = ({ className, size = "md" }: BalanceLogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(sizeClasses[size], "animate-float", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cercle extérieur - représente l'équilibre global */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#gradientStroke)"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      
      {/* Silhouette stylisée en position d'équilibre */}
      <g transform="translate(50, 50)">
        {/* Tête */}
        <circle
          cx="0"
          cy="-25"
          r="8"
          fill="url(#gradientFill)"
        />
        
        {/* Corps - ligne centrale */}
        <path
          d="M0 -17 L0 10"
          stroke="url(#gradientFill)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Bras étendus pour l'équilibre */}
        <path
          d="M-20 -5 Q-10 -8 0 -5 Q10 -8 20 -5"
          stroke="url(#gradientFill)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Jambes en position stable */}
        <path
          d="M0 10 L-12 30"
          stroke="url(#gradientFill)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M0 10 L12 30"
          stroke="url(#gradientFill)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      
      {/* Ondes d'équilibre */}
      <ellipse
        cx="50"
        cy="82"
        rx="25"
        ry="4"
        fill="url(#gradientFill)"
        opacity="0.2"
      />
      <ellipse
        cx="50"
        cy="86"
        rx="18"
        ry="3"
        fill="url(#gradientFill)"
        opacity="0.15"
      />
      
      {/* Points d'équilibre vestibulaire */}
      <circle cx="30" cy="50" r="2" fill="url(#gradientFill)" opacity="0.4" />
      <circle cx="70" cy="50" r="2" fill="url(#gradientFill)" opacity="0.4" />
      
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(152, 45%, 50%)" />
          <stop offset="100%" stopColor="hsl(145, 40%, 40%)" />
        </linearGradient>
        <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(152, 45%, 50%)" />
          <stop offset="50%" stopColor="hsl(148, 42%, 45%)" />
          <stop offset="100%" stopColor="hsl(145, 40%, 40%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BalanceLogo;
