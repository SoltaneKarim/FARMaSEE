import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Color, FontFamily } from "./GlobalStyles";
import { useSelector } from "react-redux";

const Profile = () => {
	const userName = useSelector((state) => state.user); // Assuming your user object in Redux has a 'name' property
    console.log("this is it",userName);



  const [walletAmount, setWalletAmount] = useState("1.1444449");

  const handleMessageClick = () => {
    console.log("Message clicked");
    // Add your logic here for what should happen when "MESSAGE" is clicked.
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    // Add your logic here for what should happen when "LOGOUT" is clicked.
  };

  const handlePlusClick = () => {
    console.log("+ clicked");
    // Add your logic here for what should happen when "+" is clicked.
  };

  const handleMinusClick = () => {
    console.log("- clicked");
    // Add your logic here for what should happen when "-" is clicked.
  };

  const handleWalletAmountChange = (newAmount) => {
    setWalletAmount(newAmount);
  };

  return (
    <View style={styles.profile}>
      <Image
        style={[styles.headerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/profile/header.png")}
      />
      <Image
        style={[styles.oval2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/profile/Oval-1.png")}
      />
      <View style={styles.line} />
      <Text style={[styles.sanFranciscoUsa, styles.jessicaJones27Clr]}>
        San Francisco, USA
      </Text>
      <Text style={[styles.jessicaJones27, styles.jessicaJones27Clr]}>
        Jessica Jones, 27
      </Text>

      <TouchableOpacity style={styles.default} onPress={() => handleLogoutClick("LOGOUT")}>
        <View style={[styles.message, styles.messagePosition]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Text style={[styles.message1, styles.message1Typo]}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
      <Image
        style={[styles.defaultIcon, styles.iconLayout]}
        contentFit="cover"
        source={user.image}
      />
      <View style={styles.money}>
        <TouchableOpacity onPress={handlePlusClick}>
          <Text style={[styles.text, styles.textTypo]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMinusClick}>
          <Text style={[styles.text1, styles.textTypo]}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.text2, styles.text2Typo]}
          value={walletAmount}
          onChangeText={handleWalletAmountChange}
          keyboardType="numeric"
        />

        <Text style={[styles.spinach, styles.text2Typo]}>WALLET</Text>
        <Image
          style={[styles.wallet11, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/profile/wallet-1-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  jessicaJones27Clr: {
    color: Color.colorDarkslateblue,
    textAlign: "left",
    position: "absolute",
  },
 
  bgPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2.7961666584014893,
    },
    backgroundColor: Color.colorDarkslategray_100,
    bottom: "0%",
    height: "82%",
    left: "-59%",
    top: "195%",
    position: "absolute",
    width: "100%",
  },
  message1Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: 14,
    top: "220%",
    textAlign: "center",
    lineHeight: 14,
    left:-73
  },
  hoverPosition: {
    display: "none",
    position: "absolute",
  },
  bg1ShadowBox: {
    elevation: 7.61,
    shadowRadius: 7.61,
    shadowColor: "rgba(50, 50, 93, 0.1)",
    borderRadius: 2,
  },
  
  text2Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  headerIcon: {
    height: "42.8%",
    width: "100.1%",
    right: "-0.1%",
    bottom: "57.2%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  oval2Icon: {
    height: "12.76%",
    width: "24.14%",
    top: "14.95%",
    right: "62.77%",
    bottom: "72.29%",
    left: "13.09%",
    opacity: 0.1,
  },
  line: {
    height: "0.2%",
    width: "56.54%",
    top: "38.26%",
    right: "21.52%",
    bottom: "61.64%",
    left: "21.94%",
    backgroundColor: "#e9ecef",
    position: "absolute",
  },
  sanFranciscoUsa: {
    top: "28%",
    left: "35%",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: FontFamily.openSansLight,
    textAlign: "left",
    lineHeight: 15,
    color: Color.colorDarkslateblue,
  },
  jessicaJones27: {
    top: "23%",
    fontSize: 23,
    lineHeight: 22,
    fontFamily: FontFamily.openSansRegular,
    left: "29.5%",
    textAlign: "left",
  },
  message1: {
    left: "29%",
  },
  default: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "10%",
    position: "absolute",
    width: "100%",
  },
  message: {
    height: "5%",
    width: "30%",
    top: "12.5%",
    right: "30.16%",
    left: "55%",
  },
  defaultIcon: {
    height: "25.76%",
    width: "53%",
    top: "0.5%",
    right: "25.49%",
    left: "25.77%",
  },
  text: {
    width: "14%",
    left: "90%",
    color: "#4a9c4a",
    fontSize:60,
    top:210
  },
  text1: {
    width: "12%",
    color: "#da1717",
    left: "0%",
    fontSize:100,
    top:100
    
  },
  text2: {
    height: "20%",
    width: "92.63%",
    top: "51.42%",
    left: "4.56%",
    fontSize: 33,
    color: "#1b5630",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 1,
  },
  spinach: {
    height: "10%",
    width: "42%",
    top: "74%",
    left: "33%",
    fontSize: 23,
    color: "#282c29",
  },
  wallet11: {
    height: "47%",
    width: "62.92%",
    right: "18.7%",
    bottom: "56.34%",
    left: "18.38%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  money: {
    height: "41.95%",
    width: "54.81%",
    top: "47.1%",
    right: "24.68%",
    bottom: "10.94%",
    left: "20.51%",
    position: "absolute",
  },
  profile: {
    flex: 1,
    height: 535,
    width: "100%",
  },
});

export default Profile;
