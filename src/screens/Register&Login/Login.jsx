const { View, Text, TextInput, TouchableOpacity, Alert} = require('react-native');
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import axios from 'axios';
import React, { useState } from 'react';


function Login() {
  const navigation = useNavigation();
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  function handlesubmit(){
    console.log(email,password);
    const userData = {
      email:email,
      password,
    }
    axios
    .post("http://137.132.26.131:3000/login-user",userData)
    .then(res=>console.log(res.data))
    if (res.data.status=='ok'){
      Alert.alert("Logged In Successful");
    }
    //if not working: change 3000 to 5001
  }
  return (
    <View>

      <View style={styles.title}>
        <Text>Welcome to Yesterday Once More!</Text>
      </View>

      <View style={styles.title}>
        <Text>Log into your account</Text>
      </View>

      <View style={styles.action}>
        <TextInput placeholder='Email'  style={styles.textInput}onPress={()=>handlesubmit()}/>
      </View>

      <View style={styles.action}>
        <TextInput placeholder='Password'  style={styles.textInput}onPress={()=>handlesubmit()}/>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.login}>
          <Text style={{color: 'white'}}>Log in</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Login;