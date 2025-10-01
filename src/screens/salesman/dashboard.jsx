import React, { useMemo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ACTIVITIES = [
  {
    id: '1',
    title: 'ABC Corporation',
    subtitle: 'Check-in: 9:30 AM - Check-out: 10:45 AM',
    sales: '$5,000',
    status: 'Completed',
  },
  {
    id: '2',
    title: 'XYZ Industries',
    subtitle: 'Check-in: 11:15 AM',
    sales: '-',
    status: 'In Progress',
  },
  {
    id: '3',
    title: 'Tech Solutions Inc',
    subtitle: 'Scheduled: 2:30 PM',
    sales: '-',
    status: 'Upcoming',
  },
];

export default function Dashboard() {
  const activities = useMemo(() => ACTIVITIES, []);

  const renderActivity = ({ item }) => (
    <View style={styles.activityItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.activityTitle}>{item.title}</Text>
        <Text style={styles.activitySubtitle}>{item.subtitle}</Text>
        {item.sales && item.sales !== '-' ? (
          <Text style={styles.activitySales}>Sales: {item.sales}</Text>
        ) : null}
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <View style={[styles.statusBadge, item.status === 'Completed' ? styles.badgeGreen : item.status === 'In Progress' ? styles.badgeYellow : styles.badgeBlue]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcome}>Welcome back, Aman Kumar!</Text>
        <Text style={styles.dateText}>Saturday, September 27, 2025</Text>
        {/* Stacked stat cards: one after another vertically */}
        <View style={styles.statsColumn}>
          <View style={styles.statCardFull}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.statIcon, { backgroundColor: '#eff6ff' }]}><Icon name="people-outline" size={20} color="#0f172a" /></View>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.statLabel}>Visits Today</Text>
                  <Text style={styles.statValueLarge}>12</Text>
                </View>
              </View>
              <Text style={styles.deltaText}>+2</Text>
            </View>
          </View>

          <View style={styles.statCardFull}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.statIcon, { backgroundColor: '#ecfdf5' }]}><Icon name="location-outline" size={20} color="#0f172a" /></View>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.statLabel}>Distance Traveled</Text>
                  <Text style={styles.statValueLarge}>156 mi</Text>
                </View>
              </View>
              <Text style={styles.deltaText}>+12 mi</Text>
            </View>
          </View>

          <View style={styles.statCardFull}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.statIcon, { backgroundColor: '#f0f9ff' }]}><Icon name="time-outline" size={20} color="#0f172a" /></View>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.statLabel}>Time in Field</Text>
                  <Text style={styles.statValueLarge}>8.5 hrs</Text>
                </View>
              </View>
              <Text style={styles.deltaText}>+1.2 hrs</Text>
            </View>
          </View>

          <View style={styles.statCardFull}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.statIcon, { backgroundColor: '#fffbeb' }]}><Icon name="cash-outline" size={20} color="#0f172a" /></View>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.statLabel}>Sales Closed</Text>
                  <Text style={styles.statValueLarge}>$45,000</Text>
                </View>
              </View>
              <Text style={[styles.deltaText, { color: '#10b981' }]}>+$5,000</Text>
            </View>
          </View>
        </View>

        {/* Stack: Today's Route then Recent Activities */}
        <View style={{ marginTop: 16 }}>
          <View style={styles.routeCard}>
            <Text style={styles.sectionTitle}>Today's Route</Text>
            <View style={styles.mapMock}>
              <View style={[styles.pin, { left: '20%', top: '40%', backgroundColor: '#10b981' }]}><Text style={styles.pinText}>1</Text></View>
              <View style={[styles.pin, { left: '40%', top: '20%', backgroundColor: '#10b981' }]}><Text style={styles.pinText}>2</Text></View>
              <View style={[styles.pin, { left: '60%', top: '45%', backgroundColor: '#60a5fa' }]}><Text style={styles.pinText}>3</Text></View>
              <View style={[styles.pin, { left: '80%', top: '60%', backgroundColor: '#9ca3af' }]}><Text style={styles.pinText}>4</Text></View>
            </View>
            <TouchableOpacity style={styles.mapButton}>
              <Icon name="navigate-outline" size={16} color="#374151" />
              <Text style={styles.mapButtonText}>Interactive Map View</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.activitiesCard, { marginTop: 12 }] }>
            <Text style={styles.sectionTitle}>Recent Activities</Text>
            <FlatList data={activities} keyExtractor={(i) => i.id} renderItem={renderActivity} ItemSeparatorComponent={() => <View style={{ height: 10 }} />} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f6f8' },
  content: { padding: 16, paddingBottom: 40 },
  welcome: { fontSize: 22, fontWeight: '700', marginBottom: 4 },
  dateText: { color: '#6b7280', marginBottom: 12 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  statsColumn: { flexDirection: 'column' },
  statCardFull: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 10, elevation: 2 },
  statCard: { backgroundColor: '#fff', flex: 1, marginRight: 8, padding: 14, borderRadius: 10, alignItems: 'flex-start' },
  statIcon: { backgroundColor: '#eef2ff', padding: 8, borderRadius: 8, marginBottom: 8 },
  statValue: { fontSize: 18, fontWeight: '700' },
  statValueLarge: { fontSize: 22, fontWeight: '800', marginTop: 6 },
  statLabel: { color: '#6b7280', marginTop: 6 },
  deltaText: { color: '#10b981', fontWeight: '700' },
  rowCards: { flexDirection: 'row', gap: 12 },
  routeCard: { backgroundColor: '#fff', padding: 12, borderRadius: 10, elevation: 2 },
  activitiesCard: { backgroundColor: '#fff', padding: 12, borderRadius: 10, elevation: 2 },
  sectionTitle: { fontWeight: '700', marginBottom: 12 },
  mapMock: { height: 220, backgroundColor: '#f3f4f6', borderRadius: 8, position: 'relative', overflow: 'hidden' },
  pin: { position: 'absolute', width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', elevation: 3 },
  pinText: { color: '#fff', fontWeight: '700' },
  mapButton: { position: 'absolute', left: 12, bottom: 12, backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, flexDirection: 'row', alignItems: 'center', elevation: 2 },
  mapButtonText: { marginLeft: 8, color: '#374151' },
  activityItem: { backgroundColor: '#fff', padding: 12, borderRadius: 8, flexDirection: 'row', alignItems: 'center' },
  activityTitle: { fontWeight: '700' },
  activitySubtitle: { color: '#6b7280', marginTop: 6 },
  activitySales: { color: '#10b981', marginTop: 6 },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  statusText: { fontWeight: '700', fontSize: 12 },
  badgeGreen: { backgroundColor: '#ecfdf5' },
  badgeYellow: { backgroundColor: '#fffbeb' },
  badgeBlue: { backgroundColor: '#eef2ff' },
});
