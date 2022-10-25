import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
import * as data from "./data.json"

//henter data fra database
const dones = data.done

function SettingsScreen() { return (
    <View style={styles.container}>
        <Text style={styles.header}>You've completed these tasks:</Text> 
    {
        dones.map((done,key)=>{
            return(
                <Text style={styles.text} key={key}>
                    * {done}
                </Text>
            )
        })
    }



    </View>
);
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height:'100%'
    },
    header:{
        fontSize: 24,
        color:"white"
    },
    text: {
        fontSize: 20,
        color:"gray"
    },
});