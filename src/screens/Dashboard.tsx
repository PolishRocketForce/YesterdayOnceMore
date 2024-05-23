import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Calendar from './Calendar';
import ToDoList from './ToDoList';
import JournalEntry from './JournalEntry';
import PromodoTimer from './PromodoTimer';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelPosition: 'below-icon',
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: 'black',
                    },
                
                }}
            >
                <Tab.Screen name="Calendar" component={Calendar} />
                <Tab.Screen name="ToDoList" component={ToDoList} />
                <Tab.Screen name="JournalEntry" component={JournalEntry} />
                <Tab.Screen name="PromodoTimer" component={PromodoTimer} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
    );
}