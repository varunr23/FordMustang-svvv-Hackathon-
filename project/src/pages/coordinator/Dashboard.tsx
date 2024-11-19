import React from 'react';
import { Users, Building, UserCheck, Map } from 'lucide-react';

export function CoordinatorDashboard() {
  return (
    <div className="space-y-6">
      <header className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">Coordinator Dashboard</h1>
        <p className="text-gray-600">System Overview</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-indigo-500" />
            <h2 className="text-lg font-semibold">Total Interns</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">150</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Building className="h-6 w-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Companies</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">25</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <UserCheck className="h-6 w-6 text-green-500" />
            <h2 className="text-lg font-semibold">Active Mentors</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">45</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Map className="h-6 w-6 text-purple-500" />
            <h2 className="text-lg font-semibold">Locations</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Registrations</h2>
          <div className="space-y-4">
            {[
              { name: 'John Doe', type: 'Intern', company: 'Tech Corp' },
              { name: 'Sarah Wilson', type: 'Internal Mentor', company: 'Innovation Labs' },
              { name: 'Mike Brown', type: 'External Mentor', company: 'Digital Solutions' },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.type} - {user.company}</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">System Statistics</h2>
          <div className="space-y-4">
            {[
              { label: 'Reports Submitted', value: '450', change: '+12%' },
              { label: 'Active Internships', value: '120', change: '+5%' },
              { label: 'Completion Rate', value: '92%', change: '+2%' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{stat.label}</h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}