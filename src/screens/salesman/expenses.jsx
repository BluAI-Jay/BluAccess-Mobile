import React, { useMemo } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SAMPLE_EXPENSES = [
  { id: '1', title: 'Fuel - Trip A', merchant: 'Shell', amount: '$24.50', date: '2025-09-27', category: 'Fuel', status: 'REIMBURSED' },
  { id: '2', title: 'Lunch with Client', merchant: 'Cafe Good', amount: '$12.00', date: '2025-09-28', category: 'Meals', status: 'PENDING' },
  { id: '3', title: 'Taxi to Office', merchant: 'City Cabs', amount: '$8.50', date: '2025-09-29', category: 'Transport', status: 'REJECTED' },
];

export default function Expenses() {
  const expenses = useMemo(() => SAMPLE_EXPENSES, []);

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

  const renderExpense = ({ item }) => (
    <View style={styles.itemCard}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemMeta}>{item.merchant} • {item.date}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.itemAmount}>{item.amount}</Text>
          <View style={[styles.statusPill, item.status === 'REIMBURSED' ? styles.pillGreen : item.status === 'PENDING' ? styles.pillYellow : styles.pillRed]}>
            <Text style={styles.pillText}>{item.status}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'flex-end', gap: 8 }}>
        <TouchableOpacity style={styles.ghostButton}><Icon name="receipt-outline" size={16} color="#374151" /><Text style={styles.ghostText}>  Receipt</Text></TouchableOpacity>
        <TouchableOpacity style={styles.primarySmall}><Icon name="pencil-outline" size={16} color="#fff" /><Text style={styles.primarySmallText}>  Edit</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.topActions}>
          <View style={styles.headerActionsLeft}>
            <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: '#2563eb', marginRight: 8 }]}> 
              <Icon name="add" size={16} color="#fff" />
              <Text style={styles.bigButtonText}>  Add Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.headerActionButton, { backgroundColor: '#0c2b4cff' }]}> 
              <Icon name="cloud-upload-outline" size={16} color="#fff" />
              <Text style={styles.bigButtonText}>  Upload Receipt</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsGrid}>
          {renderStat('Total Expenses', '$45.00', 'cash-outline', '#fef3c7')}
          {renderStat('Pending', '1', 'time-outline', '#fff7ed')}
          {renderStat('Reimbursed', '$24.50', 'checkmark-done-outline', '#ecfdf5')}
          {renderStat('This Month', '$45.00', 'calendar-outline', '#e6f2ff')}
        </View>

        <View style={styles.pillsRow}>
          <TouchableOpacity style={styles.filterPill}><Icon name="calendar-outline" size={16} color="#374151" /><Text style={styles.filterText}>30-09-2025</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterPill}><Icon name="layers-outline" size={16} color="#374151" /><Text style={styles.filterText}>All Categories</Text></TouchableOpacity>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchInput}><Icon name="search-outline" size={18} color="#9ca3af" /><TextInput placeholder="Search expenses..." style={{ marginLeft: 12, flex: 1 }} /></View>
        </View>

        <View style={styles.listCard}>
          <FlatList data={expenses} keyExtractor={(i) => i.id} renderItem={renderExpense} ItemSeparatorComponent={() => <View style={{ height: 12 }} />} />
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

  pillsRow: { flexDirection: 'row', marginVertical: 12 },
  filterPill: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginRight: 8, elevation: 1 },
  filterText: { marginLeft: 8, color: '#374151' },

  searchRow: { marginBottom: 12 },
  searchInput: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', elevation: 1, width: '100%' },

  listCard: { backgroundColor: 'transparent', padding: 0 },
  itemCard: { backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 },
  itemTitle: { fontWeight: '800', fontSize: 15 },
  itemMeta: { color: '#9ca3af', marginTop: 4 },
  itemAmount: { fontWeight: '800', fontSize: 16 },

  statusPill: { marginTop: 6, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  pillText: { fontWeight: '700', fontSize: 12 },
  pillGreen: { backgroundColor: '#ecfdf5', color: '#065f46' },
  pillYellow: { backgroundColor: '#fffbeb' },
  pillRed: { backgroundColor: '#fff1f2' },

  cardActions: { flexDirection: 'row', marginTop: 12, justifyContent: 'space-between' },
  ghostButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f5f9', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 10, flex: 1, justifyContent: 'center', marginRight: 8 },
  ghostText: { color: '#374151', fontWeight: '700' },
  primarySmall: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2563eb', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 10, flex: 1, justifyContent: 'center' },
  primarySmallText: { color: '#fff', fontWeight: '700' },
});