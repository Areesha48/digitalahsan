
import { ChannelCard } from "@/components/ChannelCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const whatsappChannels = [
    {
      id: 1,
      name: "Digital Ahsan",
      description: "Master digital marketing strategies, grow your business online, and learn proven techniques for success",
      memberCount: "10K",
      bgGradient: "from-green-400 to-green-600",
      icon: "📱",
      image: "/lovable-uploads/c3091ba1-107a-4f0a-9769-0a308e25ed54.png",
      link: "https://www.whatsapp.com/channel/0029VaderbPEAKWB4EtCKK2G"
    },
    {
      id: 2,
      name: "Tech Ahsan",
      description: "Latest technology updates, gadget reviews, and tech insights to keep you ahead in the digital world",
      memberCount: "3K",
      bgGradient: "from-blue-400 to-blue-600",
      icon: "💻",
      image: "/lovable-uploads/82303465-daf7-45f8-bbe4-860489700552.png",
      link: "https://whatsapp.com/channel/0029Vb8lTUG2975GcvzFNd47"
    },
    {
      id: 3,
      name: "YEET",
      description: "Motivational content, success stories, and inspiration to help you achieve your dreams and goals",
      memberCount: "1.8K",
      bgGradient: "from-blue-400 to-blue-600",
      icon: "💪",
      image: "/lovable-uploads/0127fb1f-d77c-456e-b5ba-c581a5945e96.png",
      link: "https://www.whatsapp.com/channel/0029Vb8p4E2B4hdaN5aPCs2B"
    
    },
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
      image: "/lovable-uploads/3f9990c8-293a-40ce-ae5e-d65bce649135.png",
      link: "https://www.instagram.com/ahsan_dga?igsh=MTM4aTA1MHcxcThiZQ%3D%3D"
    },
    {
      id: 'telegram',
      name: "Telegram Channel",
      description: "Get instant updates and announcements",
      memberCount: "5K",
      bgGradient: "from-blue-500 to-cyan-500",
      icon: "✈",
      platform: "telegram",
      image: "/lovable-uploads/0b3e9754-f514-4da7-bc10-b7046318d6c0.png",
      link: "https://t.me/+Ap1B_9uIxDY4YWZk"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {whatsappChannels.map((channel, index) => (
            <div
              key={channel.id}
              className="animate-fade-in h-full"
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
              className="animate-fade-in h-full"
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
