import React, { useState, useContext } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../utils/useAuthContext';

import EmployeeDashboard from '../screens/employee/dashboard';
import Attandance from '../screens/employee/attandance';
import Regularize from '../screens/employee/regularize';
import Profile from '../screens/employee/profile';
import LeaveApplication from '../screens/employee/leave-application';
import ShortLeave from '../screens/employee/short-leave';
import HolidayList from '../screens/employee/holiday-list';
import RaiseTicket from '../screens/employee/raise-ticket';
import Paystubs from '../screens/employee/paystubs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Dummy screen for More tab
function DummyScreen() {
  return null;
}

// Tab navigator with 4 main tabs + More
function MainTabs({ setShowMenu }) {
  const { logout } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={logout}
            style={{ marginRight: 15, flexDirection: 'row', alignItems: 'center' }}
          >
            <Text style={{ marginRight: 6 }}>Logout</Text>
            <Icon name="log-out-outline" size={20} color="#000" />
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={EmployeeDashboard}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Attandance"
        component={Attandance}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'checkmark-done' : 'checkmark-done-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Regularize"
        component={Regularize}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'calendar' : 'calendar-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'person' : 'person-outline'} size={size} color={color} />
          ),
        }}
      />

      {/* More tab */}
      <Tab.Screen
        name="More"
        component={DummyScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => setShowMenu(true)}>
              <Icon name="ellipsis-vertical" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Root Stack navigator
export default function EmployeeAppStack() {
  const [showMenu, setShowMenu] = useState(false);

  const extraOptions = [
    { name: 'Leave Application', screen: 'LeaveApplication' },
    { name: 'Short Leave Application', screen: 'ShortLeave' },
    { name: 'Holiday List', screen: 'HolidayList' },
    { name: 'Raise Ticket', screen: 'RaiseTicket' },
    { name: 'US Paystubs', screen: 'Paystubs' },
  ];

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="MainTabs"
          options={{ headerShown: false }}
        >
          {() => <MainTabs setShowMenu={setShowMenu} />}
        </Stack.Screen>

        {/* Hidden screens outside Tab.Navigator */}
        <Stack.Screen name="LeaveApplication" component={LeaveApplication} />
        <Stack.Screen name="ShortLeave" component={ShortLeave} />
        <Stack.Screen name="HolidayList" component={HolidayList} />
        <Stack.Screen name="RaiseTicket" component={RaiseTicket} />
        <Stack.Screen name="Paystubs" component={Paystubs} />
      </Stack.Navigator>

      {/* Popup Modal */}
      <Modal transparent visible={showMenu} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowMenu(false)}
        >
          <View style={styles.popupMenu}>
            {extraOptions.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.optionButton}
                onPress={() => {
                  setShowMenu(false);
                  // Navigate to hidden screens in the root stack
                  navigationRef.current?.navigate(item.screen);
                }}
              >
                <Text style={styles.optionText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

export const navigationRef = React.createRef();

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  popupMenu: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 6,
  },
  optionButton: {
    padding: 12,
  },
  optionText: {
    fontSize: 16,
  },
});
