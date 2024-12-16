import React from 'react';
import { ExternalLink, Github } from 'lucide-react';


const Projects = () => {
  const projects = [
    {
      title: 'GANA (Game Asset Nusantara)',
      description: 'Sebuah website Repository asset untuk keperluan pengembangan game bertemakan nusantara',
      technologies: ['Laravel', 'Bootstrap', 'SQL', 'Javascript'],
      githubLink: 'https://github.com/Farhaniqbal10/asetgim',
      liveLink: 'https://gana.nuon.digital/',
    },
    {
      title: 'Sistem Klasterisasi Obat Puskesmas Watubelah',
      description: 'Sistem Berbasis Website yang mengimplementasikan algoritma AHC untuk kebutuhan klasterisas obat di puskesmas',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      technologies: ['Python','Streamlit'],
      githubLink: 'https://github.com/Farhaniqbal10/ClusteringObatPuskesmasWatubelah',
      liveLink: 'https://clusteringobatpuskesmaswatubelah.streamlit.app/',
    },
    {
      title: 'SIJAA ALKES',
      description: 'Website pengelola peminjaman alat kesehatan (ALKES)',
      technologies: ['React', 'Tailwind'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;