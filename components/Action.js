import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AlertIOS } from 'react-native';
import call from 'react-native-phone-call';
import { Button, Header } from 'react-native-elements';
import { styles } from '../style'

export default class Action extends Component {
  constructor(props) {
    super(props)
  }
  onPressPopo() {
    AlertIOS.alert(
      'Dispatch Authorities',
      'Medical Emergency',
      [
        { text: 'Call an Ambulance', onPress: () => call(emergency).catch(err => console.error(err)) },
        { text: 'Call the Doctor', onPress: () => call(doctor).catch(err => console.error(err)) },
        { text: 'Call the Midwife', onPress: () => call(midwife).catch(err => console.error(err)) },
        { text: 'Cancel', style: 'cancel' },
      ]
    )
  }

  onPressWellness() {
    AlertIOS.alert(
      'Wellness Check',
      'Medical Emergency',
      [
        { text: 'Call the Building Manager', onPress: () => call(emergency).catch(err => console.error(err)) },
        { text: 'Call the Neighbors', onPress: () => call(brettIn102).catch(err => console.error(err)) },
        { text: 'Text Grandma', onPress: () => call(midwife).catch(err => console.error(err)) },
        { text: 'Cancel', style: 'cancel' },
      ]
    )
  }

  onPressNuclearOption() {
    AlertIOS.alert(
      'Enough Already!',
      'Burn it down...',
      [
        { text: 'Call Dave the Arsonist', onPress: () => call(emergency).catch(err => console.error(err)) },
        { text: 'Call "The Wolf"', onPress: () => call(doctor).catch(err => console.error(err)) },
        { text: 'Call the Vet', onPress: () => call(midwife).catch(err => console.error(err)) },
        { text: 'Cancel', style: 'cancel' },
      ]
    )
  }


  render() {
    return (
      <View style={styles.container}>

        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'ALERT!', style: { color: 'yellow', fontSize: 35 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.textBlock}>
          <Text style={styles.text}>I fell through the Wrinkle In Time/Wardrobe/Stargate!</Text>
          <Text style={styles.text}>Hugs and Kisses, Grandma</Text>
        </View>
        <Image source={{ uri: 'http://i.dailymail.co.uk/i/pix/2017/10/25/00/45A601BF00000578-5014313-Shukkas_Davey_s_grandma_always_seemed_in_good_humour_and_would_o-a-70_1508886390771.jpg' }} style={styles.img} />
        <View style={styles.btnContainer}>
          <Button
            onPress={this.onPressPopo}
            text="Call the popo!"
            buttonStyle={styles.button}
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.onPressWellness}
            text="Wellness Check"
            buttonStyle={styles.button}
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.onPressNuclearOption}
            text="She's had a good life..."
            buttonStyle={styles.button}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        {/*<Text>Shake your phone to open the developer menu.</Text>
        <Text>That didn't work!!!</Text>*/}
      </View>
    );
  }
}

const emergency = {
  number: '3237154917',
  prompt: false
};

const doctor = {
  number: '3237154917',
  prompt: false
};

const midwife = {
  number: '3237154917',
  prompt: false
};
const grandma = {
  number: '3237154917',
  prompt: false
};
const brettIn102 = {
  number: '8475531628',
  prompt: false
};

