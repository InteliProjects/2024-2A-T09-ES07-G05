module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
      '^@components/(.*)$': '<rootDir>/src/components/shared/$1',
      '^@components-layout/(.*)$': '<rootDir>/src/components/layout/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@assets/(.*)$': '<rootDir>/src/assets/$1',
      '^@styles/(.*)$': '<rootDir>/src/styles/$1',
      '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      'services/(.*)$': '<rootDir>/src/services/$1',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx'],
  };
  