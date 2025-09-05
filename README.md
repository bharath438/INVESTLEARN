# InvestLearn - Retail Investment Learning Platform

A comprehensive full-stack platform delivering personalized learning modules, gamified quizzes, and community discussions for retail investors.

## 🎨 Color Palette

### Primary Colors
- **Trust Red**: `#DC2626` - Primary actions, alerts, important highlights
- **Deep Blue**: `#1E3A8A` - Headers, navigation, trust elements
- **Pure White**: `#FFFFFF` - Background, cards, clean spaces

### Supporting Colors
- **Light Blue**: `#3B82F6` - Secondary actions, links
- **Success Green**: `#059669` - Positive feedback, completed states
- **Warning Amber**: `#D97706` - Cautions, pending states
- **Gray Scale**: `#F8FAFC` to `#1E293B` - Text hierarchy, borders

## 🎯 UX Design Guidelines

### Typography Hierarchy
- **Headings**: Inter font family, weights 600-800
- **Body Text**: Inter font family, weight 400-500
- **Captions**: 14px, weight 400, #64748B color

### Spacing System
- Base unit: 8px
- Component padding: 16px, 24px, 32px
- Section margins: 48px, 64px, 96px

### Interactive Elements
- **Buttons**: Rounded corners (8px), hover states with 0.2s transitions
- **Cards**: Subtle shadows, 12px border radius
- **Forms**: Clear labels, validation states, focus indicators

## 🏗️ Architecture

### Frontend (React + TypeScript)
- Component-based architecture
- Context API for state management
- React Router for navigation
- Framer Motion for animations
- Recharts for analytics visualization

### Backend (Node.js + Express)
- RESTful API design
- JWT authentication
- MongoDB with Mongoose ODM
- Socket.io for real-time features
- Winston for logging

### Database Schema
```
Users: { profile, progress, achievements, preferences }
Courses: { content, difficulty, tags, analytics }
Quizzes: { questions, scoring, leaderboards }
Communities: { discussions, posts, interactions }
Analytics: { engagement, completion, performance }
```

## 🚀 Features

### Learning Modules
- Interactive content delivery
- Progress tracking with visual indicators
- Adaptive difficulty based on performance
- Bookmarking and note-taking capabilities

### Gamification
- Points and XP system
- Achievement badges
- Global and friend leaderboards
- Streak counters and challenges

### Community Features
- Discussion forums by topic
- Expert Q&A sessions
- Peer mentoring system
- Success story sharing

### AI Recommendations
- Content personalization based on learning style
- Skill gap analysis
- Career path suggestions
- Market trend integration

## 📱 Responsive Design

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

### Mobile-First Approach
- Touch-friendly interactions
- Simplified navigation
- Optimized content hierarchy
- Fast loading optimizations

## 🔒 Security Features
- JWT-based authentication
- Input validation and sanitization
- Rate limiting
- CORS protection
- Secure password hashing

## 📊 Analytics & Insights
- Learning progress dashboards
- Engagement metrics
- Performance analytics
- Community activity tracking
- ROI measurement tools