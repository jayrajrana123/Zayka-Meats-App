import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { Searchbar, Text, Card, Chip, useTheme, ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { supabase } from '../services/supabase';
import { useAuth } from '../contexts/AuthContext';
import { Category, MeatItem } from '../types/meat';

// Placeholder data - in a real app this would come from Supabase
const categories: Category[] = [
  { id: 1, name: 'Chicken', icon: 'food-drumstick' },
  { id: 2, name: 'Beef', icon: 'food-steak' },
  { id: 3, name: 'Lamb', icon: 'food' },
  { id: 4, name: 'Pork', icon: 'pig' },
  { id: 5, name: 'Seafood', icon: 'fish' },
  { id: 6, name: 'Exotic', icon: 'cow' },
];

const popularItems: MeatItem[] = [
  {
    id: 1,
    name: 'Premium Ribeye Steak',
    image: require('../assets/placeholder.png'),
    rating: 4.8,
    price: 24.99,
    category: 'Beef',
    weight: '500g'
  },
  {
    id: 2,
    name: 'Chicken Breast Fillets',
    image: require('../assets/placeholder.png'),
    rating: 4.5,
    price: 12.99,
    category: 'Chicken',
    weight: '1kg'
  },
  {
    id: 3,
    name: 'Lamb Chops',
    image: require('../assets/placeholder.png'),
    rating: 4.9,
    price: 18.99,
    category: 'Lamb',
    weight: '750g'
  },
];

const HomeScreen = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  // In a real app, you would fetch data from Supabase here
  useEffect(() => {
    // fetchDataFromSupabase();
  }, []);
  
  const onChangeSearch = (query: string) => setSearchQuery(query);
  
  const renderCategoryItem = ({ item }: { item: typeof categories[0] }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.name && {
          backgroundColor: theme.colors.primary,
        },
      ]}
      onPress={() => setSelectedCategory(selectedCategory === item.name ? null : item.name)}
    >
      <Icon
        name={item.icon}
        size={24}
        color={selectedCategory === item.name ? '#fff' : theme.colors.primary}
      />
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.name && { color: '#fff' },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  
  const renderPopularItem = ({ item }: { item: typeof popularItems[0] }) => (
    <Card style={styles.popularItem}>
      <Image source={item.image} style={styles.popularItemImage} />
      <View style={styles.popularItemContent}>
        <Text style={styles.popularItemName}>{item.name}</Text>
        <View style={styles.weightContainer}>
          <Text style={styles.weightText}>{item.weight}</Text>
        </View>
        <View style={styles.popularItemDetails}>
          <View style={styles.rating}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <Chip mode="outlined" style={styles.categoryChip}>
            {item.category}
          </Chip>
        </View>
        <View style={styles.popularItemFooter}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hello, {user?.email?.split('@')[0] || 'Guest'}</Text>
            <Text style={styles.subtitleText}>What meat would you like today?</Text>
          </View>
          <TouchableOpacity>
            <Icon name="bell" size={28} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
        
        <Searchbar
          placeholder="Search for meats..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
          iconColor={theme.colors.primary}
        />
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Meat Categories</Text>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.categoriesList}
          />
        </View>
        
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Cuts</Text>
            <TouchableOpacity>
              <Text style={[styles.viewAllText, { color: theme.colors.primary }]}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {loading ? (
            <ActivityIndicator style={styles.loader} color={theme.colors.primary} />
          ) : (
            <FlatList
              data={popularItems}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderPopularItem}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={styles.popularList}
            />
          )}
        </View>
        
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Special Offers</Text>
            <TouchableOpacity>
              <Text style={[styles.viewAllText, { color: theme.colors.primary }]}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <Card style={styles.offerCard}>
            <Image
              source={require('../assets/placeholder.png')}
              style={styles.offerImage}
              resizeMode="cover"
            />
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>30% OFF</Text>
              <Text style={styles.offerSubtitle}>On premium cuts</Text>
              <TouchableOpacity style={[styles.orderNowButton, { backgroundColor: theme.colors.primary }]}>
                <Text style={styles.orderNowText}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  searchBar: {
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  categoryText: {
    marginLeft: 5,
    fontWeight: '500',
  },
  popularList: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  popularItem: {
    width: 200,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  popularItemImage: {
    width: '100%',
    height: 120,
  },
  popularItemContent: {
    padding: 10,
  },
  popularItemName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  weightContainer: {
    marginBottom: 5,
  },
  weightText: {
    fontSize: 14,
    color: '#666',
  },
  popularItemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  categoryChip: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#FF6347',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerCard: {
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  offerImage: {
    width: '100%',
    height: 150,
  },
  offerContent: {
    padding: 15,
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  offerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    marginBottom: 15,
  },
  orderNowButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  orderNowText: {
    color: '#fff',
    fontWeight: '600',
  },
  loader: {
    marginVertical: 20,
  },
});

export default HomeScreen; 