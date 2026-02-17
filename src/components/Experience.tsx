import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  items: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <section id="experience" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-1 w-12 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-900">Work Experience</h2>
          </div>

          <div className="relative border-l-2 border-slate-100 ml-3 md:ml-6 space-y-12">
            {items.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block md:inline w-fit">
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center text-slate-600 mb-3 font-medium">
                  <span className="mr-2">{item.company}</span>
                  {item.location && (
                    <>
                      <span className="text-slate-300 mx-2">•</span>
                      <span className="text-sm">{item.location}</span>
                    </>
                  )}
                  <span className="text-slate-300 mx-2">•</span>
                  <span className="text-sm italic">{item.duration}</span>
                </div>

                {item.company.includes('McKinsey') && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2">
                    <p className="text-sm text-slate-600">Selected learner for the McKinsey Forward program, focusing on core leadership and analytical skills.</p>
                  </div>
                )}

                {item.company.includes('Coal India') && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2">
                    <p className="text-sm text-slate-600">Summer internship exploring operational HR and corporate culture in a major public sector undertaking.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
