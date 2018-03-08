import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  onPressLearnMore() {
    console.log('You Clicked me!')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>ALERT!</Text>
        <Text style={styles.text}>I fell through the Wrinkle In Time/Wardrobe/Stargate!</Text>
        <Text style={styles.text}>Hugs and Kisses, Grandma
        </Text>
        <Image source={{ uri: 'https://thumbs.dreamstime.com/z/red-button-danger-6048319.jpg' }} style={{ width: 193, height: 193 }} />
        <Button
          onPress={this.onPressLearnMore}
          title="Call the popo!"
          color="#425ff4"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Call Grandma!"
          color="#425ff4"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Shoot grandma a text! I'm sure she's just tired"
          color="#425ff4"
          accessibilityLabel="Learn more about this purple button"
        />
        {/*<Text>Shake your phone to open the developer menu.</Text>
        <Text>That didn't work!!!</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  },
  h1: {
    textAlign: 'center',
    color: 'red',
    fontSize: 80,

  },
});
