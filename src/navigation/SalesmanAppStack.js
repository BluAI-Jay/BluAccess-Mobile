import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../utils/useAuthContext';
import Dashboard from '../screens/salesman/dashboard';
import Visits from '../screens/salesman/visits';
import Customers from '../screens/salesman/customers';
import Expenses from '../screens/salesman/expenses';
import Reports from '../screens/salesman/reports';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function SalesmanAppStack() {
  const { logout } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={logout} style={{ marginRight: 15, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 6 }}>Logout</Text>
            <Icon name="log-out-outline" size={20} color="#000" />
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Visits"
        component={Visits}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'calendar' : 'calendar-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Customers"
        component={Customers}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'people' : 'people-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'cash' : 'cash-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'stats-chart' : 'stats-chart-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
