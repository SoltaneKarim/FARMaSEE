import React , { useState , useEffect } from "react";
import { View , Text , StyleSheet , SafeAreaView , Image} from "react-native";
import { Stack,useRouter } from "expo-router";
import Loader from "../components/Loader/Loader.jsx";
import Tabbar from "../components/Tabbar/Tabbar.jsx";
const App = ()=>{

    return (            
      <View style={{flex:1 }}>
      <Loader />
      </View>
)
    }


export default App;