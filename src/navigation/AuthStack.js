import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SalesmanLogin from '../screens/auth/salesman-login';
import EmployeeLogin from '../screens/auth/employee-login';

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
