import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { Text, Card, IconButton, Button, Divider, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartItem } from '../types/meat';

const cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Premium Ribeye Steak',
    image: require('../assets/placeholder.png'),
    price: 24.99,
    quantity: 1,
    rating: 4.8,
    category: 'Beef',
    weight: '500g'
  },
  {
    id: 2,
    name: 'Chicken Breast Fillets',
    image: require('../assets/placeholder.png'),
    price: 12.99,
    quantity: 2,
    rating: 4.5,
    category: 'Chicken',
    weight: '1kg'
  },
  {
    id: 3,
    name: 'Lamb Chops',
    image: require('../assets/placeholder.png'),
    price: 18.99,
    quantity: 1,
    rating: 4.9,
    category: 'Lamb',
    weight: '750g'
  },
];

const CartScreen = () => {
  const theme = useTheme();
  const [items, setItems] = useState<CartItem[]>(cartItems);
  
  const updateQuantity = (id: number, amount: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { 
              ...item, 
              quantity: Math.max(1, item.quantity + amount) 
            } 
          : item
      )
    );
  };
  
  const getSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const deliveryFee = 2.99;
  const taxes = getSubtotal() * 0.1; // 10% tax
  const total = getSubtotal() + deliveryFee + taxes;
  
  const renderCartItem = ({ item }: { item: CartItem }) => (
    <Card style={styles.cartItem}>
      <View style={styles.cartItemContent}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <Text style={styles.itemWeight}>{item.weight}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <IconButton
            icon="minus"
            size={20}
            onPress={() => updateQuantity(item.id, -1)}
          />
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <IconButton
            icon="plus"
            size={20}
            onPress={() => updateQuantity(item.id, 1)}
          />
        </View>
      </View>
    </Card>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>
      
      {items.length > 0 ? (
        <>
          <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={renderCartItem}
            contentContainerStyle={styles.cartList}
          />
          
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Order Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${getSubtotal().toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Taxes</Text>
              <Text style={styles.summaryValue}>${taxes.toFixed(2)}</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
            </View>
            
            <Button
              mode="contained"
              style={[styles.checkoutButton, { backgroundColor: theme.colors.primary }]}
              labelStyle={styles.checkoutButtonText}
              onPress={() => {/* Handle checkout */}}
            >
              Proceed to Checkout
            </Button>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <Button
            mode="contained"
            style={[styles.shopNowButton, { backgroundColor: theme.colors.primary }]}
            onPress={() => {/* Navigate to Home */}}
          >
            Shop Now
          </Button>
        </View>
      )}
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
  cartList: {
    padding: 16,
  },
  cartItem: {
    marginBottom: 16,
    borderRadius: 8,
  },
  cartItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  itemWeight: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    width: 25,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    color: '#666',
  },
  summaryValue: {
    fontWeight: '500',
  },
  divider: {
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  checkoutButtonText: {
    fontSize: 16,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  shopNowButton: {
    paddingHorizontal: 30,
    borderRadius: 8,
  },
});

export default CartScreen; 