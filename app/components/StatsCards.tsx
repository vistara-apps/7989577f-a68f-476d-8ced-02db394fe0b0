'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {
      label: 'Generated',
      value: '692%',
      subtitle: 'Conversions',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      label: 'Post Social',
      value: '15.7K',
      subtitle: 'Reach Rate',
      icon: BarChart3,
      color: 'text-blue-400'
    },
    {
      label: 'Post to Social Media',
      value: '$6,995',
      subtitle: 'Profit Revenue',
      icon: DollarSign,
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-card rounded-lg p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-purple-200 text-sm">{stat.label}</span>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-purple-300 text-sm">{stat.subtitle}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;
