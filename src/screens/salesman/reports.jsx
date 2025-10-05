import React, { useMemo } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SAMPLE_REPORTS = [
  { id: '1', title: 'Weekly Performance', period: '21-27 Sep 2025', visits: 12, sales: '$1,200' },
  { id: '2', title: 'Monthly Summary', period: 'September 2025', visits: 48, sales: '$5,400' },
  { id: '3', title: 'Top Customers', period: 'Q3 2025', visits: 30, sales: '$12,000' },
];

export default function Reports() {
  const reports = useMemo(() => SAMPLE_REPORTS, []);

  const renderStat = (title, value, iconName, bgColor) => (
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

  const renderReport = ({ item }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemMeta}>{item.period}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
        <Text style={styles.itemSmall}>Visits: <Text style={{ fontWeight: '700' }}>{item.visits}</Text></Text>
        <Text style={styles.itemSmall}>Sales: <Text style={{ fontWeight: '700' }}>{item.sales}</Text></Text>
      </View>
      <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity style={styles.primarySmall}><Icon name="download-outline" size={16} color="#fff" /><Text style={styles.primarySmallText}>  Download</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.topActions}>
          <View style={styles.headerActionsLeft}>
            <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: '#2563eb', marginRight: 8 }]}> 
              <Icon name="download-outline" size={16} color="#fff" />
              <Text style={styles.bigButtonText}>  Export</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: '#0c2b4cff' }]}> 
              <Icon name="filter-outline" size={16} color="#fff" />
              <Text style={styles.bigButtonText}>  Filters</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsGrid}>
          {renderStat('Total Visits', '48', 'people-outline', '#e6f2ff')}
          {renderStat('Total Sales', '$5,400', 'cash-outline', '#ecfdf5')}
          {renderStat('Active Customers', '120', 'people-outline', '#f5f3ff')}
          {renderStat('Avg Sale', '$112', 'stats-chart-outline', '#ecfdf4')}
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchInput}><Icon name="search-outline" size={18} color="#9ca3af" /><TextInput placeholder="Search reports..." style={{ marginLeft: 12, flex: 1 }} /></View>
        </View>

        <View style={styles.listCard}>
          <FlatList data={reports} keyExtractor={(i) => i.id} renderItem={renderReport} ItemSeparatorComponent={() => <View style={{ height: 12 }} />} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f6f8' },
  scroll: { padding: 16, paddingBottom: 40 },
  topActions: { width: '100%', marginBottom: 12 },
  headerActionsLeft: { flexDirection: 'row', width: '100%' },
  headerActionButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 8 },
  bigButtonText: { color: '#fff', marginLeft: 8, fontWeight: '700' },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 12 },
  statCard: { backgroundColor: '#fff', width: '48%', padding: 14, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 2, marginBottom: 12 },
  statLeft: {},
  statTitle: { color: '#6b7280', fontSize: 12 },
  statValue: { fontSize: 18, fontWeight: '800', marginTop: 6 },
  statIconWrapper: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },

  searchRow: { marginBottom: 12 },
  searchInput: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', elevation: 1, width: '100%' },

  listCard: { backgroundColor: 'transparent', padding: 0 },
  itemCard: { backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 },
  itemTitle: { fontWeight: '800', fontSize: 15 },
  itemMeta: { color: '#9ca3af', marginTop: 4 },
  itemSmall: { color: '#374151' },

  primarySmall: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2563eb', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 10, flex: 1, justifyContent: 'center' },
  primarySmallText: { color: '#fff', fontWeight: '700' },
});
