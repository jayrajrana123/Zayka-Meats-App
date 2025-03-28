import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Divider, useTheme, Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const orderData = [
  {
    id: '1',
    orderNumber: 'ORD-001',
    date: '28 Mar 2025',
    items: ['Premium Ribeye Steak (500g)', 'Beef Tenderloin (300g)'],
    total: '$42.99',
    status: 'Delivered',
    deliveryType: 'Cold Storage Express'
  },
  {
    id: '2',
    orderNumber: 'ORD-002',
    date: '27 Mar 2025',
    items: ['Chicken Breast Fillets (1kg)', 'Lamb Chops (750g)', 'Pork Ribs (800g)'],
    total: '$56.50',
    status: 'Processing',
    deliveryType: 'Standard Delivery'
  },
  {
    id: '3',
    orderNumber: 'ORD-003',
    date: '25 Mar 2025',
    items: ['Ground Beef (500g)', 'Chicken Thighs (800g)'],
    total: '$24.99',
    status: 'Delivered',
    deliveryType: 'Cold Storage Express'
  },
];

const OrdersScreen = () => {
  const theme = useTheme();

  const renderOrderItem = ({ item }: { item: typeof orderData[0] }) => (
    <Card style={styles.orderCard}>
      <Card.Content>
        <View style={styles.orderHeader}>
          <Text style={styles.orderNumber}>{item.orderNumber}</Text>
          <Text style={[
            styles.statusText, 
            { color: item.status === 'Delivered' ? theme.colors.primary : '#FFA500' }
          ]}>
            {item.status}
          </Text>
        </View>
        <Text style={styles.dateText}>{item.date}</Text>
        <Divider style={styles.divider} />
        <View style={styles.deliveryRow}>
          <Text style={styles.deliveryLabel}>Delivery:</Text>
          <Chip style={styles.deliveryChip}>{item.deliveryType}</Chip>
        </View>
        <Text style={styles.itemsTitle}>Items:</Text>
        {item.items.map((itemName, index) => (
          <Text key={index} style={styles.itemText}>• {itemName}</Text>
        ))}
        <View style={styles.footer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>{item.total}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>
      <FlatList
        data={orderData}
        keyExtractor={item => item.id}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  orderCard: {
    marginBottom: 16,
    borderRadius: 8,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusText: {
    fontWeight: '500',
  },
  dateText: {
    color: '#666',
    marginBottom: 10,
  },
  divider: {
    marginVertical: 10,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  deliveryLabel: {
    fontWeight: '500',
    marginRight: 10,
  },
  deliveryChip: {
    height: 24,
  },
  itemsTitle: {
    fontWeight: '500',
    marginBottom: 5,
  },
  itemText: {
    marginLeft: 10,
    color: '#333',
    marginBottom: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  totalLabel: {
    fontWeight: '500',
  },
  totalAmount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrdersScreen; 