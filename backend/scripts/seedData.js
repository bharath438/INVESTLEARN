const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/investlearn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schemas (same as in server.js)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
  streakDays: { type: Number, default: 0 },
  achievements: [{ type: String }],
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  duration: { type: String, required: true },
  lessons: [{
    title: { type: String, required: true },
    content: { type: String, required: true },
    videoUrl: { type: String },
    duration: { type: Number },
    order: { type: Number, required: true }
  }],
  tags: [{ type: String }],
  rating: { type: Number, default: 0 },
  students: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  timeLimit: { type: Number, required: true },
  questions: [{
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: Number, required: true },
    explanation: { type: String },
    points: { type: Number, default: 10 }
  }],
  totalPoints: { type: Number, default: 0 },
  participants: { type: Number, default: 0 }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);
const Quiz = mongoose.model('Quiz', quizSchema);

// Seed data
const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Quiz.deleteMany({});

    // Sample courses
    const courses = [
      {
        title: 'Stock Market Fundamentals',
        description: 'Learn the basics of stock trading, market analysis, and risk management for beginners.',
        thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=500',
        level: 'Beginner',
        duration: '4.5 hours',
        lessons: [
          {
            title: 'Introduction to Stock Markets',
            content: 'Understanding what stock markets are and how they work...',
            order: 1,
            duration: 30
          },
          {
            title: 'Reading Stock Charts',
            content: 'Learn how to interpret stock charts and price movements...',
            order: 2,
            duration: 45
          }
        ],
        tags: ['stocks', 'fundamentals', 'trading'],
        rating: 4.8,
        students: 12450
      },
      {
        title: 'Advanced Portfolio Management',
        description: 'Master advanced techniques for portfolio optimization and asset allocation.',
        thumbnail: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=500',
        level: 'Advanced',
        duration: '6 hours',
        lessons: [
          {
            title: 'Modern Portfolio Theory',
            content: 'Understanding the mathematical foundation of portfolio optimization...',
            order: 1,
            duration: 60
          }
        ],
        tags: ['portfolio', 'optimization', 'advanced'],
        rating: 4.9,
        students: 8920
      },
      {
        title: 'Cryptocurrency Investing',
        description: 'Navigate the world of digital assets and blockchain technology.',
        thumbnail: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=500',
        level: 'Intermediate',
        duration: '3 hours',
        lessons: [
          {
            title: 'Understanding Blockchain',
            content: 'The technology behind cryptocurrencies...',
            order: 1,
            duration: 40
          }
        ],
        tags: ['cryptocurrency', 'blockchain', 'digital assets'],
        rating: 4.6,
        students: 9500
      }
    ];

    const createdCourses = await Course.insertMany(courses);
    console.log(`Created ${createdCourses.length} courses`);

    // Sample quizzes
    const quizzes = [
      {
        title: 'Market Analysis Challenge',
        description: 'Test your knowledge of technical and fundamental analysis',
        courseId: createdCourses[0]._id,
        difficulty: 'Medium',
        timeLimit: 15,
        questions: [
          {
            question: 'What is a bull market?',
            options: [
              'A market with declining prices',
              'A market with rising prices',
              'A market with no price movement',
              'A market only for commodities'
            ],
            correctAnswer: 1,
            explanation: 'A bull market is characterized by rising stock prices and investor optimism.',
            points: 10
          },
          {
            question: 'What does P/E ratio stand for?',
            options: [
              'Price/Equity',
              'Profit/Earnings',
              'Price/Earnings',
              'Portfolio/Evaluation'
            ],
            correctAnswer: 2,
            explanation: 'P/E ratio stands for Price-to-Earnings ratio, a valuation metric.',
            points: 10
          }
        ],
        totalPoints: 20,
        participants: 3420
      }
    ];

    const createdQuizzes = await Quiz.insertMany(quizzes);
    console.log(`Created ${createdQuizzes.length} quizzes`);

    console.log('Seed data created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();