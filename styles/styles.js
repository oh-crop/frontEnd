import { StyleSheet } from 'react-native';

let styles;

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  searchInputContainer: {
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  searchResultsContainer: {
    marginHorizontal: 20,
  },
  meetAPlant: {
    alignSelf: 'center',
    height: 200,
    width: 300,
  },
  text: {
    color: 'white',
    fontSize: 19,
  },
  logo: {
    height: 300,
    width: 300,
  },
  searchbox: {
    alignSelf: 'center',
    borderColor: 'dimgrey',
    borderRadius: 2,
    borderWidth: 1,
    height: 30,
    margin: 10,
    padding: 5,
    shadowColor: 'black',
    shadowOffset:{  width: 5,  height: 5,  },
    shadowOpacity: .1,
    width: 300,
  },
  // BUTTONS
  button: {
    backgroundColor: '#5DA25B',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    margin: 10,
    padding: 15,
    shadowColor: 'black',
    shadowOffset:{  width: 7,  height: 7,  },
    shadowOpacity: .1,
    width: 150,
  },
  searchButton: {
    alignSelf: 'center',
    width: 200,
  },
  goBackButton: {
    alignItems: 'center',
    color: 'black',
    display: 'flex',
    fontSize: 25,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  // PLANT INFO PAGE
  plantInfoHeader: {
    alignItems: 'center',
    backgroundColor: '#5DA25B',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  plantName: {
    color: 'white',
    fontSize: 40,
  },
  plantImgContainer: {
    alignItems: 'center',
    backgroundColor: '#654321',
    flex: 2.5,
    justifyContent: 'center',
    width: '100%',
  },
  plantImg: {
    alignItems: 'center',
    borderRadius: 70,
    height: 130,
    width: 130,
  },
  plantInfoContent: {
    alignItems: 'center',
    backgroundColor: '#654321',
    flex: 7,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
  },
  plantAttrLabel: {
    color: 'white',
    fontSize: 30,
    margin: 10,
    width: '100%',
  },
  plantAttrValue: {
    color: '#E3CBB5',
    paddingLeft: 10,
  },
  buttonContainer: {
    height: 55,
    width: '100%',
  },
});
