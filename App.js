import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import LaundryScreen from './screens/LaundryScreen';
import CartScreen from './screens/CartScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'About') {
                iconName = 'information-outline';
              } else if (route.name === 'Cleaning') {
                iconName = 'broom';
              } else if (route.name === 'Laundry') {
                iconName = 'shirt';
              } else if (route.name === 'Cart') {
                iconName = 'cart';
              } else if (route.name === 'Orders') {
                iconName = 'receipt';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="Laundry" component={LaundryScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Orders" component={OrdersScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
