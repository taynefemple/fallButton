import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Input } from 'react-native-elements';

export default class SignIn extends Component {

  render() {
    return (
      <View>
        <View style={styles.form} >
          <Input
            name={'email'}
            placeholder={'Email'}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onChangeText={() => console.log('hit it')}
          />
          <Input
            name={'password'}
            placeholder={'Password'}
            returnKeyType={'done'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={() => console.log('hit it')}
          />
        </View>
        <View style={styles.footer}>
          <View animation={'bounceIn'} duration={600} delay={400}>
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
              title='Log In'
            />
          </View>
          <Text
            style={styles.signupLink}
            onPress={console.log('hit it')}
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Not registered yet?'}
          </Text>
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: 'white'
  },
  loginButtonText: {
    color: '#3E464D',
    fontWeight: 'bold'
  },
  signupLink: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})
