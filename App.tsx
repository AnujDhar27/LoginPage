import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>LOGIN</Text>
      <Image source={require("./assets/ab26c2360ca97904e4163d6089e33b73.jpg")}
      style={{width:300,height:200,marginBottom:70}}/>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          
          placeholderTextColor="#FFE5CA"
          onChangeText={(email) => setEmail(email)}
          textAlign="center"
        
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#FFE5CA"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          textAlign="center"
        /> 
      </View> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#F80302",
    borderRadius: 20,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  Header:{
    fontSize:30,
    marginBottom:30,
    fontWeight:'bold',
    color:'#FFFFFF',
  },
 
});