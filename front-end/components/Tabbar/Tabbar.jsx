import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "./Globalstyle.js";
import { useRouter } from "expo-router";
const IPhone13ProMax3 = () => {
  const router = useRouter();

	return (
		<View style={styles.all}>
			<View style={[styles.frameParent2, styles.groupItemPosition]}>
				<TouchableOpacity
					
                    style={styles.vuesaxboldhome2Parent}
					onPress={() => alert("Pressed!")}>
                    
					<View >
						<Image
							style={styles.vuesaxboldhome2Icon}
							contentFit="cover"
							source={require("../../assets/home-2.png")}
						/>
						<Text style={[styles.home, styles.homeTypo]}>Home</Text>
					</View>
				</TouchableOpacity>

        <TouchableOpacity
          style={styles.vuesaxboldhome2Parent}
          onPress={() => router.push("chat")}
        >
          <View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../../assets/Vectora.png")}
            />

            <Text style={[styles.home, styles.homeTypo]}>Care</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.vuesaxboldhome2Parent}
          onPress={() => router.push("planning")}
        >
          <View>
            <Image
              style={styles.icTimeIcon}
              contentFit="cover"
              source={require("../../assets/ic_time.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Planning</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.vuesaxboldhome2Parent}
          onPress={() => router.push("profile")}
        >
          <View style={styles.vuesaxboldhome2Parent}>
            <Image
              style={styles.vuesaxboldhome2Icon}
              contentFit="cover"
              source={require("../../assets/frame.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
	all:{
	},
	signInLayout: {
		overflow: "hidden",
		height: 926,
	},
	frameParentShadowBox: {
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
	},
	augs2022Typo: {
		opacity: 0.7,
		textAlign: "left",
		color: Color.colorWhite,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	aboutToRipenFlexBox: {
		textAlign: "center",
		color: Color.colorWhite,
	},
	frameLayout: {
		height: 44,
		width: 44,
	},
	groupChildLayout: {
		height: 152,
		width: 359,
		position: "absolute",
	},
	partlyCloudyTypo: {
		lineHeight: 23,
		fontSize: 16,
		textAlign: "left",
		color: Color.colorWhite,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	textPosition: {
		left: 0,
		top: 0,
	},
	cFlexBox: {
		textAlign: "left",
		color: Color.colorWhite,
		position: "absolute",
	},
	t34Typo: {
		color: Color.colorGray_200,
		lineHeight: 23,
		fontSize: 16,
		textAlign: "left",
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	groupItemPosition: {
		width: "100%",
		left: 0,

		backgroundColor: Color.colorWhite,
	},
	newsLayout: {
		height: 31,
		position: "absolute",
	},
	chiliPlantTypo: {
		lineHeight: 18,
		color: Color.colorGray_100,
		textAlign: "center",
		fontSize: FontSize.size_sm,
	},
	groupLayout: {
		height: 229,
		width: 180,
		position: "absolute",
	},
	chiliPosition: {
		height: 47,
		left: 9,
		top: 165,
		position: "absolute",
	},
	homeTypo: {
		fontSize: FontSize.size_xs,
		textAlign: "center",
	},
	groupViewPosition: {
		left: 222,
		height: 229,
		width: 180,
		position: "absolute",
	},
	vuesaxboldgalleryIconLayout: {
		height: 30,
		width: 28,
		left: 105,
		position: "absolute",
	},
	vuesaxboldgalleryIconPosition: {
		left: 300,
		height: 30,
		width: 27,
		position: "absolute",
	},
	signInChild: {
		width: 212,
		height: 214,
		display: "none",
		transform: [
			{
				rotate: "-0.06deg",
			},
		],
	},
	hollaKevin: {
		lineHeight: 21,
		fontSize: FontSize.size_sm,
		alignSelf: "stretch",
		opacity: 0.7,
	},
	checkYourPlants: {
		marginTop: 4,
		fontFamily: FontFamily.interSemiBold,
		fontWeight: "600",
		fontSize: 16,
		textAlign: "center",
		lineHeight: 21,
		alignSelf: "stretch",
	},
	hollaKevinParent: {
		width: 188,
	},
	frameItem: {
		marginLeft: 8,
	},
	groupParent: {
		marginLeft: 43,
		flexDirection: "row",
	},
	frameParent: {
		height: "4.97%",
		width: "76.43%",
		top: "2.89%",
		right: "11.64%",
		bottom: "92.14%",
		left: "11.93%",
		shadowRadius: 4,
		elevation: 4,
		alignItems: "center",
		flexDirection: "row",
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		transform: [
			{
				rotate: "-0.06deg",
			},
		],
		position: "absolute",
	},
	signIn: {
		bottom: 1,
		backgroundColor: "#5db075",
		width: 427,
		transform: [
			{
				rotate: "-0.06deg",
			},
		],
		right: 0,
		position: "absolute",
	},
	groupChild: {
		bottom: 0,
		borderRadius: 16,
		backgroundColor: "rgba(255, 255, 255, 0.4)",
		right: 0,
	},
	vuesaxoutlinelocationIcon: {
		height: 27,
		width: 27,
	},
	colomaduIndonesia: {
		marginLeft: 6.7,
	},
	frameView: {
		alignItems: "center",
		flexDirection: "row",
	},
	augs2022: {
		fontSize: 13,
		lineHeight: 20,
		marginLeft: 48.01,
	},
	frameInner: {
		width: 329,
		height: 1,
		opacity: 0.2,
		marginTop: 11.16,
	},
	sunCloudIcon: {
		width: 50,
		height: 50,
	},
	text: {
		fontSize: 49,
		lineHeight: 74,
		fontFamily: FontFamily.interSemiBold,
		fontWeight: "600",
		textAlign: "left",
		color: Color.colorWhite,
		position: "absolute",
	},
	c: {
		top: 8,
		left: 66,
		fontSize: 27,
		lineHeight: 39,
		fontFamily: FontFamily.interRegular,
	},
	parent: {
		width: 98,
		height: 74,
		marginLeft: 14.51,
	},
	r22: {
		marginLeft: 13.4,
	},
	t34Parent: {
		marginTop: 4.47,
		flexDirection: "row",
	},
	partlyCloudyParent: {
		marginLeft: 44.66,
	},
	frameParent1: {
		marginTop: 15.63,
		alignItems: "center",
		flexDirection: "row",
	},
	frameGroup: {
		right: 18,
		bottom: 19,
		width: 324,
		height: 119,
		position: "absolute",
	},
	rectangleParent: {
		right: 35,
		bottom: 658,
		shadowRadius: 4.47,
		elevation: 4.47,
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowColor: "rgba(0, 0, 0, 0.25)",
	},
	groupItem: {
		top: 294,
		borderRadius: 30,
		height: 632,
	},
	news: {
		top: 310,
		left: 10,
		fontSize: 20,
		lineHeight: 26,
		width: 108,
		color: Color.colorGray_100,
		height: 31,
		textAlign: "center",
		fontFamily: FontFamily.interSemiBold,
		fontWeight: "600",
	},
	contactAnExpert: {
		top: 314,
		left: 274,
		width: 128,
		height: 22,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
		position: "absolute",
	},
	groupInner: {
		borderRadius: Border.br_xs,
		borderStyle: "solid",
		borderColor: Color.colorWhitesmoke,
		borderWidth: 1,
		left: 0,
		top: 0,
		backgroundColor: Color.colorWhite,
	},
	rectangleView: {
		borderTopLeftRadius: Border.br_xs,
		borderTopRightRadius: Border.br_xs,
		backgroundColor: Color.colorGray_300,
		height: 151,
		width: 180,
		left: 0,
		top: 0,
		position: "absolute",
	},
	aboutToRipen: {
		fontSize: FontSize.size_3xs,
		lineHeight: 13,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	aboutToRipenWrapper: {
		top: 7,
		left: 71,
		borderRadius: Border.br_81xl,
		backgroundColor: Color.colorGray_400,
		width: 102,
		paddingHorizontal: Padding.p_3xs,
		paddingVertical: Padding.p_7xs,
		flexDirection: "row",
	},
	chiliPlant: {
		fontFamily: FontFamily.interSemiBold,
		fontWeight: "600",
	},
	vuesaxoutlinelocationIcon1: {
		width: 12,
		height: 12,
	},
	ranjiganWangon: {
		lineHeight: 16,
		color: Color.colorDarkgray,
		marginLeft: 4,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	vuesaxoutlinelocationGroup: {
		marginTop: 4,
		alignItems: "center",
		flexDirection: "row",
	},
	chiliPlantParent: {
		width: 135,
	},
	rectangleGroup: {
		left: 27,
		height: 229,
		top: 382,
	},
	rectangleContainer: {
		top: 631,
		left: 27,
		height: 229,
	},
	chiliPlantContainer: {
		width: 125,
	},
	groupView: {
		top: 382,
	},
	rectangleParent1: {
		top: 631,
	},
	vuesaxboldgalleryIcon: {
		top: 454,
	},
	vuesaxboldgalleryIcon1: {
		top: 711,
	},
	vuesaxboldgalleryIcon2: {
		top: 454,
	},
	vuesaxboldgalleryIcon3: {
		top: 711,
	},
	vuesaxboldhome2Icon: {
		width: 24,
		height: 24,
	},
	home: {
		color: Color.colorDarkslategray,
		marginTop: 6,
		fontFamily: FontFamily.interRegular,
	},
	vuesaxboldhome2Parent: {
		paddingHorizontal: Padding.p_9xs,
		paddingVertical: 0,
		alignItems: "center",
		flex: 1,
	},
	vectorIcon: {
		width: 20,
		height: 24,
	},
	icTimeIcon: {
		width: 23,
		height: 24,
		marginLeft:10
	},
	frameParent2: {
		
		shadowColor: "rgba(204, 204, 204, 0.12)",
		shadowRadius: 32,
		elevation: 32,
		height: 81,
		paddingHorizontal: 24,
		paddingTop: 20,
		paddingBottom: 32,
		flexDirection: "row",
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		borderRadius: Border.br_8xl,
	},
	signInParent: {
		bottom: -1,
		width: 430,
		height: 927,
		right: 0,
		position: "absolute",
		zIndex:9999
	},
	iphone13ProMax3: {
		width: "100%",
		flex: 1,
		backgroundColor: Color.colorWhite,
		borderRadius: Border.br_8xl,
	},
});

export default IPhone13ProMax3;
