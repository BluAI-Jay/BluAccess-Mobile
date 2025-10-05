import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import logo from '../../assets/logo.png';

const sampleCustomers = [
  {
    id: '1',
    name: 'Global Tech',
    address: '1002 pec campus, Chandigarh, Chandigarh 160012, India',
    industry: 'Embedded and AI',
    lastVisit: 'Never',
    revenue: '$0',
    status: 'ACTIVE',
  },
  {
    id: '2',
    name: 'blulai',
    address: 'House no 25/1/4, Dehradun, Uttarakhand 248002, India',
    industry: 'Embedded and AI',
    lastVisit: 'Never',
    revenue: '$0',
    status: 'ACTIVE',
  },
  {
    id: '3',
    name: 'BluAI Private Ltd.',
    address: '#1002 Pec Sector 12 Chandigarh, Chandigarh, Chandigarh 160012, India',
    industry: 'Labourum in illo est',
    lastVisit: 'Never',
    revenue: '$0',
    status: 'ACTIVE',
  },
  {
    id: '4',
    name: 'Mcpherson Mills Traders',
    address: 'Quibusdam enim fuga 43, Alias aut elus repre',
    industry: 'Trading',
    lastVisit: 'Never',
    revenue: '$0',
    status: 'ACTIVE',
  },
];

export default function Customers({ navigation }) {
  const renderStat = (title, value, iconName) => (
    <View style={styles.statCard}>
      <Text style={styles.statTitle}>{title}</Text>
      <View style={styles.statRow}>
        <Text style={styles.statValue}>{value}</Text>
        <View style={styles.statIconWrap}>
          <Icon name={iconName} size={18} color="#2563eb" />
        </View>
      </View>
    </View>
  );

  const renderCustomer = ({ item }) => (
    <View style={styles.customerCard}>
      <View style={styles.customerHeader}>
        <Text style={styles.customerName}>{item.name}</Text>
        <View style={styles.statusBadge}><Text style={styles.statusText}>{item.status}</Text></View>
      </View>
      <Text style={styles.customerAddress}>{item.address}</Text>
      <Text style={styles.customerMeta}>Industry: <Text style={{ fontWeight: '600' }}>{item.industry}</Text></Text>

      <View style={styles.customerFooterRow}>
        <View>
          <Text style={styles.footerLabel}>LAST VISIT</Text>
          <Text style={styles.footerValue}>{item.lastVisit}</Text>
        </View>
        <View>
          <Text style={styles.footerLabel}>TOTAL REVENUE</Text>
          <Text style={[styles.footerValue, { color: '#10b981' }]}>{item.revenue}</Text>
        </View>
      </View>

      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.ghostButton}><Icon name="eye-outline" size={16} color="#374151" /><Text style={styles.ghostText}>  View</Text></TouchableOpacity>
        <TouchableOpacity style={styles.primarySmall}><Icon name="calendar-outline" size={16} color="#fff" /><Text style={styles.primarySmallText}>  Leads</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topActions}>
          <View style={styles.headerActionsLeft}>
            <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: '#0c2b4cff', marginRight: 8 }]}> 
              <Icon name="calendar-outline" size={16} color="#fff" />
              <Text style={styles.bigButtonText}>  Schedule Visits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: '#2563eb' }]}> 
              <Icon name="add" size={16} color="#fff" />
              <Text style={styles.bigButtonText}>  Add Customer</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsGrid}>
          {renderStat('Total Customers', '4', 'people-outline')}
          {renderStat('Active Accounts', '4', 'bar-chart-outline')}
          {renderStat('Total Revenue', '$0', 'cash-outline')}
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Icon name="search-outline" size={18} color="#9ca3af" />
            <TextInput placeholder="Search customers..." style={styles.searchInput} />
          </View>
          <TouchableOpacity style={styles.filterButton}><Icon name="filter-outline" size={18} color="#374151" /></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Icon name="layers-outline" size={18} color="#374151" /></TouchableOpacity>
        </View>

        <FlatList
          data={sampleCustomers}
          renderItem={renderCustomer}
          keyExtractor={(i) => i.id}
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f6f8' },
  container: { padding: 16, paddingBottom: 32 },
  headerCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 16,
    elevation: 2,
  },
  topActions: { width: '100%', marginBottom: 12 },
  headerActionsLeft: { flexDirection: 'row', width: '100%' },
  headerSubtitleHeading: { fontSize: 18, fontWeight: '700' },
  headerActionButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 8 },
  bigButtonText: { color: '#fff', marginLeft: 8, fontWeight: '700' },

  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 12 },
  statCard: { backgroundColor: '#fff', width: '48%', padding: 14, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 2, marginBottom: 12 },
  statLeft: {},
  statTitle: { color: '#6b7280', fontSize: 12 },
  statValue: { fontSize: 18, fontWeight: '800', marginTop: 6 },
  statIconWrapper: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },

  searchRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
  searchBox: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, borderWidth: 1, borderColor: '#eef2f7' },
  searchInput: { marginLeft: 8, flex: 1 },
  filterButton: { width: 44, height: 44, backgroundColor: '#fff', marginLeft: 8, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#eef2f7' },

  customerCard: { backgroundColor: '#fff', padding: 12, borderRadius: 12, marginBottom: 12 },
  customerHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  customerName: { fontSize: 16, fontWeight: '800' },
  statusBadge: { backgroundColor: '#ecfdf5', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  statusText: { color: '#065f46', fontWeight: '700', fontSize: 12 },
  customerAddress: { color: '#6b7280', marginTop: 6 },
  customerMeta: { color: '#6b7280', marginTop: 8 },
  customerFooterRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  footerLabel: { color: '#9ca3af', fontSize: 12 },
  footerValue: { color: '#374151', fontWeight: '700', marginTop: 4 },

  cardActions: { flexDirection: 'row', marginTop: 12, justifyContent: 'space-between' },
  ghostButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f5f9', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 10, flex: 1, justifyContent: 'center', marginRight: 8 },
  ghostText: { color: '#374151', fontWeight: '700' },
  primarySmall: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2563eb', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 10, flex: 1, justifyContent: 'center' },
  primarySmallText: { color: '#fff', fontWeight: '700' },
});
