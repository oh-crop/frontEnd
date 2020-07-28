import { StyleSheet } from 'react-native';

let styles;

export default styles = StyleSheet.create({
  // UNIVERSAL
  container: {
    alignItems: 'center',
    backgroundColor: '#fffefe',
    flex: 1,
    justifyContent: 'center',
  },
  backButtonContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(248, 248, 248, .8)',
    flex: 1.1,
    justifyContent: 'center',
  },
  backButton: {
    color: '#383838',
    fontSize: 30,
  },
  borderRadius: {
    borderRadius: 5,
  },
  textLight: {
    color: '#fafafa',
    fontSize: 19,
  },
  headerText: {
    color: '#fafafa',
    fontSize: 40,
  },
  textDark: {
    color: '#1d1d1d',
    fontSize: 19,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  // LANDING PAGE - components/pages/Landing.js
  logo: {
    height: 300,
    width: 300,
  },
  landingButtons: {
    backgroundColor: '#5DA25B',
    alignItems: 'center',
    margin: 10,
    padding: 15,
    width: 150,
  },

  // LOADING SCREEN - components/Loading.js
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

  // SEARCH PAGE
    // components/InputBar.js
  searchInputContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#a7a7a7',
    padding: 5,
    width: '100%',
  },
  searchbox: {
    borderColor: '#1d1d1d',
    color: '#1d1d1d',
    borderRadius: 2,
    borderWidth: 1,
    height: 30,
    margin: 10,
    padding: 5,
    width: 300,
  },
    // components/pages/Search.js
    // components/PlantItem.js
  searchResultsContainer: {
    flex: 1,
    backgroundColor: '#fffefe',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  meetAPlantImg: {
    height: 200,
    width: 250,
  },
  plantItemContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 254, 254, 0.8)',
    marginTop: 30,
    padding: 20,
    width: '80%',
  },
  subHeader: {
    alignSelf: 'center',
    fontSize: 24,
    marginVertical: 5,
  },
  searchResultText: {
    alignSelf: 'center',
    fontSize: 24,
    paddingBottom: 20,
  },

  // PLANT INFO PAGE - components/pages/PlantInfo.js
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
  transparentSubHeader: {
    backgroundColor: 'rgba(255, 255, 255, .5)',
    flex: 2.5,
    marginBottom: '-20%',
    width: '100%',
  },
  plantContentContainer: {
    alignItems: 'center',
    flex: 8,
    height: '100%',
    marginTop: '-10%',
    width: '100%',
    marginBottom: '10%',
  },
  plantImgContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    height: 120,
    justifyContent: 'center',
    marginTop: '-5%',
    marginBottom: '-10%',
    zIndex: 1,
    width: 120,
  },
  plantImg: {
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  plantContent: {
    backgroundColor: 'rgba(194, 173, 134, .8)',
    height: '100%',
    justifyContent: 'space-around',
    paddingTop: '25%',
    paddingLeft: '5%',
    paddingRight: '2%',
    width: '85%',
  },
  plantAttrLabel: {
    color: '#503924',
    fontSize: 24,
  },
  plantAttrValue: {
    color: '#fffefe',
    fontSize: 22,
    marginTop: '12%',
    marginBottom: '15%',
  },
  addPlantBtnContainer: {
    left: 255,
    position: 'absolute',
    top: 330,
    zIndex: 8,
  },
  addPlantBtn: {
    color: '#503924',
  },
  addPlantBtnText: {
    alignSelf: 'center',
    color: '#503924',
    fontSize: 24,
    marginTop: -10,
  },

  //MY GARDEN PAGE - components/pages/MyGarden.js
  myGardenContent: {
    flex: 8,
  },
  myGardenHeader: {
    alignItems: 'center',
    backgroundColor: 'rgba(93,162,91,.6)',
    flex: 1.5,
    justifyContent: 'center',
  },
  myGarden: {
    padding: '5%',
    paddingBottom: 0,

    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: '2%',
  },
  myGardenBody: {
    height: 180,
    width: 110,
    alignItems: 'center',
  },
  myGardenPlants: {
    alignItems: 'center',
    height: 120,
    width: 120,
  },
  icon: {
    textShadowColor: 'grey',
    textShadowOffset: {width: 1, height: 12},
    textShadowRadius: 5,
    color: 'limegreen',
  },
  dirtBackground: {
    flex: 1,
    width: '100%',
  },
  iconContainer: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  gardenPlantText: {
    textAlign: 'center',
  },

  // PLANT PROFILE PAGE - components/pages/PlantProfile.js
  plantName: {
    color: '#fafafa',
    fontSize: 20,
  },
  plantProfileContainer: {
    backgroundColor: 'rgba(159, 135, 95, .9)',
    paddingTop: '20%',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    width: '85%',
    height: '100%',
  },
  plantActionsContainer: {
    alignSelf: 'flex-start',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -15,
    width: '100%',
  },
  actionButtons: {
    alignItems: 'center',
  },
  waterButtonText: {
    color: '#0774B9',
  },
  removeButtonText: {
    color: '#9e020f',
  },
  plantChoresContent: {
    height: '85%',
  },
  plantProfileAttrLabel: {
    color: '#503924',
    fontSize: 24,
  },
  plantProfileAttrValue: {
    color: '#fffefe',
    fontSize: 22,
    marginBottom: '3%',
  },

  // NAME PLANT PAGE
  addPlantContainer: {
    alignItems: 'center',
    flex: 8,
    marginTop: '-10%',
    marginBottom: '10%',
  },
  addNameForm: {
    backgroundColor: 'rgba(194, 173, 134, .8)',
    height: '100%',
    justifyContent: 'center',
    height: '80%',
    width: '85%',
  },
  namePlantInputContainer: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: '30%',
    marginBottom: -80,
    width: '85%',
  },
  addNameSearchbox: {
    backgroundColor: 'rgba(255, 254, 254, .1)',
    borderColor: '#000',
    borderRadius: 2,
    borderWidth: 1,
    height: 40,
    padding: 5,
    width: '100%',
  },
  submitBtn: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#5DA25B',
    marginTop: 5,
    padding: 8,
    width: '40%',
  },
});
