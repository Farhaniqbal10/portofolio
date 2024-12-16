import React, {useState, useEffect} from 'react'
import { ArrowRight } from 'lucide-react';

const RotatingText = () => {
  const roles = ["Frontend", "Backend", "Full Stack"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Animasi berganti setiap 2 detik
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span className="text-blue-600 font-semibold">{roles[index]}</span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Farhan Maulana Iqbal</span>
          </h1>
          <p className="text-gray-600 mb-6">
              Hi! I’m a <RotatingText /> Developer with a passion for web development. I enjoy creating functional and visually appealing applications using technologies. While I’m still building my experience, I’m eager to learn and take on new challenges in the tech industry.
            </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;