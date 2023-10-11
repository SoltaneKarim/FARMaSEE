import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from "../components/search/search";
import Tabbar from "../components/Tabbar/Tabbar";
const search = () => {
  return (
    <View style={{flex:1}}>
   <Search/>
   <Tabbar/>
   </View>
  )
}

export default search

const styles = StyleSheet.create({})