import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Play } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  progress?: number;
  thumbnail: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  students,
  rating,
  progress = 0,
  thumbnail,
  level
}) => {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-48">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}>
            {level}
          </span>
        </div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Play className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        {progress > 0 && (
          <div className="mb-4">
            <ProgressBar progress={progress} showLabel={false} />
          </div>
        )}

        <Button 
          variant={progress > 0 ? "secondary" : "primary"} 
          className="w-full"
        >
          {progress > 0 ? 'Continue Learning' : 'Start Course'}
        </Button>
      </div>
    </Card>
  );
};