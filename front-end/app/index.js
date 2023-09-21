import React , { useState , useEffect } from "react";
import { View , Text , StyleSheet , SafeAreaView , Image ,ScrollView} from "react-native";
import { Stack,useRouter } from "expo-router";
import Loader from "../components/Loader/Loader.jsx";
import Tabbar from "../components/Tabbar/Tabbar.jsx";
import Chat from "../components/chat/Chat.jsx";
import Login from "../components/Login/Login.jsx";
import Home from "../components/Home/Home.jsx";
const App = () => {
    return (
      <SafeAreaView style={styles.container}>
    
         <Loader/>

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