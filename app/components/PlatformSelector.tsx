'use client';

import { motion } from 'framer-motion';

interface PlatformSelectorProps {
  selectedPlatforms: string[];
  onSelectionChange: (platforms: string[]) => void;
}

const platforms = [
  { id: 'tiktok', name: 'TikTok', color: 'bg-pink-500' },
  { id: 'instagram', name: 'Instagram', color: 'bg-purple-500' },
  { id: 'facebook', name: 'Facebook', color: 'bg-blue-500' }
];

const PlatformSelector = ({ selectedPlatforms, onSelectionChange }: PlatformSelectorProps) => {
  const togglePlatform = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      onSelectionChange(selectedPlatforms.filter(p => p !== platformId));
    } else {
      onSelectionChange([...selectedPlatforms, platformId]);
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-purple-200 mb-2">
        Target Platforms
      </label>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <motion.button
            key={platform.id}
            onClick={() => togglePlatform(platform.id)}
            className={`
              px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${selectedPlatforms.includes(platform.id)
                ? `${platform.color} text-white shadow-lg`
                : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/50'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {platform.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PlatformSelector;
