import React from 'react';
import { EducationItem } from '../types';

interface EducationProps {
  items: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <section id="education" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-1 w-12 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-900">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  <i className="fas fa-graduation-cap text-slate-900 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.school}</h3>
                <p className="text-blue-600 font-medium mb-4">{edu.degree}</p>
                <div className="flex items-center text-slate-500 text-sm">
                  <i className="far fa-calendar-alt mr-2"></i>
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
