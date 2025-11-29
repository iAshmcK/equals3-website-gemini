import React, { ReactNode } from 'react';

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <div className="h-full p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 text-teal-600 bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}