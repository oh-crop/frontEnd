import { StyleSheet } from 'react-native'

let styles;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    height: 200,
    width: 300,
    alignSelf: 'center',
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
  },
  searchbox: {
    padding: 5,
    margin: 10,
    width: 300,
    borderRadius: 2,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: .1,
    borderWidth: 1,
    borderColor: 'dimgrey',
    height: 30,
    alignSelf: 'center',
  },
  searchButton: {
    alignSelf: 'center',
    width: 200,
  },
  // PLANT INFO PAGE
  plantInfoHeader: {
    alignItems: 'center',
    backgroundColor: '#5DA25B',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  nameText: {
    color: 'white',
    fontSize: 40,
  },
  plantIconContainer: {
    alignItems: 'center',
    backgroundColor: '#654321',
    flex: 2.5,
    justifyContent: 'center',
    width: '100%',
  },
  plantIcon: {
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
  textContent: {
    color: 'white',
    fontSize: 30,
    margin: 10,
    width: '100%',
  },
});
