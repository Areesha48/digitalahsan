import { Instagram, MessageCircle, CircleDot } from "lucide-react";

interface Channel {
  id: number | string;
  name: string;
  description: string;
  memberCount?: string;
  bgGradient: string;
  icon: string;
  platform?: string;
  image?: string;
  link?: string;
}

interface ChannelCardProps {
  channel: Channel;
  platform: string;
}

export const ChannelCard = ({ channel, platform }: ChannelCardProps) => {
  const getPlatformIcon = () => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-6 h-6 text-white" />;
      case 'telegram':
        return <MessageCircle className="w-6 h-6 text-white" />;
      default:
        return <MessageCircle className="w-6 h-6 text-white" />;
    }
  };

  const getPlatformColor = () => {
    switch (platform) {
      case 'instagram':
        return 'from-pink-500 via-red-500 to-yellow-500';
      case 'telegram':
        return 'from-blue-400 to-blue-600';
      default:
        return 'from-green-400 to-green-600';
    }
  };

  const getJoinText = () => {
    switch (platform) {
      case 'instagram':
        return 'Follow';
      case 'telegram':
        return 'Join';
      default:
        return 'Join Channel';
    }
  };

  const handleJoinClick = () => {
    if (channel.link) {
      window.open(channel.link, '_blank');
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden h-[400px] flex flex-col">
      {/* Image Background */}
      <div className="h-48 relative overflow-hidden bg-gray-200">
        {channel.image ? (
          <img 
            src={channel.image} 
            alt={channel.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.background = `linear-gradient(to right, ${channel.bgGradient.replace('from-', '').replace('to-', '').split(' ').join(', ')})`;
            }}
          />
        ) : (
          <div className={`h-full bg-gradient-to-r ${platform === 'instagram' ? getPlatformColor() : channel.bgGradient}`}></div>
        )}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          {getPlatformIcon()}
          <span className="text-white font-semibold capitalize">{platform}</span>
        </div>
        <div className="absolute bottom-4 right-4 text-4xl">
          {channel.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200 text-center">
            {channel.name}
          </h3>
          <p className="text-gray-600 mb-3 text-sm text-center">
            {channel.description}
          </p>
          {channel.memberCount && (
            <p className="text-gray-500 text-xs text-center mb-3">
              {channel.memberCount} members
            </p>
          )}
        </div>
        <div className="flex justify-center mt-2">
          <button 
            onClick={handleJoinClick}
            className={`bg-gradient-to-r ${getPlatformColor()} text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2`}
          >
            <CircleDot className="w-4 h-4 text-green-400" />
            {getJoinText()}
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </div>
  );
};
