import React from 'react';
import { Users, Star, FileCheck } from 'lucide-react';

export function ExternalMentorDashboard() {
  return (
    <div className="space-y-6">
      <header className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">External Mentor Dashboard</h1>
        <p className="text-gray-600">Tech Corp</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-indigo-500" />
            <h2 className="text-lg font-semibold">Total Interns</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">3</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="h-6 w-6 text-yellow-500" />
            <h2 className="text-lg font-semibold">Average Rating</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">4.5/5.0</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <FileCheck className="h-6 w-6 text-green-500" />
            <h2 className="text-lg font-semibold">Completed Internships</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
      </div>

      <section className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Current Interns</h2>
        <div className="space-y-4">
          {[
            { name: 'John Doe', progress: 75, rating: 4.8 },
            { name: 'Jane Smith', progress: 60, rating: 4.5 },
            { name: 'Mike Johnson', progress: 40, rating: 4.2 },
          ].map((intern, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{intern.name}</h3>
                <span className="text-sm text-gray-600">Rating: {intern.rating}/5.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${intern.progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm text-gray-600">{intern.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}