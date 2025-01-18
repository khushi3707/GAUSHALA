import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Importing the navigator

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />  {/* Use AppNavigator to manage screens */}
    </NavigationContainer>
  );
};

export default App;
