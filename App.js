import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import call from 'react-native-phone-call';
import { Button, Header } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props)
  }


  onPressPopo() {
    Alert.alert(
      'Dispatch Authorities',
      'Medical Emergency',
      [
        { text: 'Call an Ambulance', onPress: () => call(emergency).catch(err => console.error(err)) },
        { text: 'Call the Doctor', onPress: () => call(doctor).catch(err => console.error(err)) },
        { text: 'Call the Midwife', onPress: () => call(midwife).catch(err => console.error(err)) },
      ],
      { cancelable: true }
    )
  }

  onPressWellness() {
    Alert.alert(
      'Wellness Check',
      'Medical Emergency',
      [
        { text: 'Call the Building Manager', onPress: () => call(emergency).catch(err => console.error(err)) },
        { text: 'Call the Neighbors', onPress: () => call(brettIn102).catch(err => console.error(err)) },
        { text: 'Text Grandma', onPress: () => call(midwife).catch(err => console.error(err)) },
      ],
      { cancelable: true }
    )
  }

  onPressNuclearOption() {
    Alert.alert(
      'Burn it down!',
      'Unethical options:',
      [
        { text: 'Call Dave the Arsonist', onPress: () => call(emergency).catch(err => console.error(err)) },
        { text: 'Call "The Wolf"', onPress: () => call(doctor).catch(err => console.error(err)) },
        { text: 'Call the Vet', onPress: () => call(midwife).catch(err => console.error(err)) },
      ],
      { cancelable: true }
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
      </View >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  text: {
    flex: 1,
    color: '#888',
    paddingTop: 3,
    textAlign: 'center',
    fontSize: 20
  },
  textBlock: {
    flex: 1
  },
  h1: {
    flex: .5,
    textAlign: 'center',
    color: 'red',
    fontSize: 80,
  },
  button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5
  },
  btnContainer: {
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'flex-end',
    bottom: 20,
    marginHorizontal: 35
  },
  img: {
    flex: 3,
    alignSelf: 'center',
    width: 300,
    height: 193
  },
});
