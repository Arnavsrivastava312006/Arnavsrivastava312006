import React from 'react';

interface HeroProps {
  data: any;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 shadow-xl border-4 border-white">
          <img
            src={`https://picsum.photos/seed/${data.name}/400/400`}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight gradient-text">
          {data.name}
        </h1>
        <p className="text-lg md:text-2xl text-slate-600 font-medium max-w-2xl mb-8">
          {data.headline}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
        <div className="mt-12 flex space-x-6 text-slate-400">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
            <span className="text-sm">{data.location}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-university mr-2 text-blue-500"></i>
            <span className="text-sm">UPES Student</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
