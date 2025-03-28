import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#B22222', // Firebrick - a deeper red that's suitable for meat
    secondary: '#8B4513', // SaddleBrown - a warm brown color
    background: '#F5F5F5',
    surface: '#FFFFFF',
    error: '#B00020',
    text: '#121212',
    onSurface: '#121212',
    disabled: '#BDBDBD',
    placeholder: '#9E9E9E',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: '#B22222',
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
}; 