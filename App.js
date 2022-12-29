import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/todoScreen";
import MapsScreen from './components/mapsScreen';

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
            if (route.name === 'Todo') {
              return (
                  <Ionicons
                      name={'alert-outline'}
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
  
          <Tab.Screen name="Maps" children={()=><MapsScreen />} />
          <Tab.Screen name="Todo" children={()=><HomeScreen/>} />
          <Tab.Screen name="Login" children={()=><LoginScreen/>} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App