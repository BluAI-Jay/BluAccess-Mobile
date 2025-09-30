import React, { useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { AuthContext } from '../../utils/useAuthContext';

export default function SalesmanLogin({ navigation }) {
  const { login } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, backgroundColor: '#8eb9e5ff', paddingTop: 24 }}>
      <View style={{ height: "30%", backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Image
              source={logo}
              style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 16 }}
            /> */}
      </View>
      <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#f4f6f8', padding: 16, gap: 8 }}>
        <Text style={{ fontSize: 24, textAlign: "center", fontWeight: 600 }}>Welcome to EAMMS for Sales</Text>
        <Text>Employee Attendance Management and Monitoring System</Text>
        <Text>Invalid username, password, or company code</Text>
        <TextInput placeholder="Enter company code" style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <TextInput placeholder="Enter email address" secureTextEntry style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <TextInput placeholder="Enter password" style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <TextInput placeholder="256358" secureTextEntry style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <TextInput placeholder="Enter code here" style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <Button title="Login as Salesman" onPress={() => login("salesman")} />
        <Button title="Employee Login" onPress={() => navigation.replace('EmployeeLogin')} />
      </View>
    </View>
  );
}
