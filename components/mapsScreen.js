import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {Accuracy} from "expo-location";
import {useState, useEffect} from "react";
import * as data from "./data.json"

const adress = data.location

console.log(adress[0].Name)

function MapsScreen() {

  
  const [hasLocationPermission, setlocationPermission] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [userMarkerCoordinates, setUserMarkerCoordinates] = useState([])
  const [selectedCoordinate, setSelectedCoordinate] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState(null)

 
  const getLocationPermission = async () => {
    await Location.requestForegroundPermissionsAsync().then((item)=>{
      setlocationPermission(item.granted)
    } );

  };


  useEffect (() => {
    const response = getLocationPermission()
  });


  const updateLocation = async () => {
    await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced}).then((item)=>{
      setCurrentLocation(item.coords)
    } );
  };

  const handleLongPress = event => {
    const coordinate = event.nativeEvent.coordinate
    setUserMarkerCoordinates((oldArray) => [...oldArray, coordinate])
  };

 
  const handleSelectMarker = async coordinate =>{
    setSelectedCoordinate(coordinate)
    await Location.reverseGeocodeAsync(coordinate).then((data) => {
          setSelectedAddress(data)
        }
    )
  };


  const closeInfoBox = () =>
      setSelectedCoordinate(null) && setSelectedAddress(null)


  const RenderCurrentLocation = (props) => {
    if (props.hasLocationPermission === null) {
      return null;
    }
    if (props.hasLocationPermission === false) {
      return <Text>No location access. Go to settings to change</Text>;
    }
    return (
        <View>
          <Button style title="update location" onPress={updateLocation} />

        </View>
    );
  };

  {
    return (
        <SafeAreaView style={styles.container}>
          <RenderCurrentLocation props={{hasLocationPermission: hasLocationPermission, currentLocation: currentLocation}} />
          <MapView
              provider="google"
              style={styles.map}
              showsUserLocation
              onLongPress={handleLongPress}>
 


            <Marker
                coordinate={{ latitude: adress[0].latitude, longitude: adress[0].longitude }} 
                title={adress[0].Name}
                description={adress[0].description}
            />
            <Marker
                coordinate={{ latitude: adress[1].latitude, longitude: adress[1].longitude }} 
                title={adress[1].Name}
                description={adress[1].description}
            />
            <Marker
                coordinate={{ latitude: adress[2].latitude, longitude: adress[2].longitude }} 
                title={adress[2].Name}
                description={adress[2].description}
                  />
            {userMarkerCoordinates.map((coordinate, index) => (
                <Marker
                    coordinate={coordinate}
                    key={index.toString()}
                    onPress={() => handleSelectMarker(coordinate)}
                />
            ))}
          </MapView>
          {selectedCoordinate && selectedAddress && (
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                  {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                </Text>
                <Text style={styles.infoText}>
                  name: {selectedAddress[0].name}  region: {selectedAddress[0].region}
                </Text>
                <Button title="close" onPress={closeInfoBox} />
              </View>
          )}
        </SafeAreaView>
    );
  }
}


//Styling i app js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  map: { flex: 1 },
  infoBox: {
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 15,
  },
});
export default MapsScreen