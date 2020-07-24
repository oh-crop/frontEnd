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
    fontSize: 30,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },

  // PLANT INFO PAGE
  backgroundImg: {
    height: '100%',
    width: 'auto',
  },
  plantInfoHeader: {
    alignItems: 'center',
    backgroundColor: 'rgba(93,162,91,.9)',
    flex: 1.5,
    justifyContent: 'center',
    width: '100%',
  },
  plantName: {
    color: 'white',
    fontSize: 40,
  },
  imgBackground: {
    backgroundColor: 'rgba(255, 255, 255, .5)',
    flex: 2,
    marginBottom: -145,
    width: '100%',
    zIndex: -1,
  },
  plantImgContainer: {
    alignItems: 'center',
    flex: 2.2,
    justifyContent: 'center',
    marginTop: 40,
    width: '100%',
  },
  plantImg: {
    alignItems: 'center',
    borderRadius: 70,
    height: 150,
    marginTop: 50,
    width: 150,
  },
  plantInfoContentContainer: {
    alignItems: 'center',
    flex: 7,
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
  plantInfoContent: {
    backgroundColor: 'rgba(148, 126, 104, .9)',
    height: '100%',
    justifyContent: 'flex-end',
    marginTop: -65,
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
    width: '85%',
  },
  plantAttrLabel: {
    color: 'white',
    fontSize: 24,
    margin: 10,
    width: '100%',
  },
  plantAttrValue: {
    color: '#E3CBB5',
    paddingLeft: 10,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    flex: 1.2,
    width: '100%',
  },
});
