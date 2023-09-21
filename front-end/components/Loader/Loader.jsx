import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Provider } from 'react-redux';
import store from '../../redux/store';
function Loader() {


  const router = useRouter();

  useEffect(() => {
    // Wait for 3 seconds and then navigate to "/Login"
    const timeout = setTimeout(() => {
      router.push("/onboarding");
    }, 3000);

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <Image source={require("../../assets/ic_login_logo.png")} />
      <Text style={styles.farmasee}> Farm@see</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

    main:{
        flex:1,
        backgroundColor:"#5DB075",
        justifyContent:"center",
        alignItems:"center"
    },
    farmasee:{
        color: '#EEE',
        marginTop:20,
        textAlign: 'center',
   
        fontSize: 30.369,
        fontStyle: 'normal',
        fontWeight: '900',
    }
})
export default Loader
