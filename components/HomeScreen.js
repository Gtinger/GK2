import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

    const localImage = require("../Images/toi-letz.jpg")

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.navigate("Login")
          })
          .catch(error => alert(error.message))
      }
  return (
    
    <ImageBackground source={localImage} style={styles.container}>
        <ImageBackground source={localImage}></ImageBackground>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity 
      onPress={handleSignOut}
      style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent: 'space-between',
        
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16},

})