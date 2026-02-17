import React from 'react';

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="h-1 w-12 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">
              {summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h3 className="font-bold mb-1">HR Focused</h3>
              <p className="text-sm text-slate-500">Specializing in Human Resources and Culture.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-xl"></i>
              </div>
              <h3 className="font-bold mb-1">Sustainability</h3>
              <p className="text-sm text-slate-500">Exploring CSR and sustainable business.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <h3 className="font-bold mb-1">Analytics</h3>
              <p className="text-sm text-slate-500">Data-driven approach to HR decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
