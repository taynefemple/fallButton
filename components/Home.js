import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from '../style'
import { StackNavigator, navigationOptions } from 'react-navigation'

export default class Home extends Component {
   static navigationOptions = {
      title: 'Home Screen',
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#06179b",
        },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Medical Alert!</Text>
        <Text style={styles.text}>May you never need it.</Text>
        <View>
        <Image source={{ uri: 'http://curpyrfc.org/wp-content/uploads/2018/01/birthday-quotes-for-nana-inspirational-quotes-grandmother-to-grandson-love-sweet-grandchildren-grandma-of-birthday-quotes-for-nana.jpg' }} style={{width: 300,
        height: 193, alignSelf: 'center', }} />
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Contacts')}
            text="Manage
            Contacts"
            buttonStyle={styles.homeBtn}
          />
          <Button
            onPress={() => this.props.navigation.navigate('Action')}
            text="Emergency Menu"
            buttonStyle={styles.homeBtn}
          />
        </View>
      </View>
    );
  }
}
