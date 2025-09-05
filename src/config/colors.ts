export const colors = {
  // Primary Brand Colors
  primary: {
    red: '#DC2626',
    darkBlue: '#1E3A8A',
    white: '#FFFFFF',
  },
  
  // Supporting Colors
  secondary: {
    lightBlue: '#3B82F6',
    success: '#059669',
    warning: '#D97706',
    error: '#EF4444',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #DC2626 0%, #1E3A8A 100%)',
    secondary: 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)',
    success: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
  },
  
  // Gray Scale
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  }
} as const;