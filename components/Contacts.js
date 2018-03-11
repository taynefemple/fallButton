import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Input } from 'react-native-elements';
import { styles } from '../style'

export default class Contacts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      responseType: ''
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.contactsH1}>Enter Contacts</Text>
        <Picker
          selectedValue={this.state.responseType}
          onValueChange={(itemValue, itemIndex) => this.setState({ responseType: itemValue })}>
          <Picker.Item label="Doctor" value="medical" />
          <Picker.Item label="Friend/Neighbor" value="wellness" />
          <Picker.Item label="Local Authority" value="ambulance" />
          <Picker.Item label="Mercenary" value="gunForHire" />
        </Picker>
        <Input placeholder="Name" />
        <Input placeholder="Phone Number" />
      </View>
    )
  }
}
