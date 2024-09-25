import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MoodProvider } from './Context/Settings/MoodContext';
import HomeScreen from './screens/HomeScreen';  
import MainPage from './screens/MainPage';
import AboutMe from './screens/AboutMe';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
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
          component={MainPage}
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
    <MoodProvider>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    </MoodProvider>
  );
}
