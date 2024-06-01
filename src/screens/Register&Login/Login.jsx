const { View, Text, TextInput, TouchableOpacity } = require('react-native');
import styles from './style';

function Login() {
  return (
    <View>

      <View style={styles.title}>
        <Text>Welcome to Yesterday Once More!</Text>
      </View>

      <View style={styles.title}>
        <Text>Log into your account</Text>
      </View>

      <View style={styles.action}>
        <TextInput placeholder='Email'  style={styles.textInput}/>
      </View>

      <View style={styles.action}>
        <TextInput placeholder='Password'  style={styles.textInput}/>
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