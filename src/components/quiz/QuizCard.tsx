import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Trophy, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  questions: number;
  timeLimit: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  participants: number;
  rewards: number;
  thumbnail: string;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  questions,
  timeLimit,
  difficulty,
  participants,
  rewards,
  thumbnail
}) => {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800 border-green-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Hard: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-32">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-blue-800/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Trophy className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className={`px-2 py-1 rounded border text-xs font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">{questions}</div>
            <div className="text-xs text-gray-500">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">{timeLimit}m</div>
            <div className="text-xs text-gray-500">Time Limit</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-red-600">{rewards}</div>
            <div className="text-xs text-gray-500">XP Reward</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Users className="w-4 h-4" />
            <span>{participants.toLocaleString()} participants</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Available now</span>
          </div>
        </div>

        <Button variant="primary" className="w-full">
          Start Quiz
        </Button>
      </div>
    </Card>
  );
};