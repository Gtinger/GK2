import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const localImage = require("../Images/toi-letz.jpg") //baggrundsbillede

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => { //unsubscribe gør at funktionen ikke pinger når det ikke er nødvendigt
       const unsubscribe = auth.onAuthStateChanged(user => {
            if (true) {navigation.navigate("Home")}
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth.
        createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.User;
            console.log('Registered with: ',user.email)
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('logged in with: ', user.email)
        })
        navigation.navigate("Home")

    }


   

  return (
    <KeyboardAvoidingView style={styles.container}
    behavior="padding">
       <ImageBackground source={localImage} style={styles.localImage}>
        <View style={styles.inputContainer}>
            <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text) }
            style={styles.input}/>
             <TextInput
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
 
        </View>
        

        <View style={styles.buttonContainer}>
             <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
            >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
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
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
    localImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
      },
  })