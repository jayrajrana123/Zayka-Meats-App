// Import Jest native extensions
import '@testing-library/jest-native/extend-expect';

// Mock modules that might cause issues in testing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

// Mock theme provider
jest.mock('react-native-paper', () => {
  const ActualReactNativePaper = jest.requireActual('react-native-paper');
  return {
    ...ActualReactNativePaper,
    useTheme: () => ({
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
      },
    }),
  };
}); 