import React from "react";
import { Instagram, MessageCircle, Send } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h3 className="text-2xl font-bold">Digital Ahsan</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your one-stop destination for amazing content across multiple platforms.
              Join our growing community and stay updated with the latest trends.
            </p>

            {/* Social Icons with Links */}
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ahsan_dga?igsh=MTM4aTA1MHcxcThiZQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://www.whatsapp.com/channel/0029VaderbPEAKWB4EtCKK2G"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/+Ap1B_9uIxDY4YWZk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Digital Ahsan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
