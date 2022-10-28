import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
import * as data from "./data.json"

const done = data.done
const todos = data.todo
const locations = data.location
//definer tomt array til locationer
const arrLocation = []

for(let i=0;i<locations.length;i++){
    arrLocation.push(locations[i].Name)
}
 
 

//homeScreen mapper hhv todo, locations, og done
function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>This is your current to-do list:</Text>

  
        {
            todos.map((todo,key)=>{
                return(
                    <Text style={styles.text} key={key}>
                        ◉ {todo} 

                    </Text>
                )
            })
        }
<Text style={styles.header}>Locations of interest:</Text>

{
            arrLocation.map((location,key)=>{
                return(
                    <Text style={styles.text} key={key}>
                        ◉ {location} 

                    </Text>
                )
            })
        }
        <Text style={styles.header}>Completed</Text>
  {
            done.map((done,key)=>{
                return(
                    <Text style={styles.textDone} key={key}>
                        ◉ {done} 

                    </Text>
                )
            })
        }



        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkslategrey',
        height:'100%'
    },
    header:{
        fontSize: 24,
        color:"white",
        fontWeight: 'bold',
        padding: 10
    },
    text: {
        fontSize: 20,
        color:"wheat"
    },    
    textDone: {
        fontSize: 20,
        color:"gray",
        fontStyle: 'italic',
    }
});