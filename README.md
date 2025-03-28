# Zayka App

A React Native mobile application for ordering fresh meat products.

## Features

- User authentication
- Browse meat categories
- View product details
- Shopping cart functionality
- Order tracking
- User profile management

## Tech Stack

- React Native
- TypeScript
- React Navigation
- React Native Paper
- Supabase
- Jest & React Native Testing Library
- ESLint & Prettier

## Prerequisites

- Node.js >= 16
- npm or yarn
- React Native development environment setup
- Android Studio / Xcode (for emulators)
- Supabase account

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/zayka-app.git
cd zayka-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the Metro bundler:
```bash
npm start
# or
yarn start
```

5. Run the app:
```bash
# For Android
npm run android
# or
yarn android

# For iOS
npm run ios
# or
yarn ios
```

## Project Structure

```
src/
├── assets/         # Images, fonts, and other static files
├── components/     # Reusable UI components
├── contexts/       # React Context providers
├── navigation/     # Navigation configuration
├── screens/        # Screen components
├── services/       # API and external service integrations
├── theme/          # Theme configuration
├── types/          # TypeScript type definitions
└── utils/          # Utility functions and helpers
```

## Development

### Code Style

This project uses ESLint and Prettier for code formatting and linting. To format your code:

```bash
npm run lint:fix
# or
yarn lint:fix
```

### Testing

Run tests:
```bash
npm test
# or
yarn test
```

Generate coverage report:
```bash
npm run test:coverage
# or
yarn test:coverage
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. #   Z a y k a - M e a t s - A p p  
 #   Z a y k a - M e a t s - A p p  
 