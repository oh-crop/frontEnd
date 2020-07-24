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
    // flex: 1,
    marginBottom: 10,
  },
  searchResultsContainer: {
    // flex: 3,
    // alignItems: 'center',
    // borderWidth: 2,
    // justifyContent: 'space-between',
    // height: 1000,
    // overflow: 'scroll',
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
    // alignSelf moves box to middle
  },
  searchButton: {
    width: 200,
    alignSelf: 'center',
   },
   //My Garden Page
   myGardenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
   },
   myGardenHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
   },
   myGardenBody: {
    alignItems: 'center',
    backgroundColor: '#76480B',
    flexDirection: 'Row',
    flex: 3,
    justifyContent: 'center',
    flexWrap: 'wrap',
   },
   myGardenPlants: {
    padding: 10,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    
   },
   icon: {
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 12},
    textShadowRadius: 5,
    margin: 10,
    color: 'limegreen',
   }
});
