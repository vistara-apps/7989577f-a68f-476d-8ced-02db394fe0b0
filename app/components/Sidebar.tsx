'use client';

import { Home, Image, BarChart3, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Image, label: 'Generate' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-full w-20 sidebar-gradient z-10"
    >
      <div className="flex flex-col items-center py-8">
        {/* Logo */}
        <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center mb-8">
          <span className="text-white font-bold text-lg">A</span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-6">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-md flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-600/50 transition-all duration-200"
            >
              <item.icon size={20} />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
