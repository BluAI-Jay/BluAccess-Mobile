import React, { useContext } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { AuthContext } from '../../utils/useAuthContext';
// import logo from '../../assets/images/logo.png';

export default function EmployeeLogin({ navigation }) {
  const { login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, backgroundColor: '#8eb9e5ff', paddingTop: 24 }}>
      <View style={{height: "30%", backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Image
          source={logo}
          style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 16 }}
        /> */}
      </View>
      <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#f4f6f8', padding: 16, gap: 8 }}>
        <Text style={{fontSize: 24, textAlign: "center", fontWeight: 600}}>Welcome to EAMMS</Text>
        <Text>Employee Attendance Management and Monitoring System</Text>
        <Text>Invalid username, password, or company code</Text>
        <TextInput placeholder="Enter Company Code" style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <TextInput placeholder="Enter Email Address" secureTextEntry style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <TextInput placeholder="Enter Password" style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <TextInput placeholder="256358" secureTextEntry style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <TextInput placeholder="Enter code here" style={{ borderWidth: 1, margin: 8, padding: 8 }} />
        <Button title="Login as Employee" onPress={() => login("employee")} />
        <Button title="Salesman Login" onPress={() => navigation.replace('SalesmanLogin')} />
      </View>
    </View>
  );
}
