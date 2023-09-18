import React from 'react'
import { View , Text } from 'react-native';
import Homee from "../components/Home/Home.jsx";
import Tabbar from "../components/Tabbar/Tabbar";
function Home() {
  return (
    <View style={{flex:1}}>
    <Homee/>
    <Tabbar/>

    </View>

  )
}

export default Home
