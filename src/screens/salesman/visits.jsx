import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SAMPLE_VISITS = [
  {
    id: '1',
    time: '9:30 AM - 10:45 AM',
    customer: 'ABC Corporation',
    address: '123 Main St, New York',
    duration: '75 min',
    distance: '12.3 mi',
    status: 'COMPLETED',
    sales: '$5,000',
  },
  {
    id: '2',
    time: '11:15 AM - Active',
    customer: 'XYZ Industries',
    address: '456 Park Ave, New York',
    duration: '-',
    distance: '8.7 mi',
    status: 'IN PROGRESS',
    sales: '-',
  },
  {
    id: '3',
    time: '2:30 PM',
    customer: 'Tech Solutions Inc',
    address: '789 Broadway, New York',
    duration: '-',
    distance: '15.2 mi',
    status: 'SCHEDULED',
    sales: '-',
  },
];

export default function Visits() {
  const visits = useMemo(() => SAMPLE_VISITS, []);

  const renderStatCard = (title, value, iconName, bgColor) => (
    <View style={styles.statCard}>
      <View style={styles.statLeft}>
        <Text style={styles.statTitle}>{title}</Text>
        <Text style={styles.statValue}>{value}</Text>
      </View>
      <View style={[styles.statIconWrapper, { backgroundColor: bgColor || '#eef' }]}>
        <Icon name={iconName} size={20} color="#4b5563" />
      </View>
    </View>
  );

  const renderVisit = ({ item }) => (
    <View style={styles.visitRow}>
      <View style={styles.visitLeft}>
        <Text style={styles.visitTime}>{item.time}</Text>
        <View style={{ marginTop: 6 }}>
          <Text style={styles.visitCustomer}>{item.customer}</Text>
          <Text style={styles.visitAddress}>{item.address}</Text>
        </View>
      </View>
      <View style={styles.visitMiddle}>
        <Text style={styles.smallText}>{item.duration}</Text>
        <Text style={styles.smallText}>{item.distance}</Text>
      </View>
      <View style={styles.visitRight}>
        <View style={[styles.badge, item.status === 'COMPLETED' ? styles.badgeGreen : item.status === 'IN PROGRESS' ? styles.badgeYellow : styles.badgeBlue]}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
        <Text style={[styles.salesText, { marginTop: 8 }]}>{item.sales}</Text>
        <View style={{ marginTop: 8 }}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="eye-outline" size={16} color="#0c3b6cff" />
            <Text style={styles.actionText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerCard}>
          <Text style={styles.headerSubtitleHeading}>Manage and track your field visits</Text>
          <View style={[styles.headerActionsLeft, { marginTop: 12 }] }>
            <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: '#0c2b4cff', marginRight: 8 }]}>
              <Icon name="compass-outline" size={16} color="#fff" />
              <Text style={styles.bigButtonText}>Plan Route</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: '#10b981' }]}>
              <Icon name="checkmark-done-outline" size={16} color="#fff" />
              <Text style={styles.bigButtonText}>Check In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Grid: 2 rows x 2 columns */}
        <View style={styles.statsGrid}>
          {renderStatCard('Total Visits', '3', 'people-outline', '#e6f2ff')}
          {renderStatCard('Completed', '1', 'time-outline', '#ecfdf5')}
          {renderStatCard('Total Distance', '36.2 mi', 'location-outline', '#f5f3ff')}
          {renderStatCard('Total Sales', '$5,000', 'cash-outline', '#ecfdf4')}
        </View>

        <View style={styles.pillsRow}>
          <TouchableOpacity style={styles.filterPill}>
            <Icon name="calendar-outline" size={16} color="#374151" />
            <Text style={styles.filterText}>27-07-2025</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterPill}>
            <Icon name="funnel-outline" size={16} color="#374151" />
            <Text style={styles.filterText}>All Status</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchInput}>
            <Icon name="search-outline" size={18} color="#9ca3af" />
            <TextInput placeholder="Search customers..." style={{ marginLeft: 12, flex: 1 }} />
          </View>
        </View>

        <View style={styles.listCard}>
          <FlatList data={visits} keyExtractor={(i) => i.id} renderItem={renderVisit} ItemSeparatorComponent={() => <View style={{ height: 12 }} />} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f6f8' },
  scroll: { padding: 16, paddingBottom: 40 },
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
  headerActionsLeft: { flexDirection: 'row', width: '100%' },
  headerHeadingWrap: { flex: 1, alignItems: 'flex-start', marginLeft: 12 },
  headerSubtitleHeading: { fontSize: 18, fontWeight: '700' },
  headerActionButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 8 },
  headerTitle: { fontSize: 20, fontWeight: '800' },
  headerSubtitle: { color: '#6b7280', marginTop: 6 },
  headerActions: { flexDirection: 'row' },
  bigButton: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8, marginLeft: 8 },
  bigButtonText: { color: '#fff', marginLeft: 8, fontWeight: '700' },

  // Stats
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 12 },
  statCard: { backgroundColor: '#fff', width: '48%', padding: 14, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 2, marginBottom: 12 },
  statLeft: {},
  statTitle: { color: '#6b7280', fontSize: 12 },
  statValue: { fontSize: 18, fontWeight: '800', marginTop: 6 },
  statIconWrapper: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },

  // Filters
  filterRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
  pillsRow: { flexDirection: 'row', marginVertical: 12 },
  searchRow: { marginBottom: 12 },
  searchInput: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', elevation: 1, width: '100%' },
  filterPill: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginRight: 8, elevation: 1 },
  filterText: { marginLeft: 8, color: '#374151' },

  // List
  listCard: { backgroundColor: 'transparent', padding: 0 },
  visitRow: { flexDirection: 'row', padding: 12, borderRadius: 10, backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', elevation: 1 },
  visitLeft: { flex: 2 },
  visitMiddle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  visitRight: { flex: 1, alignItems: 'flex-end', justifyContent: 'center' },
  visitTime: { color: '#374151', fontWeight: '700' },
  visitCustomer: { fontWeight: '800', fontSize: 15 },
  visitAddress: { color: '#9ca3af', marginTop: 4 },
  smallText: { color: '#6b7280' },

  // Badges & actions
  badge: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  badgeText: { fontSize: 12, fontWeight: '700' },
  badgeGreen: { backgroundColor: '#ecfdf5' },
  badgeYellow: { backgroundColor: '#fffbeb' },
  badgeBlue: { backgroundColor: '#eef2ff' },
  salesText: { fontWeight: '800', marginTop: 8 },
  actionButton: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#f8fafc' },
  actionText: { color: '#0c3b6cff', marginLeft: 8, fontWeight: '700' },
});
