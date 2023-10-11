import React , { useState , useEffect } from "react";
import { View , Text , StyleSheet , SafeAreaView , Image ,ScrollView} from "react-native";
import { Stack,useRouter } from "expo-router";
import Login from "../components/Login/Login.jsx";
import Profile from "../components/Profile/Profile.jsx";
import Loader from "../components/Loader/Loader.jsx";
import Search from "../components/search/search.jsx";
import Chou from "../components/chatbest/chatbest.jsx";
import Identify from "../components/identify/identify.jsx";
import Test from "../components/test/test.jsx";
import Groups from "../components/groups/groups.jsx";
const App = () => {

  

    return (
      <SafeAreaView style={styles.container}>
    
         <Loader />

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