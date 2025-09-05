import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, TrendingUp, Clock, Target } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { StatsCard } from '../components/dashboard/StatsCard';
import { CourseCard } from '../components/learning/CourseCard';
import { QuizCard } from '../components/quiz/QuizCard';
import { DiscussionPost } from '../components/community/DiscussionPost';
import { Card } from '../components/ui/Card';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const courses = [
    {
      title: 'Stock Market Fundamentals',
      description: 'Learn the basics of stock trading, market analysis, and risk management for beginners.',
      duration: '4.5 hours',
      students: 12450,
      rating: 4.8,
      progress: 65,
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=500',
      level: 'Beginner' as const
    },
    {
      title: 'Advanced Portfolio Management',
      description: 'Master advanced techniques for portfolio optimization and asset allocation.',
      duration: '6 hours',
      students: 8920,
      rating: 4.9,
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=500',
      level: 'Advanced' as const
    }
  ];

  const quizzes = [
    {
      id: '1',
      title: 'Market Analysis Challenge',
      description: 'Test your knowledge of technical and fundamental analysis',
      questions: 20,
      timeLimit: 15,
      difficulty: 'Medium' as const,
      participants: 3420,
      rewards: 250,
      thumbnail: 'https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const discussions = [
    {
      id: '1',
      author: {
        name: 'Alex Morgan',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
        level: 5
      },
      title: 'Best strategies for dividend investing in 2024?',
      content: 'I\'ve been focusing on dividend stocks lately and wondering what strategies are working best in the current market environment. What are your thoughts on REIT vs traditional dividend stocks?',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 12,
      tags: ['dividends', 'strategy', 'REIT']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.name}! 🎯
        </h1>
        <p className="text-gray-600">
          Ready to continue your investment learning journey? You're on a {user?.streakDays}-day streak!
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Current Level"
          value={user?.level || 0}
          change="+1 this week"
          icon={Trophy}
          color="primary"
        />
        <StatsCard
          title="Total XP"
          value={user?.xp.toLocaleString() || '0'}
          change="+150 today"
          icon={Target}
          color="success"
        />
        <StatsCard
          title="Learning Streak"
          value={`${user?.streakDays || 0} days`}
          icon={Clock}
          color="warning"
        />
        <StatsCard
          title="Courses Completed"
          value="8"
          change="+2 this month"
          icon={BookOpen}
          color="primary"
        />
      </div>

      {/* Continue Learning Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </motion.section>

      {/* Featured Quiz Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Quiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} {...quiz} />
          ))}
        </div>
      </motion.section>

      {/* Community Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Community Highlights</h2>
        <div className="space-y-6">
          {discussions.map((post) => (
            <DiscussionPost key={post.id} {...post} />
          ))}
        </div>
      </motion.section>

      {/* AI Recommendations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="p-6 bg-gradient-to-r from-red-50 to-blue-50 border-red-200">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-r from-red-600 to-blue-800 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Recommendation
              </h3>
              <p className="text-gray-700 mb-4">
                Based on your progress in Stock Market Fundamentals, we recommend exploring 
                "Options Trading Basics" next to expand your investment strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-red-600 text-sm rounded-full border border-red-200">
                  Options Trading
                </span>
                <span className="px-3 py-1 bg-white text-blue-600 text-sm rounded-full border border-blue-200">
                  Risk Management
                </span>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>
    </div>
  );
};