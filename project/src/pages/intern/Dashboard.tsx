import React from 'react';
import { Calendar, FileText, Clock } from 'lucide-react';

export function InternDashboard() {
  return (
    <div className="space-y-6">
      <header className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, John Doe</h1>
        <p className="text-gray-600">Intern at Tech Corp</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-indigo-500" />
            <h2 className="text-lg font-semibold">Internship Period</h2>
          </div>
          <p className="text-gray-600">Jan 1, 2024 - Jun 30, 2024</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="h-6 w-6 text-indigo-500" />
            <h2 className="text-lg font-semibold">Reports Due</h2>
          </div>
          <p className="text-gray-600">Next report due in 5 days</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-indigo-500" />
            <h2 className="text-lg font-semibold">Hours Logged</h2>
          </div>
          <p className="text-gray-600">120 hours this month</p>
        </div>
      </div>

      <section className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Fortnightly Report #{i}</h3>
                <p className="text-sm text-gray-600">Submitted on March {i}, 2024</p>
              </div>
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                Reviewed
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}