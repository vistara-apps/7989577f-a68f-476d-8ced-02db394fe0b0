'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Download, Heart } from 'lucide-react';
import AdPreviewCard from './AdPreviewCard';

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

interface AdVariationDisplayProps {
  variations: AdVariation[];
  isGenerating: boolean;
}

const AdVariationDisplay = ({ variations, isGenerating }: AdVariationDisplayProps) => {
  const [selectedVariations, setSelectedVariations] = useState<string[]>([]);

  const toggleSelection = (variationId: string) => {
    if (selectedVariations.includes(variationId)) {
      setSelectedVariations(selectedVariations.filter(id => id !== variationId));
    } else {
      setSelectedVariations([...selectedVariations, variationId]);
    }
  };

  if (isGenerating) {
    return (
      <div className="glass-card rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-6">AI Generated Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-lg p-4 animate-pulse"
            >
              <div className="w-full h-48 bg-purple-700/30 rounded-md mb-3"></div>
              <div className="h-4 bg-purple-700/30 rounded mb-2"></div>
              <div className="h-4 bg-purple-700/30 rounded w-3/4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (variations.length === 0) {
    return (
      <div className="glass-card rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-white mb-4">AI Generated Variations</h2>
        <p className="text-purple-200">Upload an image and generate variations to see them here</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">AI Generated Variations</h2>
        {selectedVariations.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 bg-accent rounded-md text-white font-medium hover:bg-accent/90 transition-colors"
          >
            Post Selected ({selectedVariations.length})
          </motion.button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {variations.map((variation, index) => (
          <AdPreviewCard
            key={variation.id}
            variation={variation}
            isSelected={selectedVariations.includes(variation.id)}
            onSelect={() => toggleSelection(variation.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AdVariationDisplay;
