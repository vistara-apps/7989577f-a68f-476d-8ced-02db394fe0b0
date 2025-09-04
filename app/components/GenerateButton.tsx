'use client';

import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface GenerateButtonProps {
  onGenerate: () => void;
  disabled: boolean;
  isLoading: boolean;
}

const GenerateButton = ({ onGenerate, disabled, isLoading }: GenerateButtonProps) => {
  return (
    <motion.button
      onClick={onGenerate}
      disabled={disabled}
      className={`
        w-full mt-6 px-6 py-3 rounded-md font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2
        ${disabled 
          ? 'bg-gray-500 cursor-not-allowed opacity-50' 
          : 'bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl'
        }
      `}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      <Sparkles className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
      {isLoading ? 'Generating Variations...' : 'Generate Ad Variations'}
    </motion.button>
  );
};

export default GenerateButton;
