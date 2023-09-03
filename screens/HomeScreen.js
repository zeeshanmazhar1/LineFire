import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; // Add this line

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Laundry Services</Text>

      <Card containerStyle={styles.card}>
        <TouchableOpacity
          style={styles.cardItem}
          onPress={() => navigation.navigate('Laundry')}
        >
          <Image
            source={require('../assets/clothes.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Clothes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardItem}>
          <Image
            source={require('../assets/bedsheets.jpg')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Bedsheets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardItem}>
          <Image source={require('../assets/shoes.jpg')} style={styles.icon} />
          <Text style={styles.cardText}>Shoes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardItem}>
          <Image
            source={require('../assets/blankets.jpg')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Blankets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardItem}>
          <Image
            source={require('../assets/curtains.jpg')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Curtains</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    padding: 16,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
