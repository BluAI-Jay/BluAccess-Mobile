import React, { useContext, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../utils/useAuthContext';
import logo from '../../assets/logo.png';

export default function EmployeeLogin({ navigation }) {
  const { login } = useContext(AuthContext);
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.brandWrap}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.brandTitle}>Welcome to EAMMS</Text>
          <Text style={styles.brandSubtitle}>Employee Attendance Management and Monitoring System</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.formArea}>
            <Text style={styles.heading}>Employee Login</Text>
            <Text style={styles.subheading}>All fields are required</Text>

            <View style={styles.inputRow}>
              <Icon name="business-outline" size={18} color="#6b7280" />
              <TextInput placeholder="Enter Company Code" value={company} onChangeText={setCompany} style={styles.input} />
            </View>

            <View style={styles.inputRow}>
              <Icon name="mail-outline" size={18} color="#6b7280" />
              <TextInput placeholder="Enter Email Address" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
            </View>

            <View style={styles.inputRow}>
              <Icon name="lock-closed-outline" size={18} color="#6b7280" />
              <TextInput placeholder="Enter Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
            </View>

            <View style={styles.otpRow}>
              <View style={styles.otpBox}>
                <Text style={styles.otpText}>258483</Text>
              </View>
            </View>

            <View style={styles.inputRow}>
                <TextInput
                  placeholder="Enter code here"
                  style={styles.input}
                  value={captcha}
                  onChangeText={setCaptcha}
                  testID="captchaInput"
                  accessibilityLabel="captchaInput"
                  nativeID="captchaInput"
                />
              </View>

            <View style={styles.rowBetween}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.checkbox} />
                <Text style={styles.rememberText}>Remember Me</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={() => login('employee')}>
              <Text style={styles.primaryText}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.orRow}><View style={styles.orLine} /><Text style={styles.orText}>OR</Text><View style={styles.orLine} /></View>

            <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.replace('SalesmanLogin')}>
              <Text style={styles.primaryText}>Go to Salesman</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f6f8' },
  container: { padding: 16, alignItems: 'center', justifyContent: 'center' },
  card: { width: '95%', maxWidth: 520, backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', flexDirection: 'column', elevation: 3 },
  brandWrap: { 
    height: Dimensions.get('window').height * 0.3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 18 : 12,
    // kept simple: no rounded corners or shadow to avoid a card-like appearance
  },
  formArea: { padding: 20, marginTop: 8 },
  logo: { width: 180, height: 72, marginBottom: 14 },
  brandTitle: { fontWeight: '800', marginTop: 10, fontSize: 26, textAlign: 'center', color: '#0f172a' },
  brandSubtitle: { color: '#6b7280', marginTop: 8, textAlign: 'center', fontSize: 15, maxWidth: 560, lineHeight: 20 },
  heading: { fontSize: 18, fontWeight: '800', textAlign: 'center' },
  subheading: { color: '#9ca3af', textAlign: 'center', marginBottom: 12 },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 999, paddingHorizontal: 12, paddingVertical: 12, marginBottom: 12, borderWidth: 1, borderColor: '#eef2f7' },
  input: { marginLeft: 12, flex: 1, height: 24, fontSize: 15 },
  otpRow: { flexDirection: 'column', alignItems: 'stretch', marginTop: 8, marginBottom: 8 },
  otpBox: { backgroundColor: '#eef2f7', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, marginBottom: 8, alignItems: 'center' },
  otpText: { fontWeight: '800', letterSpacing: 4, fontSize: 16 },
  otpInputWrap: { width: '100%' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  checkbox: { width: 18, height: 18, borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 4, marginRight: 8 },
  rememberText: { color: '#374151' },
  forgot: { color: '#2563eb', fontWeight: '700' },
  primaryButton: { backgroundColor: '#2563eb', paddingVertical: 14, borderRadius: 999, marginTop: 12, alignItems: 'center', width: '100%' },
  primaryText: { color: '#fff', fontWeight: '800' },
  orRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
  orLine: { height: 1, backgroundColor: '#e6eef8', flex: 1 },
  orText: { marginHorizontal: 8, color: '#9ca3af', fontWeight: '700' },
  ssoButton: { backgroundColor: '#6d28d9', paddingVertical: 14, borderRadius: 999, alignItems: 'center', marginTop: 8, width: '100%' },
  ssoText: { color: '#fff', fontWeight: '800' },
  secondaryRow: { flexDirection: 'column', marginTop: 12, gap: 8 },
  ghostButton: { backgroundColor: '#fff', paddingVertical: 12, borderRadius: 999, borderWidth: 1, borderColor: '#eef2f7', width: '100%', alignItems: 'center', marginBottom: 8 },
  ghostText: { color: '#374151', fontWeight: '700' },
  faceButton: { marginTop: 8, backgroundColor: '#fff', paddingVertical: 12, borderRadius: 999, borderWidth: 1, borderColor: '#eef2f7', alignItems: 'center', width: '100%' },
  faceText: { color: '#374151', fontWeight: '700' },
});
