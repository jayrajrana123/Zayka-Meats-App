#!/bin/bash

# Install TypeScript dependencies
npm install --save-dev typescript @types/react @types/react-native @tsconfig/react-native

# Install other type definitions
npm install --save-dev @types/node @types/react-native-vector-icons

# Install runtime dependencies
npm install react react-native react-native-paper react-native-safe-area-context @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-vector-icons react-native-screens react-native-gesture-handler @supabase/supabase-js react-native-url-polyfill @react-native-async-storage/async-storage

echo "Type definitions and dependencies installed successfully!" 