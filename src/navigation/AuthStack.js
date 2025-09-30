import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SalesmanLogin from '../screens/auth/SalesmanLogin';
import EmployeeLogin from '../screens/auth/EmployeeLogin';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false, 
      }}>
      <Stack.Screen name="EmployeeLogin" component={EmployeeLogin} />
      <Stack.Screen name="SalesmanLogin" component={SalesmanLogin} />
    </Stack.Navigator>
  );
}
