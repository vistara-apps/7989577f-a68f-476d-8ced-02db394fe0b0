'use client';

import { motion } from 'framer-motion';
import { Share2, Download, Heart, CheckCircle } from 'lucide-react';

interface AdVariation {
  id: string;
  imageUrl: string;
  copy: string;
  platform: string;
  metrics?: {
    likes: number;
    shares: number;
    engagement: number;
  };
}

interface AdPreviewCardProps {
  variation: AdVariation;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

const AdPreviewCard = ({ variation, isSelected, onSelect, index }: AdPreviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`
        glass-card rounded-lg p-4 cursor-pointer transition-all duration-200 relative
        ${isSelected ? 'ring-2 ring-accent shadow-xl' : 'hover:shadow-lg'}
      `}
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isSelected && (
        <div className="absolute top-2 right-2 z-10">
          <CheckCircle className="w-6 h-6 text-accent" fill="currentColor" />
        </div>
      )}
      
      <div className="relative mb-3">
        <img
          src={variation.imageUrl}
          alt="Ad variation"
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute top-2 left-2">
          <span className={`
            px-2 py-1 rounded-full text-xs font-medium
            ${variation.platform === 'tiktok' ? 'bg-pink-500' :
              variation.platform === 'instagram' ? 'bg-purple-500' : 'bg-blue-500'}
            text-white
          `}>
            {variation.platform.toUpperCase()}
          </span>
        </div>
      </div>

      <p className="text-white text-sm mb-3 line-clamp-3">{variation.copy}</p>

      {variation.metrics && (
        <div className="flex items-center justify-between text-purple-200 text-xs">
          <div className="flex items-center gap-1">
            <Heart size={12} />
            <span>{variation.metrics.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 size={12} />
            <span>{variation.metrics.shares}</span>
          </div>
          <div>
            <span>{variation.metrics.engagement}% eng.</span>
          </div>
        </div>
      )}

      <div className="flex justify-end mt-3 gap-2">
        <button className="p-1.5 rounded-md bg-purple-700/50 text-purple-200 hover:text-white transition-colors">
          <Download size={16} />
        </button>
        <button className="p-1.5 rounded-md bg-purple-700/50 text-purple-200 hover:text-white transition-colors">
          <Share2 size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default AdPreviewCard;
