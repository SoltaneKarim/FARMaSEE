import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Planing = () => {
	const router = useRouter();
	const handleItemClick = (itemName) => {
		// Handle the click event for each item here
		router.push(itemName);
		console.log(`Clicked on item: ${itemName}`);
	};
	return (
		<ScrollView style={styles.main}>
			<View style={styles.centeredContainer}>
				<Image
					style={{
						resizeMode: "contain",
						height: 300,
						width: 300,
					}}
					source={require("../../assets/moulin.png")}
				/>
				<View style={styles.group}>
					<TouchableOpacity
						style={styles.child}
						onPress={() => handleItemClick("/stock")}>
						<Text style={styles.text}>See your stock</Text>
						<View style={styles.imageContainer}>
							<Image
								style={{
									resizeMode: "contain",
									height: 50,
									width: 50,
								}}
								source={require("../../assets/garage.png")}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.child}
						onPress={() => handleItemClick("/groups")}>
						<Text style={styles.text}>Manage your farm</Text>
						<View style={styles.imageContainer}>
							<Image
								style={{
									resizeMode: "contain",
									height: 50,
									width: 40,
								}}
								source={require("../../assets/chronometer2.png")}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.child}
						onPress={() => handleItemClick("/checking")}>
						<Text style={styles.text}>Check your plants</Text>
						<View style={styles.imageContainer}>
							<Image
								style={{
									resizeMode: "contain",
									height: 50,
									width: 50,
								}}
								source={require("../../assets/chercher.png")}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: "#5DB0751A",
	},
	centeredContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	group: {
		width: "80%",
		marginTop: 50,
	},
	child: {
		flexDirection: "row", // Arrange children in a row
		alignItems: "center", // Vertically center children
		justifyContent: "space-between", // Distribute space between children
		backgroundColor: "rgba(93, 176, 117, 0.50)",
		borderRadius: 9.123,
		borderWidth: 3.421,
		borderColor: "#EEE",
		marginBottom: 10, // Gap of 10 between child views
		paddingHorizontal: 10, // Add padding to child views
	},
	text: {
		flex: 1, // Allow text to take available space
		textAlign: "center",
	},
	imageContainer: {
		marginLeft: 10, // Add margin to image container for spacing
	},
});

export default Planing;