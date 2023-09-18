import * as React from "react";
import { StyleSheet, Text, View, Pressable , Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "./GlobalStyle.js";

const IPhone13ProMax5 = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.iphone13ProMax5}>
			<View style={styles.itemTanamanSayaParent}>
				<View style={[styles.itemTanamanSaya, styles.itemLayout]}>
					<View style={[styles.itemImageParent, styles.groupPosition]}>
						<View style={styles.groupChild} />
					</View>
					<View style={[styles.locationParent, styles.locationPosition2]}>
						<View style={[styles.location, styles.locationPosition1]}>
							<Text style={[styles.cabai, styles.cabaiFlexBox]}>Cabai</Text>
							<Image
								style={[styles.vectorIcon1, styles.vectorIconPosition]}
								contentFit="cover"
								source={require("../../assets/home-2.png")}
							/>
						</View>
						<View style={[styles.locationGroup, styles.groupPosition]}>
							<View style={[styles.location1, styles.locationPosition]}>
								<Text style={[styles.tanamanSehat, styles.tanamanTypo]}>
									Tanaman Sehat
								</Text>
								<Image
									style={[styles.vectorIcon2, styles.vectorIconPosition]}
									contentFit="cover"
									source={require("../../assets/Vector.png")}
								/>
							</View>
							<View style={styles.location2}>
								<Text style={[styles.bulanMenujuPanen, styles.tanamanTypo]}>
									2 Bulan Menuju Panen
								</Text>
								<Image
									style={[styles.icTimeIcon1, styles.vectorIconPosition]}
									contentFit="cover"
									source={require("../../assets/ic_time.png")}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Text style={[styles.keepInMind, styles.cabaiFlexBox]}>Keep in mind</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	itemLayout: {
		height: 73,
		position: "absolute",
	},
	groupPosition: {
		bottom: "0%",
		right: "0%",
		top: "1%",
		height: "100%",
		position: "absolute",
	},
	locationPosition2: {
		left: "6.35%",
		bottom: "20.55%",
		top: "19.18%",
		height: "60.27%",
		position: "absolute",
	},
	locationPosition1: {
		bottom: "22.73%",
		top: "22.73%",
		height: "54.55%",
		left: "0%",
		position: "absolute",
	},
	cabaiFlexBox: {
		display: "flex",
		alignItems: "center",
		position: "absolute",
	},
	vectorIconPosition: {
		bottom: "16.67%",
		top: "16.67%",
		height: "66.67%",
		maxHeight: "100%",
		left: "0%",
		maxWidth: "100%",
		position: "absolute",
		overflow: "hidden",
	},
	locationPosition: {
		bottom: "59.09%",
		height: "40.91%",
	},
	tanamanTypo: {

		textAlign: "left",
		color: Color.colorWhitesmoke,
		fontSize: FontSize.size_xs,
	},
	cabaiTypo: {
		textAlign: "left",
		color: Color.colorWhitesmoke,

		fontWeight: "500",
		fontSize: FontSize.size_base,
		top: "0%",
	},
	location4Position: {
		left: "17.6%",
		top: "0%",
		position: "absolute",
	},
	vuesaxboldhome2Icon: {
		width: 24,
		height: 24,
	},
	home: {
		fontFamily: FontFamily.interRegular,
		color: Color.colorDarkslategray_200,
		marginTop: 6,
		textAlign: "center",
		fontSize: FontSize.size_xs,
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
	},
	frameParent: {
		top: 846,
		backgroundColor: "#fff",
		shadowColor: "rgba(204, 204, 204, 0.12)",
		shadowOffset: {
			width: 0,
			height: -4,
		},
		shadowRadius: 32,
		elevation: 32,
		shadowOpacity: 1,
		width: 429,
		height: 81,
		flexDirection: "row",
		paddingHorizontal: 24,
		paddingTop: 20,
		paddingBottom: 32,
		left: 0,
		position: "absolute",
		borderRadius: Border.br_8xl,
	},
	icon: {
		height: "100%",
		maxWidth: "100%",
		overflow: "hidden",
		width: "100%",
	},
	icBack: {
		left: "5.61%",
		top: 27,
		right: "86.12%",
		width: "8.28%",
		height: 31,
		position: "absolute",
	},
	itemImageIcon: {
		maxHeight: "100%",
		borderRadius: Border.br_5xs,
		left: "0%",
		bottom: "0%",
		right: "0%",
		top: "0%",
		height: "100%",
		maxWidth: "100%",
		position: "absolute",
		overflow: "hidden",
		width: "100%",
	},
	groupChild: {
		height: "91.78%",
		width: "98.1%",
		top: "4.11%",
		right: "0.95%",
		bottom: "4.11%",
		left: "0.95%",
		backgroundColor: "#466F2984",
		opacity: 0.8,
		borderRadius: Border.br_5xs,
		position: "absolute",
	},
	itemImageParent: {
		left: "0%",
		width: "100%",
	},
	cabai: {
		width: "66.2%",
		left: "33.8%",
		textAlign: "left",
		color: Color.colorWhitesmoke,
	
		fontWeight: "500",
		fontSize: FontSize.size_base,
		top: "0%",
	},
	vectorIcon1: {
		width: "17.84%",
		right: "82.16%",
	},
	location: {
		width: "29.5%",
		right: "70.5%",
	},
	tanamanSehat: {
		width: "80.17%",
		left: "19.83%",
		display: "flex",
		alignItems: "center",
		position: "absolute",
		top: "0%",
	},
	vectorIcon2: {
		width: "11.33%",
		right: "88.67%",
	},
	location1: {
		width: "77.56%",
		right: "22.44%",
		left: "0%",
		top: "0%",
		position: "absolute",
	},
	bulanMenujuPanen: {
		width: "84.62%",
		left: "15.38%",
		display: "flex",
		alignItems: "center",
		position: "absolute",
		top: "0%",
	},
	icTimeIcon1: {
		width: "7.69%",
		right: "92.31%",
	},
	location2: {
		top: "59.09%",
		height: "40.91%",
		left: "0%",
		bottom: "0%",
		right: "0%",
		position: "absolute",
		width: "100%",
	},
	locationGroup: {
		width: "60.94%",
		left: "39.06%",
	},
	locationParent: {
		width: "81.27%",
		right: "12.38%",
	},
	itemTanamanSaya: {
		top: 0,
		width: 370,
		left: 1,
		height: 73,
	},
	cabai1: {
		left: "37.49%",
		position: "absolute",
	},
	vectorIcon3: {
		width: "19.79%",
		right: "80.21%",
	},
	location3: {
		width: "28.81%",
		right: "71.19%",
	},
	tanamanSehat1: {
		left: "0%",
		top: "0%",
		position: "absolute",
	},
	vectorIcon4: {
		width: "12.89%",
		top: "94.44%",
		right: "-25.65%",
		bottom: "-61.11%",
		left: "112.76%",
		display: "none",
		height: "66.67%",
		maxHeight: "100%",
		maxWidth: "100%",
		position: "absolute",
		overflow: "hidden",
	},
	location4: {
		width: "78.03%",
		right: "4.37%",
		bottom: "59.09%",
		height: "40.91%",
	},
	bulanMenujuPanen1: {

		textAlign: "left",
		color: Color.colorWhitesmoke,
		fontSize: FontSize.size_xs,
	},
	icTimeIcon2: {
		width: "8.8%",
		right: "91.2%",
	},
	groupView: {
		width: "57.69%",
		left: "42.31%",
	},
	locationContainer: {
		width: "75.04%",
		right: "18.61%",
	},
	itemTanamanSaya1: {
		top: 108,
		width: 370,
		left: 1,
		height: 73,
	},
	itemTanamanSaya2: {
		top: 216,
		width: 371,
		left: 0,
	},
	itemTanamanSaya3: {
		top: 324,
		width: 370,
		left: 1,
		height: 73,
	},
	itemTanamanSaya4: {
		top: 648,
		width: 371,
		left: 0,
	},
	itemTanamanSaya5: {
		top: 432,
		width: 370,
		left: 1,
		height: 73,
	},
	itemTanamanSaya6: {
		top: 540,
		width: 370,
		left: 1,
		height: 73,
	},
	itemTanamanSayaParent: {
		top: 80,
		left: 28,
		width: 371,
		position: "absolute",
	},
	keepInMind: {
		top: "5.26%",
		fontSize: 24,
		fontWeight: "600",

		color: Color.colorDarkslategray_100,
		justifyContent: "center",
		left: "0%",
		textAlign: "center",
		width: "100%",
	},
	iphone13ProMax5: {
		backgroundColor: "rgba(101, 168, 101, 0.38)",
		height: 926,
		overflow: "hidden",
		flex: 1,
		width: "100%",

	},
});

export default IPhone13ProMax5;
