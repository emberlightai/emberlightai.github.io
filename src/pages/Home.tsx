import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Globe, Users } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log('Home page loaded - updated version');
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
          className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-pink-600" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            emberlight
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Reimagining romance with smart technology. We use advanced algorithms to help you find your perfect match, sparking connections that last a lifetime.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Experience the next evolution of dating. Smart, intuitive, and deeply personal.
          </p>
          <Link
            to="/team"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Meet the Creators
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Finding Love in the Modern World</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine behavioral science with cutting-edge matchmaking technology to bring you closer to "The One."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform"
              style={{
                transform: `translateY(${(scrollY - 500) * 0.1}px)`,
              }}
            >
              <Sparkles className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Advanced Matchmaking</h3>
              <p className="text-gray-600">Our proprietary algorithms learn your preferences and values to suggest matches that truly resonate with who you are.</p>
            </div>
            <div
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform"
              style={{
                transform: `translateY(${(scrollY - 600) * 0.1}px)`,
              }}
            >
              <Users className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Real Connections</h3>
              <p className="text-gray-600">We prioritize authentic interactions over endless swiping. Designed to get you off the app and on a real date.</p>
            </div>
            <div
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform"
              style={{
                transform: `translateY(${(scrollY - 700) * 0.1}px)`,
              }}
            >
              <Globe className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Global Romance</h3>
              <p className="text-gray-600">Love knows no borders. Connect with amazing singles from around the world or right in your neighborhood.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Heart className="w-16 h-16 text-pink-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Relationships Re-engineered</h2>
              <p className="text-lg text-gray-600 mb-4">
                Traditional dating apps are broken. They profit from your loneliness and gamify rejection. We believe there's a better way.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                At Emberlight, we use data science to understand the deep compatibility factors that lead to successful long-term relationships.
              </p>
              <p className="text-lg text-gray-600">
                Founded by industry veterans from top tech and dating companies, we are on a mission to solve the loneliness epidemic.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Emberlight?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span className="text-gray-700">Curated daily matches</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span className="text-gray-700">Personality-deep compatibility scores</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span className="text-gray-700">Verified profiles for safety</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span className="text-gray-700">Smart conversation starters</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                  </div>
                  <span className="text-gray-700">Privacy-focused data handling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Image Section */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80")',
            transform: `translateY(${(scrollY - 1000) * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-pink-900/40 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Love Without Limits</h2>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Join thousands of happy couples who found their spark with Emberlight.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}