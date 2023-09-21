import React from 'react'
import { View , Text, StyleSheet, SafeAreaView,ScrollView } from 'react-native';
import Homee from "../components/Home/Home.jsx";
import Tabbar from "../components/Tabbar/Tabbar";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Content of the Home component */}
        <Homee />
      </ScrollView>
      {/* Tabbar component */}
      <Tabbar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Add any necessary styling for the container
  },
});
export default Home
