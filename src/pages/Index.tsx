import { ChannelCard } from "@/components/ChannelCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const whatsappChannels = [
    {
      id: 1,
      name: "Digital Ahsan",
      description: "Grow like a villain - Digital marketing tips and strategies",
      memberCount: "10K",
      bgGradient: "from-green-400 to-green-600",
      icon: "📱",
      image: "/lovable-uploads/c3091ba1-107a-4f0a-9769-0a308e25ed54.png",
      link: "https://www.whatsapp.com/channel/0029VaderbPEAKWB4EtCKK2G"
    },
    {
      id: 2,
      name: "Tech Ahsan",
      description: "Latest technology updates and tech reviews",
      memberCount: "3K",
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
      image: "/lovable-uploads/0127fb1f-d77c-456e-b5ba-c581a5945e96.png"
    },
    // ...baqi channels (agar ho) waise hi chhodein
  ];

  const socialChannels = [
    {
      id: 'instagram',
      name: "Instagram Page",
      description: "Follow us for visual content and stories",
      memberCount: "1.2K",
      bgGradient: "from-gradient-start to-gradient-end",
      icon: "📸",
      platform: "instagram",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop"
    },
    {
      id: 'telegram',
      name: "Telegram Channel",
      description: "Get instant updates and announcements",
      memberCount: "5K",
      bgGradient: "from-blue-500 to-cyan-500",
      icon: "✈",
      platform: "telegram",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-8">
      {/* Top-left Digital Ahsan heading */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-8 cursor-pointer transition-colors duration-300 hover:text-green-600 tracking-wide">
          Digital Ahsan
        </h1>
      </div>
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
        {/* == UPDATED: grid mein items-stretch add kiya hai == */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {whatsappChannels.map((channel, index) => (
            /* == UPDATED: wrapper div mein h-full add kiya hai == */
            <div
              key={channel.id}
              className="animate-fade-in h-full"
              style={{ animationDelay: ${index * 100}ms }}
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
        {/* Social grid bhi same tarah h-full wrapper ke sath */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialChannels.map((channel, index) => (
            <div
              key={channel.id}
              className="animate-fade-in h-full"
              style={{ animationDelay: ${index * 200}ms }}
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
