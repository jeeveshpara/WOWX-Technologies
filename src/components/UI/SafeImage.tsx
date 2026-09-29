import React, { useState } from "react";
import { Globe, Code, ShoppingCart, Layout, Briefcase, Sparkles, Image as ImageIcon } from "lucide-react";

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackIcon?: "Globe" | "Code" | "ShoppingCart" | "Layout" | "Briefcase";
  category?: string;
  badge?: string;
}

export function SafeImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackIcon = "Globe",
  category,
  badge
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getIcon = () => {
    switch (fallbackIcon) {
      case "Code": return <Code className="w-8 h-8 text-cyan-400" />;
      case "ShoppingCart": return <ShoppingCart className="w-8 h-8 text-cyan-400" />;
      case "Layout": return <Layout className="w-8 h-8 text-cyan-400" />;
      case "Briefcase": return <Briefcase className="w-8 h-8 text-cyan-400" />;
      default: return <Globe className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900 flex items-center justify-center">
      {/* Background ambient grid pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.4) 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/80 to-cyan-950/30" />

      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}

      {/* Styled Fallback Frame when no src or image failed to load */}
      {(!src || hasError || !isLoaded) && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transition-opacity duration-300 ${isLoaded && !hasError ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="relative mb-3">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              {getIcon()}
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75" />
          </div>

          <p className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest mb-1">
            {badge || category || "WOWX CORE ASSET"}
          </p>
          <p className="text-sm font-display font-medium text-slate-200 max-w-[80%] line-clamp-1">
            {alt}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <div className="h-1 w-8 rounded-full bg-cyan-500/60" />
            <div className="h-1 w-3 rounded-full bg-blue-500/60" />
            <div className="h-1 w-3 rounded-full bg-purple-500/60" />
          </div>
        </div>
      )}
    </div>
  );
}
