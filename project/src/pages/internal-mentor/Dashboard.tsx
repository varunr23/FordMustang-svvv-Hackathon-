import React from 'react';
import { Users, CheckCircle, AlertCircle } from 'lucide-react';

export function InternalMentorDashboard() {
  return (
    <div className="space-y-6">
      <header className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">Internal Mentor Dashboard</h1>
        <p className="text-gray-600">Managing 5 Interns</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-indigo-500" />
            <h2 className="text-lg font-semibold">Active Interns</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">5</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h2 className="text-lg font-semibold">Reports Reviewed</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="h-6 w-6 text-yellow-500" />
            <h2 className="text-lg font-semibold">Pending Reviews</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">3</p>
        </div>
      </div>

      <section className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Assigned Interns</h2>
        <div className="space-y-4">
          {[
            { name: 'John Doe', company: 'Tech Corp', status: 'active' },
            { name: 'Jane Smith', company: 'Innovation Labs', status: 'active' },
            { name: 'Mike Johnson', company: 'Digital Solutions', status: 'active' },
          ].map((intern, i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">{intern.name}</h3>
                <p className="text-sm text-gray-600">{intern.company}</p>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}