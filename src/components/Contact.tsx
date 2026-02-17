import React from 'react';

interface ContactProps {
  data: any;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Get in touch
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-slate-600 mb-12">
            I'm currently seeking opportunities to learn and grow in the field of Human Resources.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href={`mailto:${data.email}`} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Email</h3>
              <p className="text-sm text-slate-500 break-all">{data.email}</p>
            </a>

            <a href={`tel:${data.phone}`} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
              <p className="text-sm text-slate-500">{data.phone}</p>
            </a>

            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">LinkedIn</h3>
              <p className="text-sm text-slate-500">Connect with me</p>
            </a>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-4">Current Location</h3>
            <div className="flex items-center justify-center space-x-2 text-slate-400">
              <i className="fas fa-map-pin text-blue-500"></i>
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
