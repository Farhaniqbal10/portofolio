import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';
import profileImage from '../image/1-35.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={profileImage}
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-6">
            Hi! I’m a fresh graduate with a passion for web development. I enjoy creating functional and visually appealing applications using technologies like React, Vite, and Laravel. While I’m still building my experience, I’m eager to learn and take on new challenges in the tech industry.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Frontend Development</h3>
                  <p className="text-gray-600">React, Laravel, TypeScript</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Globe className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Backend Development</h3>
                  <p className="text-gray-600">Node.js, Python, Java, Databases</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">UI/UX Design</h3>
                  <p className="text-gray-600">Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;