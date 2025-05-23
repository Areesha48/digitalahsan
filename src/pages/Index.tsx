
import { ChannelCard } from "@/components/ChannelCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

const Index = () => {
  const whatsappChannels = [
    {
      id: 1,
      name: "Tech Updates",
      description: "Latest technology news and updates",
      memberCount: "2.5K",
      bgGradient: "from-green-400 to-green-600",
      icon: "📱"
    },
    {
      id: 2,
      name: "Daily Motivation",
      description: "Inspiring quotes and motivational content",
      memberCount: "1.8K",
      bgGradient: "from-blue-400 to-blue-600",
      icon: "💪"
    },
    {
      id: 3,
      name: "News & Updates",
      description: "Breaking news and current affairs",
      memberCount: "3.2K",
      bgGradient: "from-purple-400 to-purple-600",
      icon: "📰"
    },
    {
      id: 4,
      name: "Entertainment Hub",
      description: "Movies, music and entertainment content",
      memberCount: "4.1K",
      bgGradient: "from-pink-400 to-pink-600",
      icon: "🎬"
    },
    {
      id: 5,
      name: "Study Material",
      description: "Educational resources and study guides",
      memberCount: "2.9K",
      bgGradient: "from-orange-400 to-orange-600",
      icon: "📚"
    },
    {
      id: 6,
      name: "Sports Corner",
      description: "Latest sports news and updates",
      memberCount: "1.5K",
      bgGradient: "from-red-400 to-red-600",
      icon: "⚽"
    }
  ];

  const socialChannels = [
    {
      id: 'instagram',
      name: "Instagram Page",
      description: "Follow us for visual content and stories",
      memberCount: "5.2K",
      bgGradient: "from-gradient-start to-gradient-end",
      icon: "📸",
      platform: "instagram"
    },
    {
      id: 'telegram',
      name: "Telegram Channel",
      description: "Get instant updates and announcements",
      memberCount: "3.8K",
      bgGradient: "from-blue-500 to-cyan-500",
      icon: "✈️",
      platform: "telegram"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      
      {/* WhatsApp Channels Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            WhatsApp Channels
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our exclusive WhatsApp channels for latest updates and content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsappChannels.map((channel, index) => (
            <div 
              key={channel.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ChannelCard channel={channel} platform="whatsapp" />
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Follow Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with us on social media platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialChannels.map((channel, index) => (
            <div 
              key={channel.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ChannelCard channel={channel} platform={channel.platform} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
