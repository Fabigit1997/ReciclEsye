import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import EscolhaScreen from './screens/EscolhaScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterCollectorScreen from './screens/RegisterCollectorScreen';
import LoginScreen from './src/screens/LoginScreen';
import MaterialSelectionScreen from './src/screens/MaterialSelectionScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
  <Stack.Screen 
    name="Splash" 
    component={SplashScreen} 
    options={{ headerShown: false }} 
  />
  <Stack.Screen 
    name="Escolha" 
    component={EscolhaScreen} 
    options={{ headerShown: false }} 
  />
  <Stack.Screen 
    name="Register" 
    component={RegisterScreen} 
    options={{ headerShown: false }} 
  />
  <Stack.Screen 
    name="RegisterCollector" 
    component={RegisterCollectorScreen} 
    options={{ headerShown: false }} 
  />
  <Stack.Screen 
    name="Login" 
    component={LoginScreen} 
    options={{ headerShown: false }} 
  />
  <Stack.Screen 
    name="MaterialSelection" 
    component={MaterialSelectionScreen} 
    options={{ headerShown: false }} 
  />
  <Stack.Screen 
    name="Map" 
    component={MapScreen} 
    options={{ headerShown: false }} 
  />
</Stack.Navigator>

    </NavigationContainer>
  );
}
