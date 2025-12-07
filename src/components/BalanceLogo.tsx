import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-kinequilibre.jpg";

interface BalanceLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  useImage?: boolean;
}

const BalanceLogo = ({ className, size = "md", useImage = true }: BalanceLogoProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  };

  if (useImage) {
    return (
      <img
        src={logoImage}
        alt="Logo Kiné'quilibre"
        className={cn(
          sizeClasses[size],
          "object-contain animate-float rounded-lg",
          className
        )}
      />
    );
  }

  // SVG fallback reprenant les couleurs du logo original
  return (
    <svg
      viewBox="0 0 100 120"
      className={cn(sizeClasses[size], "animate-float", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tête magenta */}
      <circle cx="52" cy="22" r="8" fill="hsl(330, 70%, 50%)" />
      
      {/* Bras orange */}
      <path
        d="M35 35 Q45 28 55 32 Q65 25 75 30"
        stroke="hsl(35, 90%, 55%)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Corps corail */}
      <path
        d="M52 30 Q45 50 48 70"
        stroke="hsl(15, 75%, 60%)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Bras bleu */}
      <path
        d="M55 35 Q70 40 80 35"
        stroke="hsl(215, 70%, 45%)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Jambe turquoise gauche */}
      <path
        d="M48 70 Q35 85 30 105"
        stroke="hsl(170, 65%, 45%)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Jambe bleu foncé droite */}
      <path
        d="M48 70 Q55 90 60 110"
        stroke="hsl(200, 60%, 40%)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default BalanceLogo;
