import React from 'react';
import { motion } from 'framer-motion';
import { Crown, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';

interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  rank: number;
}

interface LeaderboardCardProps {
  users: LeaderboardUser[];
  title: string;
}

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ users, title }) => {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Crown className="w-6 h-6 text-yellow-600" />
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>

      <div className="space-y-4">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0">
              {user.rank <= 3 ? (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  user.rank === 1 ? 'bg-yellow-500' : 
                  user.rank === 2 ? 'bg-gray-400' : 
                  'bg-yellow-600'
                }`}>
                  {user.rank}
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  {user.rank}
                </div>
              )}
            </div>

            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <p className="text-sm text-gray-500">Level {user.level}</p>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{user.xp.toLocaleString()}</p>
              <p className="text-xs text-gray-500 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                XP
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};