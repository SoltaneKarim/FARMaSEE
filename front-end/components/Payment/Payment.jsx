import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity,ScrollView } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyle.js";

const Care = () => {
  const handlePayNowClick = () => {
    alert("Pay Now clicked!");
  };
  return (
    <ScrollView>

    <View style={styles.paymentSuccess}>
      <TouchableOpacity onPress={handlePayNowClick}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={styles.primaryButton}>Pay Now</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../../assets/icons/Background.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../../assets/icons/taswira2-removebg.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../../assets/icons/taswira2-removebg.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../../assets/icons/taswira2-removebg.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../../assets/icons/taswira2-removebg.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../../assets/icons/taswira2-removebg.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../../assets/icons/taswira2-removebg.png")}
        />
        <View style={[styles.icon, styles.iconFlexBox]}>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../../assets/icons/Icon.png")}
          />
        </View>
        <View style={styles.content1}>
          <Text style={styles.price}>Price</Text>
          <Text style={[styles.text, styles.premiumTypo]}>$125.5</Text>
        </View>
        <View style={[styles.content2, styles.buttonFlexBox]}>
          <Text style={[styles.getPremium, styles.premiumTypo]}>
            Get Premium
          </Text>
          <Text style={styles.getNewFeatures}>Get new features</Text>
        </View>
        <View style={styles.line} />
        <Text style={[styles.management, styles.managementTypo]}>
          Management
        </Text>
        <Text style={[styles.veterinarian, styles.managementTypo]}>
          Veterinarian
        </Text>
        <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
        <Text style={[styles.healthCare, styles.chatTypo]}>Health-care</Text>
        <Image
          style={[styles.xIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/icons/X.png")}
        />
        <Image
          style={[styles.xIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/icons/X.png")}
        />
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.premiumStatus, styles.icon2Position]}>
          Premium Status
        </Text>
      </View>
      <Text style={[styles.management1, styles.management1Typo]}>
        Management
      </Text>
      <Text style={[styles.veterinarian1, styles.management1Typo]}>
        Veterinarian
      </Text>
      <Text style={[styles.chat1, styles.chat1Typo]}>Chat</Text>
      <Text style={[styles.healthCare1, styles.chat1Typo]}>Health-care</Text>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "28.02%",
    right: "70.95%",
    width: "7.03%",
    height: "4.81%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    bottom: "54.42%",
    top: "21.00%",
  },
  vectorIconPosition: {
    bottom: "43.65%",
    top: "35.54%",
  },
  vectorIconLayout: {
    left: "70.97%",
    right: "25.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.03%",
    height: "4.81%",
    position: "absolute",
    overflow: "hidden",
  },
  iconFlexBox: {
    flexDirection: "row",
    backgroundColor: Color.primaryGreen500,
  },
  premiumTypo: {
    fontFamily: FontFamily.latoBlack,
    fontWeight: "900",
    textAlign: "center",
  },
  managementTypo: {
    width: 144,
    lineHeight: 18,
    top: 260,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.grayscaleText,
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    position: "absolute",
  },
  chatTypo: {
    top: 350,
    width: 144,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.grayscaleText,
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    left: "71.00%",
    right: "24.77%",
    width: "7.34%",
    height: "4.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headerPosition: {
    height: 80,
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon2Position: {
    top: 28,
    position: "absolute",
  },
  management1Typo: {
    top: 215,
    width: 144,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.grayscaleText,
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    position: "absolute",
  },
  chat1Typo: {
    top: 295,
    width: 144,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.grayscaleText,
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    position: "absolute",
  },
  primaryButton: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    color: Color.grayscaleText,
  },
  button: {
    top: 700,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.primaryGreen500,
    width: 327,
    left: 40,
  },
  backgroundIcon: {
    borderRadius: 8,
    height: 488,
    width: 327,
    left: 18,
    top:-30
  },
  vectorIcon: {
    bottom: "26.35%",
    top: "57.85%",
  },
  vectorIcon1: {
    top: "74.62%",
    bottom: "15.58%",
  },
  vectorIcon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "28.62%",
    right: "70.95%",
    width: "7.03%",
    height: "4.81%",
    position: "absolute",
    overflow: "hidden",
    
  },
  vectorIcon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "28.02%",
    right: "70.95%",
    width: "7.03%",
    height: "4.81%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    bottom: "43.65%",
    top: "36.00%",
  },
  vectorIcon5: {
    bottom: "54.42%",
    top: "21%",
  },
  icon1: {
    width: 40,
    height: 40,
  },
  icon: {
    left: 155,
    borderRadius: 64,
    padding: 12,
    top: -55,
    position: "absolute",
  },
  price: {
    color: Color.grayscaleWhite,
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    fontFamily: FontFamily.latoBlack,
    fontWeight: "900",
    letterSpacing: 1,
    color: Color.grayscaleWhite,
  },
  content1: {
    top: 448,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    backgroundColor: Color.primaryBlue500,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 20,
    justifyContent: "space-between",
    left: 18,
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    position: "absolute",
  },
  getPremium: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: FontFamily.latoBlack,
    fontWeight: "900",
    color: Color.grayscaleText,
    top:-80,
    left: 25
  },
  getNewFeatures: {
    lineHeight: 22,
    fontFamily: FontFamily.latoRegular,
    color: Color.grayscaleLightText,
    width: 295,
    marginTop: 8,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top:-85,
    left: 25
  },
  content2: {
    top: 88,
    left: 16,
  },
  line: {
    top: 300,
    borderStyle: "dashed",
    borderColor: "#3B3737",
    borderRadius: 0.001,
    borderTopWidth: 1,
    width: 280,
    height: 1,
    left: 41,
    position: "absolute",
    top:234
  },
  management: {
    left:33,
  },
  veterinarian: {
    left: 174,
  },
  chat: {
    left: 30,
  },
  healthCare: {
    left: 176,
  },
  xIcon: {
    bottom: "26.54%",
    top: "58%",
  },
  xIcon1: {
    top: "75%",
    bottom: "15.58%",
  },
  content: {
    top: 138,
    height: 520,
    width: 327,
    left: 24,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.grayscaleWhite,
  },
  premiumStatus: {
    left: 121,
    lineHeight: 24,
    fontFamily: FontFamily.latoBlack,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
    top: 56,
    color: Color.grayscaleText,
  },
  management1: {
    left: 60,
  },
  veterinarian1: {
    left: 200,
  },
  chat1: {
    left: 55,
  },
  healthCare1: {
    left: 200,
  },
  paymentSuccess: {
    backgroundColor: "#CDEDD8",
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Care;
