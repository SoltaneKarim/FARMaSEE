import React , { useState , useEffect } from "react";
import { View , Text , StyleSheet , SafeAreaView , Image ,ScrollView} from "react-native";
import { Stack,useRouter } from "expo-router";
import Login from "../components/Login/Login.jsx";



const App = () => {

  

    return (
      <SafeAreaView style={styles.container}>
    
         <Login />
        

      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      // Add any necessary styling for the container
    },
  });
  
  export default App;