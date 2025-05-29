import { Instagram, MessageCircle } from "lucide-react";

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
        return 'Join';
    }
  };

  return (
    <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full">
      {/* Background and Overlay */}
      <div className="relative h-32">
        {channel.image ? (
          <img
            src={channel.image}
            alt={channel.name}
            className="absolute inset-0 w-full h-full object-cover"
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
        </div>
        <div className="flex justify-center mt-2">
          <a
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 rounded-md font-medium text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
          >
            {getJoinText()}
          </a>
        </div>
      </div>
    </div>
  );
};
