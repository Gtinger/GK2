import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import * as data1 from './data.json'






const HomeScreen = () => {
    const data = data1.location
    const navigation = useNavigation()

  
    const [likePressed, setLikePressed] = useState(false);
    const [dislikePressed, setDislikePressed] = useState(false);
  
    const handleLikePress = () => {
      setLikePressed(!likePressed);
      setDislikePressed(false);
    };
  
    const handleDislikePress = () => {
      setDislikePressed(!dislikePressed);
      setLikePressed(false);
    };

    const handleNavigate = () => {
        navigation.navigate("Maps")
    }

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.navigate("Login")
          })
          .catch(error => alert(error.message))
      }
      return (
        <View >
            <Text style={styles.title}>Accessible</Text>
          {data.map((item) => {
            if (item.handicapFriendly) {
                return (
                <><TouchableOpacity onPress={handleNavigate}>
                    <Text style={styles.item} key={item.id}>{item.Name} {item.rating}
                    </Text>

                  </TouchableOpacity>
                  <View style={styles.container} >
        <TouchableOpacity
                  
          style={[styles.likeButton, likePressed ? styles.likeButtonPressed : null]}
          onPress={handleLikePress}
        >
          <Text style={styles.likeButtonText} key={item.Name}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.likeButton, dislikePressed ? styles.likeButtonPressed : null]}
          onPress={handleDislikePress}
        >
          <Text style={styles.likeButtonText}>Dislike</Text>
        </TouchableOpacity>
        </View>
        </>
        
                )
                }    
            })}
                        <Text style={styles.title}>Less Accessible</Text>
          {data.map((item) => {
            if (!item.handicapFriendly) {
                return <Text style={styles.item} key={item.id}>{item.Name} {item.rating}</Text>
                }    
            })}
      <TouchableOpacity 
      onPress={handleSignOut}
      style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

        </View>
      );
    };

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    title: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'black',
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        
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
        item: {
            fontSize: 18,
            color: 'blue',
            backgroundColor: 'white',
            borderColor: 'lightgray',
            borderWidth: 1,
            padding: 10,
            margin: 5,
          },
          likeButton: {
            backgroundColor: '#0782F9',
            
            padding: 3,
            borderRadius: 15,
            alignItems: 'center',
            marginHorizontal: 5,            
          },
          likeButtonPressed: {
         
          },
          likeButtonText: {
            color: '#fff',
          },

})