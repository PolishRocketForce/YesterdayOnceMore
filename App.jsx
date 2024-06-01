import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Register from './src/screens/Register&Login/Register';
import Login from './src/screens/Register&Login/Login';
import Dashboard from './src/screens/Dashboard';
import JournalEntry from './src/screens/JournalEntry';
import Calendar from './src/screens/Calendar';
import ToDoList from './src/screens/ToDoList';
import PromodoTimer from './src/screens/PromodoTimer';
import Settings from './src/screens/Settings';
import { Text, Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: "Yesterday Once More",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerRight: () => (
              <Pressable onPress={() => alert('Menu pressed!')}>
                <Text style={{ color: 'white', marginRight: 50 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: "white",
            },
          }} 
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="JournalEntry" component={JournalEntry} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="PromodoTimer" component={PromodoTimer} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}