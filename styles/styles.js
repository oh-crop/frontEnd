import { StyleSheet } from 'react-native';

let styles;

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fffefe',
    color: '#fafafa',
    flex: 1,
    justifyContent: 'center',
  },
  searchInputContainer: {
<<<<<<< HEAD
    color: '#fafafa',
    backgroundColor: '#fffefe',
    paddingBottom: 50,
=======
    backgroundColor: '#fff',
    paddingBottom: 50,

>>>>>>> 8d6851782c752937103517ed6c0a7bb35a7deb0d
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
    borderColor: '#1d1d1d',
    color: '#1d1d1d',
    borderRadius: 2,
    borderWidth: 1,
    fontSize: 18,
    height: 30,
    margin: 10,
    padding: 5,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
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
    shadowColor: 'rgba(0, 0, 0, 0.05)',
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
    color: '#383838',
    display: 'flex',
    fontSize: 30,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },

  // PLANT INFO PAGE
  backgroundImg: {
    height: '100%',
  },
  plantInfoHeader: {
    alignItems: 'center',
    backgroundColor: 'rgba(93,162,91,.9)',
    flex: 1.5,
    justifyContent: 'center',
    width: '100%',
  },
  plantName: {
    color: '#fafafa',
    fontSize: 40,
  },
  plantImgWrapper: {
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
    borderRadius: 20,
    height: '100%',
    justifyContent: 'flex-end',
    marginTop: -65,
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,

    shadowColor: 'black',
    shadowOffset:{  width: 5,  height: 5,  },
    shadowOpacity: .1,

    width: '85%',
  },
  plantAttrLabel: {
    color: '#fafafa',
    fontSize: 24,
    margin: 10,
  },
  plantAttrValue: {
    color: '#E3CBB5',
    paddingLeft: 10,
  },
  buttonContainer: {
    backgroundColor: '#f8f8f8',
    flex: 1.2,
    width: '100%',
  },

   //My Garden Page
  myGardenContainer: {
    height: '100%',
   },
  myGardenHeader: {
    flex: 1,
   },
  myGarden: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 7,
    },
  myGardenBody: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
   },
  myGardenPlants: {
    alignItems: 'center',
    justifyContent: 'center',
   },
  icon: {
    textShadowColor: 'grey',
    textShadowOffset: {width: 1, height: 12},
    textShadowRadius: 5,
    margin: 10,
    color: 'limegreen',
   },
  dirtBackground: {
    flex: 1,
    width: '100%',
   },
});
