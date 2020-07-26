import { StyleSheet } from 'react-native';

let styles;

export default styles = StyleSheet.create({
  // Universal
  container: {
    alignItems: 'center',
    backgroundColor: '#fffefe',
    // color: '#fafafa',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 19,
  },
  backButton: {
    color: '#383838',
    fontSize: 30,
  },
  // Landing Page
  logo: {
    height: 300,
    width: 300,
  },
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
  // Loading Screen
  loadingContainer: {
    backgroundColor: '#fffefe',
    height: '100vh',
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  },
  loadingText: {
    color: '#1d1d1d',
  },
  // Search Page
  searchInputContainer: {
    color: '#fafafa',
    backgroundColor: '#fffefe',
    paddingBottom: 50,
  },
  searchResultsContainer: {
    marginHorizontal: 20,
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
  meetAPlant: {
    alignSelf: 'center',
    height: 200,
    width: 300,
  },
  searchButton: {
    alignSelf: 'center',
    width: 200,
  },
  // Plant Info Page
  greenCropBackground: {
    flex: 1,
    width: '100%',
  },
  plantInfoHeader: {
    alignItems: 'center',
    backgroundColor: 'rgba(93,162,91,.9)',
    flex: 2,
    justifyContent: 'center',
  },
  plantChildName: {
    color: '#fafafa',
    fontSize: 40,
  },
  transparentSubHeader: {
    backgroundColor: 'rgba(255, 255, 255, .5)',
    flex: 2.5,
    marginBottom: '-20%',
    width: '100%',
  },
  plantImgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-5%',
    marginBottom: '-10%',
    width: '100%',
    zIndex: 1,
  },
  plantImg: {
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  plantContentContainer: {
    alignItems: 'center',
    flex: 8,
    height: '100%',
    marginTop: '-10%',
    width: '100%',
    marginBottom: '10%',
  },
  plantContent: {
    backgroundColor: 'rgba(148, 126, 104, .9)',
    borderRadius: 10,
    height: '100%',
    justifyContent: 'space-around',
    paddingTop: '25%',
    paddingLeft: '5%',
    paddingRight: '2%',
    width: '85%',
  },
  plantAttrLabel: {
    color: '#E3CBB5',
    fontSize: 24,
  },
  plantAttrValue: {
    color: '#fafafa',
    fontSize: 22,
    marginTop: '12%',
    marginBottom: '15%',
  },
  backButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    flex: 1.5,
    justifyContent: 'center',
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
  // Plant Profile Page
  plantName: {
    color: '#fafafa',
    fontSize: 20,
  },
  plantChoresContent: {
    backgroundColor: 'rgba(148, 126, 104, .9)',
    borderRadius: 10,
    height: '70%',
    justifyContent: 'space-around',
    paddingTop: '25%',
    paddingLeft: '5%',
    paddingRight: '2%',
    width: '85%',
  },
});
