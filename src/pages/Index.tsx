import { ChannelCard } from "@/components/ChannelCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const whatsappChannels = [
    {
      id: 1,
      name: "Digital Ahsan",
      description: "Grow like a villain - Digital marketing tips and strategies",
      memberCount: "7.9K",
      bgGradient: "from-green-400 to-green-600",
      icon: "📱",
      image: "/lovable-uploads/c3091ba1-107a-4f0a-9769-0a308e25ed54.png",
      link: "https://www.whatsapp.com/channel/0029VaderbPEAKWB4EtCKK2G"
    },
    {
      id: 2,
      name: "Tech Ahsan",
      description: "Latest technology updates and tech reviews",
      memberCount: "1K",
      bgGradient: "from-blue-400 to-blue-600",
      icon: "💻",
      image: "/lovable-uploads/82303465-daf7-45f8-bbe4-860489700552.png",
      link: "https://www.whatsapp.com/channel/0029VasKqNm3LdQQie4R6X1L"
    },
    {
      id: 3,
      name: "YEET",
      description: "Focus your dream - Make yourself Proud!",
      memberCount: "1.8K",
      bgGradient: "from-blue-400 to-blue-600",
      icon: "💪",
      image: "/lovable-uploads/0127fb1f-d77c-456e-b5ba-c581a5945e96.png",
      link: "https://www.whatsapp.com/channel/0029Vb8p4E2B4hdaN5aPCs2B"
    },
    {
      id: 4,
      name: "Spiritual vibes",
      description: "Spiritual content and peaceful vibes",
      memberCount: "3.2K",
      bgGradient: "from-purple-400 to-purple-600",
      icon: "🕯️",
      image: "/lovable-uploads/0107b260-2912-44ad-99d2-7715a67ceec5.png"
    }
    // {
    //   id: 5,
    //   name: "Entertainment Hub",
    //   description: "Movies, music and entertainment content",
    //   memberCount: "4.1K",
    //   bgGradient: "from-pink-400 to-pink-600",
    //   icon: "🎬",
    //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    // },
    // {
    //   id: 6,
    //   name: "Study Material",
    //   description: "Educational resources and study guides",
    //   memberCount: "2.9K",
    //   bgGradient: "from-orange-400 to-orange-600",
    //   icon: "📚",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
    // }
  ];

  const socialChannels = [
    {
      id: 'instagram',
      name: "Instagram Page",
      description: "Follow us for visual content and stories",
      memberCount: "5.2K",
      bgGradient: "from-gradient-start to-gradient-end",
      icon: "📸",
      platform: "instagram",
      image: "/lovable-uploads/858b3330-32f1-4507-bf06-ce449099247a.png"
    },
    {
      id: 'telegram',
      name: "Telegram Channel",
      description: "Get instant updates and announcements",
      memberCount: "3.8K",
      bgGradient: "from-blue-500 to-cyan-500",
      icon: "✈️",
      platform: "telegram",
      image: "/lovable-uploads/85040803-74c4-4227-acde-a6179f8f722c.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-8">
      
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
