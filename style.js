import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  contactsH1: {
    textAlign: "center",
    fontSize: 25,
  },
  text: {
    flex: 1,
    color: '#888',
    textAlign: 'center',
    fontSize: 20
  },
  textBlock: {
    flex: 1
  },
  button: {
    backgroundColor: "#a00000",
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
  homeBtn: {
    backgroundColor: "#06179b",
    width: 300,
    height: 45,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5
  },
  img: {
    flex: 3,
    alignSelf: 'center',
    width: 300,
    height: 193
  },
});
