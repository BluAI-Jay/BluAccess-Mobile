import * as React from 'react';
import { StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/utils/useAuthContext';

function App() {
  // Ensure vector icon fonts are loaded (Android requires explicit load for some setups)
  Ionicons.loadFont && Ionicons.loadFont();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" hidden={false} />
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;