'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ImageUploader from './components/ImageUploader';
import AdVariationDisplay from './components/AdVariationDisplay';
import GenerateButton from './components/GenerateButton';
import PlatformSelector from './components/PlatformSelector';
import StatsCards from './components/StatsCards';
import { motion } from 'framer-motion';

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [productDescription, setProductDescription] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['tiktok', 'instagram']);
  const [adVariations, setAdVariations] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      <Sidebar />
      
      <main className="flex-1 p-6 ml-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">AdGenie Remix</h1>
            <p className="text-purple-200">Product Image to 5 Ad AI Variations</p>
          </motion.div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Upload Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="glass-card rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-white mb-4">Product Image</h2>
                <ImageUploader 
                  onImageUpload={setUploadedImage}
                  uploadedImage={uploadedImage}
                />
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Product Description
                  </label>
                  <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Describe your product..."
                    className="w-full p-3 rounded-md bg-purple-800/30 border border-purple-600/50 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    rows={3}
                  />
                </div>

                <PlatformSelector 
                  selectedPlatforms={selectedPlatforms}
                  onSelectionChange={setSelectedPlatforms}
                />

                <GenerateButton
                  onGenerate={async () => {
                    if (!uploadedImage || !productDescription) return;
                    setIsGenerating(true);
                    
                    try {
                      const response = await fetch('/api/generate-variations', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          imageUrl: uploadedImage,
                          description: productDescription,
                          platforms: selectedPlatforms
                        })
                      });
                      
                      const data = await response.json();
                      setAdVariations(data.variations || []);
                    } catch (error) {
                      console.error('Generation failed:', error);
                    } finally {
                      setIsGenerating(false);
                    }
                  }}
                  disabled={!uploadedImage || !productDescription || isGenerating}
                  isLoading={isGenerating}
                />
              </div>
            </motion.div>

            {/* Ad Variations Display */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <AdVariationDisplay 
                variations={adVariations}
                isGenerating={isGenerating}
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
