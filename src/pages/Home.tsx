import React, { useEffect, useState } from 'react';
import { Brain, Sparkles, Code, Cpu } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            <Brain className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            emberlight<span className="text-blue-600">.ai</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Illuminating the future of artificial intelligence with groundbreaking solutions that transform the way we work and live.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div 
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform"
              style={{
                transform: `translateY(${(scrollY - 500) * 0.1}px)`,
              }}
            >
              <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Advanced AI Models</h3>
              <p className="text-gray-600">State-of-the-art machine learning algorithms that adapt and evolve with your needs.</p>
            </div>
            <div 
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform"
              style={{
                transform: `translateY(${(scrollY - 600) * 0.1}px)`,
              }}
            >
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Easy Integration</h3>
              <p className="text-gray-600">Seamlessly integrate our AI solutions into your existing workflows and systems.</p>
            </div>
            <div 
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform"
              style={{
                transform: `translateY(${(scrollY - 700) * 0.1}px)`,
              }}
            >
              <Cpu className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Scalable Infrastructure</h3>
              <p className="text-gray-600">Built on robust cloud architecture that grows with your business needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Image Section */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80")',
            transform: `translateY(${(scrollY - 1000) * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">The Future is Here</h2>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Join us in shaping the next generation of AI technology
            </p>
          </div>
        </div>
      </div>
    </>
  );
}