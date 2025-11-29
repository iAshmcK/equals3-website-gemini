import React, { ReactNode } from 'react';

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
}

export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <div className="relative bg-white overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          {children}
        </div>
      </div>
    </div>
  );
}
