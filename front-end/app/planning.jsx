import React from 'react'
import { View } from "react-native";
import Planning from "../components/Planning/Planing";
import Tabbar from "../components/Tabbar/Tabbar";
function planning() {
  return (
    <View style={{flex:1}}>
   <Planning/>
   <Tabbar/>
   </View>
  )
}

export default planning
