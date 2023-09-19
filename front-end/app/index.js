import React , { useState , useEffect } from "react";
import { View , Text , StyleSheet , SafeAreaView , Image ,ScrollView} from "react-native";
import { Stack,useRouter } from "expo-router";
import Loader from "../components/Loader/Loader.jsx";
import Tabbar from "../components/Tabbar/Tabbar.jsx";
import Chat from "../components/chat/Chat.jsx";
import Login from "../components/Login/Login.jsx";
const App = ()=>{

    return (            
      <View style={{flex:1}} >
      <Chat />
      {/* <Login /> */}
      </View>
)
    }


export default App;