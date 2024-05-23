import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Register from './Register';
import Login from './Login';

export default function Home({ navigation }: { navigation: NavigationProp<any> }) {

    return (
        <View>
            <Text>Home</Text>
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}
