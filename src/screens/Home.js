import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Home</Text>
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}
