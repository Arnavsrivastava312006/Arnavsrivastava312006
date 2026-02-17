import React from 'react';
import { CertificationItem, SkillItem } from '../types';

interface SkillsProps {
  skills: SkillItem[];
  certifications: CertificationItem[];
}

const Skills: React.FC<SkillsProps> = ({ skills, certifications }) => {
  return (
    <section id="skills" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-8">
                <div className="h-1 w-12 bg-blue-600 mr-4"></div>
                <h2 className="text-3xl font-bold text-slate-900">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-8">
                <div className="h-1 w-12 bg-blue-600 mr-4"></div>
                <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start p-4 bg-slate-900 text-white rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-certificate text-blue-400"></i>
                    </div>
                    <div>
                      <h3 className="font-bold leading-tight">{cert.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{cert.provider}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
