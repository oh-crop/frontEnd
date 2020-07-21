import { StyleSheet } from 'react-native'

let styles;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 19,
  },
  logo: {
    height: 300,
    width: 300,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#5DA25B',
    shadowOffset:{  width: 7,  height: 7,  },
    shadowColor: 'black',
    shadowOpacity: .1,
    margin: 10,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  }
});
