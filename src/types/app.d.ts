// Type declarations for the app
// This helps TypeScript understand module imports

// Image imports
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// Third-party libraries
declare module 'react-native-vector-icons/*'; 