import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar, List, Divider, Button, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../contexts/AuthContext';

const ProfileScreen = () => {
  const theme = useTheme();
  const { user, signOut } = useAuth();
  
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Avatar.Text 
              size={80} 
              label={user?.email?.charAt(0).toUpperCase() || 'G'}
              style={{ backgroundColor: theme.colors.primary }}
            />
            <View style={styles.userDetails}>
              <Text style={styles.username}>{user?.email?.split('@')[0] || 'Guest'}</Text>
              <Text style={styles.email}>{user?.email || 'guest@example.com'}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={{ color: theme.colors.primary }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.settingsContainer}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          
          <List.Section>
            <List.Item
              title="Personal Information"
              left={props => <List.Icon {...props} icon="account-outline" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {/* Navigate to Personal Info */}}
            />
            <Divider />
            <List.Item
              title="Payment Methods"
              left={props => <List.Icon {...props} icon="credit-card-outline" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {/* Navigate to Payment Methods */}}
            />
            <Divider />
            <List.Item
              title="Address Book"
              left={props => <List.Icon {...props} icon="map-marker-outline" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {/* Navigate to Address Book */}}
            />
            <Divider />
            <List.Item
              title="Notification Settings"
              left={props => <List.Icon {...props} icon="bell-outline" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {/* Navigate to Notification Settings */}}
            />
          </List.Section>
          
          <Text style={styles.sectionTitle}>More</Text>
          
          <List.Section>
            <List.Item
              title="About Us"
              left={props => <List.Icon {...props} icon="information-outline" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {/* Navigate to About Us */}}
            />
            <Divider />
            <List.Item
              title="Help & Support"
              left={props => <List.Icon {...props} icon="help-circle-outline" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {/* Navigate to Help & Support */}}
            />
            <Divider />
            <List.Item
              title="Terms & Conditions"
              left={props => <List.Icon {...props} icon="file-document-outline" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {/* Navigate to Terms & Conditions */}}
            />
          </List.Section>
          
          <Button
            mode="outlined"
            style={styles.signOutButton}
            labelStyle={{ color: theme.colors.error }}
            icon="logout"
            onPress={handleSignOut}
          >
            Sign Out
          </Button>
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
    backgroundColor: '#fff',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    marginLeft: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  editButton: {
    alignSelf: 'flex-end',
    marginTop: -30,
  },
  settingsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  signOutButton: {
    marginTop: 30,
    marginBottom: 30,
    borderColor: 'transparent',
  },
});

export default ProfileScreen; 