import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../utils/useAuthContext';
import Dashboard from '../screens/salesman/dashboard';
import Visits from '../screens/salesman/visits';
import Customers from '../screens/salesman/customers';
import Expenses from '../screens/salesman/expenses';
import Reports from '../screens/salesman/reports';
// import {  } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function SalesmanAppStack() {
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
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Visits" component={Visits} />
      <Tab.Screen name="Customers" component={Customers} />
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen name="Reports" component={Reports} />
    </Tab.Navigator>
  );
}
