import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

export default function Login({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <View>
            <Text>Login</Text>
            <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        </View>
    );
}