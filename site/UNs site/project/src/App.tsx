import React from 'react';
import { Github, CheckCircle, Zap, Shield, MessagesSquare, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header/Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <MessagesSquare className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">UNsCheck</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Telegram Username Checker
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Check the availability of Telegram usernames efficiently and securely with our modern desktop application.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CheckCircle className="w-8 h-8 text-blue-500" />}
            title="Bulk Checking"
            description="Check multiple usernames simultaneously with our efficient bulk processing system."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-blue-500" />}
            title="Fast & Reliable"
            description="Get quick results with our optimized checking algorithm and smart rate limiting."
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-blue-500" />}
            title="Secure"
            description="Your data is safe with our secure authentication and local storage system."
          />
        </div>
      </div>

      {/* Screenshot Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=2000&q=80"
            alt="Application Interface"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400">Have questions? Contact us on Telegram</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <a
            href="https://t.me/UGCRYPTOS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <Send className="w-5 h-5 mr-2" />
            Contact on Telegram
          </a>
          
          {/* QR Code Section */}
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/UGCRYPTOS"
              alt="Telegram QR Code"
              className="w-48 h-48"
            />
            <p className="text-gray-900 font-medium mt-2 text-center">@UGCRYPTOS</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessagesSquare className="w-6 h-6 text-blue-500" />
              <span className="text-gray-400">© 2025 UNsCheck</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;