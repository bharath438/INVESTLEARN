import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface DiscussionPostProps {
  id: string;
  author: {
    name: string;
    avatar: string;
    level: number;
  };
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
}

export const DiscussionPost: React.FC<DiscussionPostProps> = ({
  author,
  title,
  content,
  timestamp,
  likes,
  comments,
  tags
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-gray-900">{author.name}</h4>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              Level {author.level}
            </span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{timestamp}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleLike}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                  liked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                <span>{likeCount}</span>
              </motion.button>

              <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>{comments}</span>
              </button>

              <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                <Share className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};