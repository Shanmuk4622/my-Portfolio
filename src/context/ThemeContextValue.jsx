import { createContext } from 'react';

// Separate file to hold the context value so Fast Refresh works correctly
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});
