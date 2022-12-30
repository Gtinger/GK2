import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import HomeScreen from "./components/todoScreen"; denne drillede sidst
import MapsScreen from './components/mapsScreen';
import HomeScreen from './components/HomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './components/LoginScreen';

const Tab = createBottomTabNavigator();


function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
        {
          display: "flex"
        },
          null
          ],
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Login') {
              return (
                  <Ionicons
                      name={'key-outline'}
                      size={size}
                      color={color}
                  />
              );
            } else if (route.name === 'Maps') {
              return (
                  <Ionicons
                      name='globe-outline'
                      size={size}
                      color={color}
                  />
              );
            } else if (route.name === 'Home') {
              return (
                  <Ionicons
                      name='home-outline'
                      size={size}
                      color={color}
                  />
              );
            }
            else{
              return (
                  <Ionicons
                      name='md-list-outline'
                      size={size}
                      color={color}
                  />
              );
            }
          },
        })}
        >
          <Tab.Screen name="Login" children={()=><LoginScreen/>} />
          <Tab.Screen name="Maps" children={()=><MapsScreen />} />
          
          <Tab.Screen name="Home" children={()=><HomeScreen/>} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App