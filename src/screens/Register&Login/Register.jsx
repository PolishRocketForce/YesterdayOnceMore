const { View, Text, TextInput, TouchableOpacity, ScrollView } = require('react-native');
import styles from './style';
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);

  function handleSubumit() {
    const userData = {
      name: name,
      email: email,
      password: password,
    };

    axios
    .post('http://localhost:3000/register', userData)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }

  function handleName(e) {
    const nameVar=e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);
    if(nameVar.length>1) {
      setNameVerify(true);
    }
  }

  function handleEmail(e) {
    const emailVar=e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar=e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  }

  return (
    <ScrollView>

      <View style={styles.title}>
        <Text>Welcome to Yesterday Once More!</Text>
      </View>

      <View style={styles.title}>
        <Text>Create an account</Text>
      </View>

      <View style={styles.action}>
        <TextInput placeholder='Username'  style={styles.textInput} onChange={e=>handleName(e)}/>
        {name.length < 1 ? null : nameVerify ? <Text>✓</Text> : <Text>✗</Text>}
        {name.length < 1 ? null : nameVerify ? null : 
        <Text style={{marginLeft: 20, color:'red'}}>Username must be at least 2 characters long</Text>}
      </View>

      <View style={styles.action}>
        <TextInput placeholder='Email'  style={styles.textInput} onChange={e=>handleEmail(e)}/>
        {email.length < 1 ? null : emailVerify ? <Text>✓</Text> : <Text>✗</Text>}
        {email.length < 1 ? null : emailVerify ? null : 
        <Text style={{marginLeft: 20, color:'red'}}>Enter proper email address</Text>}
      </View>

      <View style={styles.action}>
        <TextInput placeholder='Password'  style={styles.textInput} onChange={e=>handlePassword(e)}/>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.login} onPress={()=>handleSubumit()}>
          <Text style={{color: 'white'}}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

export default Register;