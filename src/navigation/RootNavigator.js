import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './EmployeeAppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../utils/useAuthContext';
import AuthStack from './AuthStack';
import SalesmanAppStack from './SalesmanAppStack';
import EmployeeAppStack from './EmployeeAppStack';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user === null ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : user.role === 'salesman' ? (
          <Stack.Screen name="SalesmanApp" component={SalesmanAppStack} />
        ) : (
          <Stack.Screen name="EmployeeApp" component={EmployeeAppStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
