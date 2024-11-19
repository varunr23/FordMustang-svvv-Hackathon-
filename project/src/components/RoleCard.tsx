import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function RoleCard({ title, description, icon: Icon, onClick }: RoleCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      <div className="absolute -top-4 left-6 bg-indigo-500 p-3 rounded-xl text-white shadow-md group-hover:bg-indigo-600 transition-colors">
        <Icon size={24} />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="mt-4 flex items-center text-indigo-500 text-sm font-medium">
        Continue as {title}
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}