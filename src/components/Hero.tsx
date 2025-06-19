import React from 'react';
import { Heart, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white/20 animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
              transform: `scale(${0.5 + i * 0.1})`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Emma <span className="text-rose-200">&</span> James
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">
              A love story written in the stars
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-lg md:text-xl">
            <Calendar className="w-6 h-6" />
            <span>Together since June 14, 2019</span>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              "In all the world, there is no heart for me like yours. 
              In all the world, there is no love for you like mine."
            </p>
            <p className="text-sm md:text-base text-rose-200">
              — Maya Angelou
            </p>
          </div>
          
          <div className="pt-8">
            <button
              onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;