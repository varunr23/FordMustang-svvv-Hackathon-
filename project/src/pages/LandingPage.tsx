import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Briefcase, UserCog } from 'lucide-react';
import { RoleCard } from '../components/RoleCard';
import type { UserRole } from '../types';

export function LandingPage() {
  const navigate = useNavigate();

  const handleRoleSelect = (role: UserRole) => {
    navigate('/login', { state: { role } });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Internship Management Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to our comprehensive internship management system. Please select your role to continue.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <RoleCard
              title="Intern"
              description="Access your internship details, submit reports, and track your progress"
              icon={GraduationCap}
              onClick={() => handleRoleSelect('intern')}
            />
            <RoleCard
              title="Internal Mentor"
              description="Manage and evaluate your assigned interns' performance"
              icon={Users}
              onClick={() => handleRoleSelect('internal-mentor')}
            />
            <RoleCard
              title="External Mentor"
              description="Review intern progress and provide final assessments"
              icon={Briefcase}
              onClick={() => handleRoleSelect('external-mentor')}
            />
            <RoleCard
              title="Coordinator"
              description="Oversee all internships and manage system operations"
              icon={UserCog}
              onClick={() => handleRoleSelect('coordinator')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}