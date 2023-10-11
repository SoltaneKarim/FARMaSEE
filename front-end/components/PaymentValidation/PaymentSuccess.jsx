import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color } from "./GlobalStyles";
import { useRouter } from "expo-router";

const PaymentValidation = () => {
	const router = useRouter();

    const handleSaveReceiptClick = () => {
        console.log("Save Receipt clicked!");
      };

  return (
    <View style={styles.viewListToViewPaymentRece}>
      <Image
        style={styles.ornamentIcon}
        contentFit="cover"
        source={require("../../assets/payval/bottom.png")}
      />
      <View style={[styles.iosAssets, styles.iosAssetsPosition]}>
        <View style={styles.iosAssetsChild} />
      </View>
      <TouchableOpacity onPress={handleSaveReceiptClick}>
        <View style={[styles.buttons, styles.buttonsShadowBox]}>
          <View style={[styles.buttonBase, styles.buttonsShadowBox]} />
          <Text style={[styles.saveReceipt, styles.juTypo]}>Save Receipt</Text>
        </View>
      </TouchableOpacity>
      <Image
        style={[styles.modalBaseIcon, styles.baseIconLayout]}
        contentFit="cover"
        source={require("../../assets/payval/modal-base.png")}
      />
      <Text style={[styles.transferSuccessfullyDone, styles.textPosition]}>
        Transfer Successfully Done!
      </Text>
      <Text style={[styles.text, styles.textPosition]}>$50,00</Text>
      <Image
        style={[styles.separatorIcon, styles.separatorIconLayout]}
        contentFit="cover"
        source={require("../../assets/payval/separator.png")}
      />
      <Text style={[styles.displayXlmedium, styles.displayPosition3]}>
        Date
      </Text>
      <Text style={[styles.displayXlmedium1, styles.displayPosition3]}>
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
        Success
      </Text>
      <Text style={[styles.displayXlmedium6, styles.displayPosition]}>
        Reference No.
      </Text>
      <Text style={[styles.displayXlmedium7, styles.displayPosition]}>
        839947294824
      </Text>
      <Image
        style={[styles.baseIcon, styles.baseIconLayout]}
        contentFit="cover"
        source={require("../../assets/payval/base.png")}
      />
      <Image
        style={[styles.baseIcon1, styles.baseIconLayout]}
        contentFit="cover"
        source={require("../../assets/payval/base1.png")}
      />

<TouchableOpacity onPress={()=>(router.push=("/chatbest"))}>
        <Image
          style={[styles.iconcheckLine, styles.baseIconLayout]}
          contentFit="cover"
          source={require("../../assets/payval/Vector.png")}
        />
      </TouchableOpacity>
				

    </View>
  );
};

const styles = StyleSheet.create({
  buttonsShadowBox: {
    shadowOpacity: 1,
    elevation: 37.61,
    shadowRadius: 37.61,
    shadowOffset: {
      width: 0,
      height: 9.402709007263184,
    },
    position: "absolute",
  },
  baseIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    zIndex:-1,
  },
  separatorIconLayout: {
    height: 1,
    width: 280,
    left: 68,
    position: "absolute",
    backgroundColor: "green",
},
  displayPosition3: {
    top: 260,
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    letterSpacing: -0.1,
    position: "absolute",
  },
  displayPosition2: {
    top: 320,
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    letterSpacing: -0.1,
    position: "absolute",
  },
  displayPosition1: {
    top: 380,
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    letterSpacing: -0.1,
    position: "absolute",
  },
  displayPosition: {
    top: 440,
    textAlign: "left",
    lineHeight: 15,
    fontSize: 13,
    letterSpacing: -0.1,
    position: "absolute",
  },
  ornamentIcon: {
    top: 686,
    left: 110,
    width: 190,
    height: 130,
    position: "absolute",
  },
  buttonBase: {
    height: "160%",
    top: "387%",
    backgroundColor: "#99e86c",
    shadowColor: "rgba(141, 155, 170, 0.15)",
    left: "15%",
    bottom: "0%",
    right: "0%",
    width: "158%",
    borderRadius: 25,
    shadowOpacity: 1,
    elevation: 37.61,
    shadowRadius: 37.61,
    shadowOffset: {
      width: 0,
      height: 9.402709007263184,
    },
  },
  saveReceipt: {
    marginTop: -8.15,
    marginLeft: -31.03,
    color: "#101010",
    top: 153,
    fontWeight: "700",
    left: "90%",
  },
  buttons: {
    top: 379,
    left: 15,
    borderRadius: 10,
    shadowColor: "rgba(141, 155, 170, 0.05)",
    width: 205,
    height: 33,
  },
  modalBaseIcon: {
    top: 90,
    right: 0,
    bottom: 77,
    left: 23,
    borderRadius: 15,
    height:500,
    width: 370
  },
  transferSuccessfullyDone: {
    top: 170,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: 13,
    color: Color.rhinoDark600,
    left: 125,
  },
  text: {
    top: 116,
    fontSize: 27,
    letterSpacing: -0.2,
    lineHeight: 26,
    fontWeight: "700",
    left:160
  },
  separatorIcon: {
    top: 215,
  },
  displayXlmedium: {
    color: Color.rhinoDark300,
    left: 65,
  },
  displayXlmedium1: {
    left: 260,
    color: Color.rhinoDark500Main,
    fontWeight: "500",
  },
  displayXlmedium2: {
    color: Color.rhinoDark300,
    left: 65,
  },
  displayXlmedium3: {
    left: 260,
    color: Color.rhinoDark500Main,
    fontWeight: "500",
  },
  displayXlmedium4: {
    color: Color.rhinoDark300,
    left: 65,
  },
  displayXlmedium5: {
    left: 260,
    color: Color.rhinoDark500Main,
    fontWeight: "500",
  },
  displayXlmedium6: {
    color: Color.rhinoDark300,
    left: 65,
  },
  displayXlmedium7: {
    left: 260,
    color: Color.rhinoDark500Main,
    fontWeight: "500",
  },
  baseIcon: {
    height: "15.27%",
    width: "25.07%",
    top: "78%",
    right: "30.94%",
    bottom: "79.62%",
    left: "37%",
  },
  baseIcon1: {
    height: "19.41%",
    width: "41.89%",
    top: "78.5%",
    right: "27.24%",
    bottom: "73.59%",
    left: "29%",
  },
  iconcheckLine: {
    height: 39,
    width: 35,
    top: "83%",
    right: "41.69%",
    bottom: "83.56%",
    left: 190,
  },
  viewListToViewPaymentRece: {
    backgroundColor: "rgba(135, 216, 128, 0.45)",
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
  saveReceiptButton: {
    backgroundColor: "#99e86c",
    borderRadius: 10,
    width: 205,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PaymentValidation;
