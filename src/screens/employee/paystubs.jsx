import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function Paystubs() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>US Paystubs</Text>
        <Text style={styles.subtitle}>Dummy Paystubs screen for navigation testing.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f6f8', justifyContent: 'center', padding: 16 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, elevation: 2 },
  title: { fontSize: 20, fontWeight: '800', marginBottom: 8 },
  subtitle: { color: '#6b7280' },
});
