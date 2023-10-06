import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Color } from "./GlobalStyles";

const TransferFailed = () => {
  const handleButtonClick = () => {
    console.log("Button Base clicked");
  };
  return (
    <View style={styles.transferFailed}>
      
      <Image
        style={[styles.baseIcon, styles.baseIconLayout]}
        contentFit="cover"
        source={require("../../assets/payval/modal-base.png")}
      />
      <Text style={[styles.oopsTransferFailed, styles.textPosition]}>
        Oops, Transfer Failed
      </Text>
      <Text style={[styles.text, styles.textPosition]}>$50,00</Text>
      <Image
        style={styles.separatorIcon}
        contentFit="cover"
        source={require("../../assets/payfail/separator.png")}
      />
      <Text style={[styles.displayXlmedium, styles.displayTypo1]}>Date</Text>
      <Text style={[styles.displayXlmedium1, styles.displayTypo]}>
        Tue, 4 Apr 2023
      </Text>
      <Text style={[styles.displayXlmedium2, styles.displayPosition2]}>
        Time
      </Text>
      <Text style={[styles.displayXlmedium3, styles.displayPosition2]}>
        08:42 PM
      </Text>
      <Text style={[styles.displayXlmedium4, styles.displayPosition1]}>
        Status
      </Text>
      <Text style={[styles.displayXlmedium5, styles.displayPosition1]}>
        Pending
      </Text>
      <Text style={[styles.displayXlmedium6, styles.displayPosition]}>
        Reference No.
      </Text>
      <Text style={[styles.displayXlmedium7, styles.displayPosition]}>
        84992847592
      </Text>
      <Image
        style={styles.separatorIcon1}
        contentFit="cover"
        source={require("../../assets/payfail/separator1.png")}
      />
      <Image
        style={styles.iconalertFill}
        contentFit="cover"
        source={require("../../assets/payfail/triangle.png")}
      />
      <Text style={styles.weCantSend}>
        We can’t send the money to this user, please don’t close the app while
        transaction happens
      </Text>
      <Image
        style={[styles.baseIcon1, styles.baseIconLayout]}
        contentFit="cover"
        source={require("../../assets/payfail/base.png")}
      />
     
      <Image
        style={[styles.iconcloseFill, styles.baseIconLayout]}
        contentFit="cover"
        source={require("../../assets/payfail/Vector.png")}
      />
      <View />
      <Text style={styles.tryAgain}>Try Again</Text>
      <TouchableOpacity style={styles.clickButton} onPress={handleButtonClick}>
        <Image
          contentFit="cover"
          source={require("../../assets/payfail/button-base.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    width: 169,
    color: Color.rhinoDark600,
    left: 125,
    textAlign: "center",
    position: "absolute",
  },
  displayTypo1: {
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    top: 250,
    letterSpacing: -0.1,
    position: "absolute",
  },
  displayTypo: {
    color: Color.rhinoDark500Main,
    fontWeight: "700",
    top:250
  },
  displayPosition2: {
    top: 310,
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    letterSpacing: -0.1,
    position: "absolute",
  },
  displayPosition1: {
    top: 370,
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    letterSpacing: -0.1,
    position: "absolute",
  },
  displayPosition: {
    top: 430,
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    letterSpacing: -0.1,
    position: "absolute",
  },
  baseIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  baseIcon: {
    top: 20,
    right: 0,
    bottom: 77,
    left: 23,
    borderRadius: 15,
    height: 700,
    width: 370
  },
  oopsTransferFailed: {
    top: 165,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: 13,
    color: Color.rhinoDark600,
    left: 34,
  },
  text: {
    top: 135,
    fontSize: 27,
    letterSpacing: -0.2,
    lineHeight: 26,
    fontWeight: "700",
    left:160
  },
  separatorIcon: {
    top: 200,
    left: 68,
    height: 1,
    width: 280,
    position: "absolute",
    backgroundColor: "gray",  
  },
  displayXlmedium: {
    color: Color.rhinoDark300,
    left: 70,
  },
  displayXlmedium1: {
    left: 270,
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    top: 184,
    letterSpacing: -0.1,
    position: "absolute",
  },
  displayXlmedium2: {
    color: Color.rhinoDark300,
    left: 70,
  },
  displayXlmedium3: {
    left: 270,
    color: Color.rhinoDark500Main,
    fontWeight: "700",
  },
  displayXlmedium4: {
    color: Color.rhinoDark300,
    left: 70,
  },
  displayXlmedium5: {
    left: 270,
    color: Color.rhinoDark500Main,
    fontWeight: "700",
  },
  displayXlmedium6: {
    color: Color.rhinoDark300,
    left: 70,
  },
  displayXlmedium7: {
    left: 270,
    color: Color.rhinoDark500Main,
    fontWeight: "700",
  },
  separatorIcon1: {
    top: 490,
    left: 68,
    height: 1,
    width: 280,
    position: "absolute",
    backgroundColor: "gray",
  },
  iconalertFill: {
    top: 515,
    left: 198,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  weCantSend: {
    top: 545,
    fontSize: 12,
    lineHeight: 11,
    color: Color.mandyRed500Main,
    left: 53,
    width: 300,
    textAlign: "center",
    letterSpacing: -0.1,
    position: "absolute",
  },
  baseIcon1: {
    height: "19.27%",
    width: "33.07%",
    top: "0%",
    right: "30.71%",
    bottom: "81.98%",
    left: "35%",

  },

  iconcloseFill: {
    height: "4%",
    width: "7%",
    top: "5.5%",
    right: "41.46%",
    bottom: "85.92%",
    left: "47.6%",
  },
  clickButton: {
    height: "6.16%",
    width: "87.2%",
    top: "86.59%",
    right: "5.99%",
    bottom: "15.26%",
    left: "6.81%",
    backgroundColor: "#99e86c",
    shadowColor: "rgba(141, 155, 170, 0.15)",
    shadowOffset: {
      width: 0,
      height: 16.29802894592285,
    },
    shadowRadius: 37.61,
    elevation: 37.61,
    shadowOpacity: 1,
    position: "absolute",
    borderRadius: 19,
  },
  tryAgain: {
    marginTop: 153.5,
    marginLeft: -22.53,
    top: "68.6%",
    left: "50%",
    fontWeight: "700",
    color: "#101010",
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: 13,
    position: "absolute",
    zIndex:1
  },
  transferFailed: {
    backgroundColor: "#e9bbba",
    flex: 1,
    width: "100%",
    height: 509,
    // overflow: "hidden",
  },
  baseIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    zIndex:-1,
  },
});

export default TransferFailed;
