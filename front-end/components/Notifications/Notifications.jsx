import * as React from "react";
import { StyleSheet, Text, View, Pressable , Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "./GlobalStyle.js";

const IPhone13ProMax5 = () => {
	const navigation = useNavigation();
console.log('navigation')
	return (
		<View style={styles.iphone13ProMax5}>
			
			<Text style={styles.keepInMind}>Keep in mind</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	
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
alignItems: "center",	},
});

export default IPhone13ProMax5;
