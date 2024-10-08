import * as React from 'react';
import { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import { MoodProvider } from './Context/Settings/MoodContext';
import menu from './menu/menu';
import HomeScreen from './screens/HomeScreen';  
import MainPage from './screens/MainPage';
import AboutMe from './screens/AboutMe';
import MyList from './screens/MyList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {

    const [restaurants, setRestaurants] = useState([]);

    return (
      <Tab.Navigator
        initialRouteName="Main Page"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Main Page"
          component={() => <MainPage restaurants={restaurants} setRestaurants={setRestaurants} />}
          options={{
            tabBarLabel: 'Main Page',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About Me"
          component={AboutMe}
          options={{
            tabBarLabel: 'About Me',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My List"
          component={() => <MyList restaurants={restaurants} />}
          options={{
            tabBarLabel: 'My List',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const AuthStack = () => (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="Tabs" 
        component={HomeTabNavigator} 
        options={{ headerShown: false }} // Hides the header when the tab navigator is shown
      />  
    </Stack.Navigator>
  );
  
  

export default function App() {
  return (
    <Provider store={menu}>
    <MoodProvider>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    </MoodProvider>
    </Provider>
  );
}
