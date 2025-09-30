import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from '../utils/useAuthContext';
import { TouchableOpacity, Text } from 'react-native';
import EmployeeDashboard from '../screens/employee/dashboard';
import Attandance from '../screens/employee/attandance';
import Regularize from '../screens/employee/regularize';
import Profile from '../screens/employee/Profile';

const Tab = createBottomTabNavigator();

export default function EmployeeAppStack() {
  const { logout } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
            <Text>Logout</Text>
            {/* <Icon name="log-out-outline" size={24} color="#000" /> */}
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen name="Dashboard" component={EmployeeDashboard} />
      <Tab.Screen name="Attandance" component={Attandance} />
      <Tab.Screen name="Regularize" component={Regularize} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
