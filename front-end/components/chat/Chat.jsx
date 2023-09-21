import * as React from "react";
import { Text, StyleSheet, View,Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "./GlobalStyles";

const ChatScreen = () => {
  return (
    <View style={styles.chatScreen}>
      <Text style={[styles.tittle, styles.tittleLayout]}>Yuji Itadori</Text>
      <Text style={[styles.tittle1, styles.tittleLayout]}>Yuji Itadori</Text>
      <Text style={[styles.tittle2, styles.tittleLayout]}>Yuji Itadori</Text>
      <Text style={[styles.tittle3, styles.tittleLayout]}>Yuji Itadori</Text>
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <Image
              style={[styles.rectangleParent, styles.groupLayout]}
              contentFit="cover"
              source={require("../../assets/rectangle.png")}
            />
            <Text style={[styles.okaaaaySeeU, styles.okayIWentTypo]}>
              Okaaaay! see u later :D
            </Text>
          </View>
          <Text style={[styles.text, styles.textTypo1]}>13.08</Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <Image
              style={[styles.rectangleIcon1, styles.rectangleLayout]}
              contentFit="cover"
              source={require("../../assets/rectangle-big.png")}
            />
            <Text style={[styles.okayIWent, styles.text2Clr]}>
              okay I went, and picked me up at 8 because if it's too late my
              skin hurts from the sun.
            </Text>
          </View>
          <Text style={[styles.text1, styles.textTypo]}>13.06</Text>
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text2, styles.text2Clr]}>👋</Text>
          <Text style={[styles.text3, styles.textTypo]}>13.09</Text>
        </View>
        <Text style={[styles.yujiIsTyping, styles.textTypo1]}>
          Yuji is typing...
        </Text>
      </View>
      <View style={[styles.textBox, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <View style={[styles.writeTextHere, styles.messageLayout]}>
          <Text style={[styles.message, styles.messageLayout]}>Message...</Text>
        </View>
        <Image
          style={[styles.sendButtonIcon, styles.messageLayout]}
          contentFit="cover"
          source={require("../../assets/send-button.png")}
        />
        <View style={[styles.stickerIcon, styles.stickerIconLayout]}>
          <View style={[styles.stickerIconChild, styles.stickerIconLayout]} />
          <View style={styles.rectangleContainer}>
            <Image
              style={[styles.groupItem, styles.groupItemPosition]}
              contentFit="cover"
              source={require("../../assets/sticker-icon.png")}
            />
          </View>
        </View>
        <View style={[styles.microphoneIcon, styles.vectorParentLayout]}>
          <View style={[styles.vectorParent, styles.vectorParentLayout]}>
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require("../../assets/micro.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.line1} />
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.tittleLayout]}
          contentFit="cover"
          source={require("../../assets/ellipse-4.png")}
        />
        <Text style={[styles.tittle4, styles.text2Clr]}>Y</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.tittleLayout]}
          contentFit="cover"
          source={require("../../assets/ellipse-4.png")}
        />
        <Text style={[styles.tittle4, styles.text2Clr]}>Y</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.tittleLayout]}
          contentFit="cover"
          source={require("../../assets/ellipse-4.png")}
        />
        <Text style={[styles.tittle4, styles.text2Clr]}>Y</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.tittleLayout]}
          contentFit="cover"
          source={require("../../assets/ellipse-4.png")}
        />
        <Text style={[styles.tittle4, styles.text2Clr]}>Y</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild1, styles.rectangleParentLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.tittleLayout]}
          contentFit="cover"
          source={require("../../assets/ellipse-4.png")}
        />
        <Text style={[styles.tittle4, styles.text2Clr]}>Y</Text>
      </View>
      <Text style={[styles.tittle9, styles.tittleLayout]}>Yuji Itadori</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tittleLayout: {
    height: 17,
    position: "absolute",
  },
  groupLayout: {
    width: 303,
    position: "absolute",
  },
  okayIWentTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  textTypo1: {
    opacity: 0.8,
    color: Color.colorSlategray_100,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    letterSpacing: 1,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleLayout: {
    height: 92,
    top: 0,
    width: 303,
    position: "absolute",
  },
  text2Clr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  textTypo: {
    textAlign: "right",
    opacity: 0.8,
    color: Color.colorSlategray_100,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  bgLayout: {
    height: 56,
    width: 327,
    position: "absolute",
  },
  bgPosition: {
    backgroundColor: Color.colorDarkslategray,
    top: 0,
    left: 0,
  },
  messageLayout: {
    height: 38,
    position: "absolute",
  },
  stickerIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupItemPosition: {
    left: 2,
    position: "absolute",
  },
  // vectorParentLayout: {
  //   width: 14,
  //   height: 20,
  //   position: "absolute",
  // },
  rectangleParentLayout: {
    height: 66,
    width: 66,
    position: "absolute",
  },
  tittle: {
    left: 4,
    width: 81,
    color: Color.colorSlategray_200,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 109,
  },
  tittle1: {
    left: 104,
    width: 81,
    color: Color.colorSlategray_200,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 109,
  },
  tittle2: {
    left: 197,
    width: 81,
    color: Color.colorSlategray_200,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 109,
  },
  tittle3: {
    left: 288,
    width: 81,
    color: Color.colorSlategray_200,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 109,
  },
  rectangleParent: {
    height: 50,
    top: 0,
    left: 0,
  },
  okaaaaySeeU: {
    top: 14,
    color: "#fefefe",
    left: 24,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 22,
    fontSize: 16,
  },
  text: {
    top: 62,
  },
  groupContainer: {
    top: 144,
    height: 78,
    left: 0,
  },
  rectangleIcon1: {
    left: -303,
  },
  okayIWent: {
    top: 12,
    left: -271,
    width: 251,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleGroup: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    left: -38,
  },
  text1: {
    top: 104,
    left: -35,
  },
  groupView: {
    left: 327,
    height: 120,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
  },
  text2: {
    fontSize: 104,
    letterSpacing: 1,
    color: Color.colorWhite,
    top: 0,
    left: 0,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text3: {
    top: 116,
    left: 69,
  },
  parent: {
    top: 246,
    left: 223,
    width: 104,
    height: 132,
    position: "absolute",
  },
  yujiIsTyping: {
    top: 394,
  },
  groupParent: {
    top: 292,
    height: 410,
    width: 327,
    left: 24,
    position: "absolute",
  },
  bg: {
    borderRadius: 125,
    height: 56,
    width: 327,
    position: "absolute",
  },
  message: {
    fontFamily: FontFamily.interRegular,
    display: "flex",
    alignItems: "center",
    width: 169,
    height: 38,
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 16,
    fontSize: 16,
    top: 0,
    left: 0,
    letterSpacing: 0.3,
  },
  writeTextHere: {
    left: 53,
    width: 169,
    height: 38,
    top: 9,
  },
  sendButtonIcon: {
    left: 273,
    width: 38,
    top: 9,
  },
  stickerIconChild: {
    backgroundColor: Color.colorSkyblue_100,
    opacity: 0,
    top: 0,
    left: 0,
  },
  groupChild: {
    borderColor: Color.colorSkyblue_100,
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    left: -1,
    top: -1,
    position: "absolute",
  },
  groupItem: {
    top: 2,
    borderRadius: 130,
    width: 15,
    height: 15,
  },
  rectangleContainer: {
    top: 3,
    left: 3,
    width: 18,
    height: 18,
    position: "absolute",
  },
  stickerIcon: {
    top: 16,
    left: 233,
  },
  groupInner: {
    width: 16,
    height: 12,
    left: -1,
    top: 9,
    position: "absolute",
  },
  rectangleView: {
    borderColor: "#12cbec",
    width: 10,
    height: 14,
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: -1,
    left: 2,
  },
  vectorParent: {
    top: 0,
    left: 0,
  },
  microphoneIcon: {
    top: 18,
    left: 21,
  },
  textBox: {
    top: 732,
    left: 24,
  },
  line: {
    height: "0.64%",
    width: "99.89%",
    top: "17.71%",
    right: "0.11%",
    bottom: "81.65%",
    left: "0%",
    backgroundColor: "rgba(255, 255, 255, 0.53)",
    position: "absolute",
  },
  line1: {
    height: "0.11%",
    width: "42.25%",
    top: "32.87%",
    right: "28.82%",
    bottom: "67.02%",
    left: "28.93%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChild1: {
    borderRadius: 54,
    backgroundColor: Color.colorDarkslategray,
    top: 0,
    left: 0,
  },
  ellipseIcon: {
    top: 48,
    left: 48,
    width: 17,
  },
  tittle4: {
    top: 20,
    left: 25,
    fontSize: 23,
    letterSpacing: 0.4,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent1: {
    left: 16,
    top: 27,
    width: 66,
  },
  rectangleParent2: {
    left: 204,
    top: 27,
    width: 66,
  },
  rectangleParent3: {
    top: 28,
    left: 296,
  },
  rectangleParent4: {
    left: 112,
    top: 27,
    width: 66,
  },
  rectangleParent5: {
    top: 167,
    left: 155,
  },
  tittle9: {
    top: 241,
    left: 148,
    width: 81,
    color: Color.colorSlategray_200,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mini,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  chatScreen: {
    backgroundColor: "#cfefcc",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChatScreen;
