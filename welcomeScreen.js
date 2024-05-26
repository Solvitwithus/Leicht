import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Welcome = () => {
  const navigation = useNavigation();

  const [username, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleUsername = (text) => {
    setUserName(text);
  };

  const handlePassword = (text) => {
    setPass(text);
  };

  const handleLogin = () => {
    if (username === 'John' && pass === 'a123') {
      navigation.navigate('Main');
    } else if (username === '' || pass === '') {
      navigation.navigate('Signup');
    } else {
      navigation.navigate('Signup');
    }
  };

  const handleSign = () => {
    navigation.navigate('Signup');
  };

  const handlePasswordHiding = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor={'#222222'} />
          <View style={styles.tinge}></View>
          <View>
            <Text style={styles.welcome}>Welcome{'\n'}back!</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="rock@gmail.com"
              placeholderTextColor={'#e89123'}
              onChangeText={handleUsername}
            />
            <Text style={styles.icon}>
              <Icon name="user" size={28} color="#e89123" />
            </Text>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="password"
              placeholderTextColor={'#ffffff'}
              secureTextEntry={!isPasswordVisible}
              onChangeText={handlePassword}
            />
            <TouchableOpacity onPress={handlePasswordHiding}>
              <Text style={styles.icon2}>
                <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={28} color="#ffffff" />
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotpass}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.foot}>
            <TouchableOpacity onPress={handleSign}>
              <Text style={styles.sgnup}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lgin} onPress={handleLogin}>
              <Text style={styles.logtext}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21222d',
  },
  tinge: {
    width: 0,
    height: 0,
    borderLeftWidth: 200,
    borderRightWidth: 200,
    borderBottomWidth: 200,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#e69023',
    transform: [{ rotate: '-45deg' }],
    position: 'absolute',
    marginLeft: -125,
    marginTop: -30,
  },
  welcome: {
    marginTop: '80%',
    marginLeft: '10%',
    fontSize: 35,
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: '#e69023',
    borderWidth: 1,
    width: '90%',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginHorizontal: 20,
    marginTop: 20,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  icon: {
    marginRight: 10,
  },
  icon2: {
    marginLeft: 10,
  },
  forgotpass: {
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    paddingTop: 20,
    color: '#e69023',
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '40%',
  },
  sgnup: {
    fontSize: 19,
    textDecorationLine: 'underline',
    color: '#ffffff',
  },
  lgin: {
    backgroundColor: '#e69023',
    width: '35%',
    height: '120%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  logtext: {
    color: '#ffffff',
    fontSize: 19,
    textAlign: 'center',
  },
  icon:{

  }
});

export default Welcome;