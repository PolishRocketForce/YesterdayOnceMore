import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

export default function Register({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <View>
            <Text>Register</Text>
            <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        </View>
    );
}