import React from 'react';
import { Satellite, Radio, Zap, AlertTriangle } from 'lucide-react';
import { Button } from '../components';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

const HomePage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-purple-900 to-purple-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Space Weather Alerts</span>
                  <span className="block text-purple-200">for Africa</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-purple-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Get timely SMS notifications about solar flares, geomagnetic storms, and other space weather events that could impact communications, GPS, and power grids across Africa.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <Button 
                      onClick={() => onNavigate('subscribe')} 
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                    >
                      Subscribe Now
                    </Button>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <Button 
                      variant="outline"
                      onClick={() => onNavigate('alerts')} 
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 border-purple-200"
                    >
                      View Alerts
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 hidden lg:block lg:inset-x-0 lg:inset-y-auto lg:h-96">
          {/* Space background pattern */}
          <div className="absolute inset-0 bg-purple-800 opacity-30 transform origin-bottom-right lg:inset-y-0 rotate-6 -translate-x-10"></div>
          <div className="absolute inset-0 bg-purple-800 opacity-30 transform origin-bottom-right lg:inset-y-0 rotate-3 -translate-x-20"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Space Weather Matters
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Space weather events can significantly impact technologies we rely on daily. Stay informed to mitigate risks.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Feature 
                icon={<Radio className="h-6 w-6" />}
                title="Aviation Safety"
                description="Solar events can disrupt high-frequency radio communications and satellite navigation systems critical for aviation."
              />
              <Feature 
                icon={<Zap className="h-6 w-6" />}
                title="Power Grid Protection"
                description="Geomagnetic storms can induce currents in power lines, potentially damaging transformers and causing outages."
              />
              <Feature 
                icon={<AlertTriangle className="h-6 w-6" />}
                title="Telecommunications"
                description="Solar radio bursts can degrade GPS accuracy and interfere with satellite communications systems."
              />
              <Feature 
                icon={<Satellite className="h-6 w-6" />}
                title="Real-time Alerts"
                description="Receive SMS notifications about space weather events as they happen, with severity levels clearly indicated."
              />
              <Feature 
                icon={<Radio className="h-6 w-6" />}
                title="Targeted Information"
                description="Alerts tailored to your specific sector - whether you're a pilot, farmer, telecom operator, or general user."
              />
              <Feature 
                icon={<AlertTriangle className="h-6 w-6" />}
                title="Reliable Coverage"
                description="SMS-based system ensures alerts reach you even in areas with limited internet connectivity across Africa."
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to stay informed?</span>
            <span className="block">Subscribe to our alerts today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-purple-200">
            Join our network of users across Africa who rely on timely space weather information to protect their operations.
          </p>
          <Button
            onClick={() => onNavigate('subscribe')}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 sm:w-auto"
          >
            Subscribe Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;