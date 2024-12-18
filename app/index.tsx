import {useState} from "react";
import { Text, View, StatusBar, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Index() {
  const [meme, setMeme] = useState("Memes coming soon...")
  return (
    <>
      <StatusBar hidden={true} />
      
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#222",
          paddingBottom: 48
        }}
      >
        <View 
          style={{flex: 1,
            justifyContent: "center",
            alignItems: "center"}}
        >
          <Image source={{uri: "https://blog.domotz.com/wp-content/uploads/2023/05/image.png"}} style={{width: 250, height:250}}/>
        </View>
        
        <View style={{flexDirection: "row"}}>
          <View style={{flex: 1}}>
          <TouchableOpacity style={styles.button} onPress={() => setMeme("Previous meme")}>
              <Text style={{color: "white"}}>Previous</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.button} onPress={() => setMeme("Next meme")}>
              <Text style={{color: "white"}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#678",
    padding: 25,
  }
})