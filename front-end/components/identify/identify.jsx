import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Button,
	Image,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions,
	ScrollView,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { PieChart } from "react-native-chart-kit";

const Identify = () => {
	const [imageUri, setImageUri] = useState(null);
	const [plantData, setPlantData] = useState(null);
	const [disease, setDisease] = useState(null);
	const [howhealthy, setHowhealthy] = useState(null);
	const [showVideo, setShowVideo] = useState(true);
	const [loading, setLoading] = useState(false); // Track whether data is being fetched

	console.log("this is plant data", plantData);
	console.log("this is howhealthy", howhealthy);
	console.log("this is disease", disease);

	const apiKey = "OUOOtHOzvM8LbOVf8UuMwc5y2WYeQU62zx3udSknRvIeKoUXbC";

	const selectImage = async () => {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (status !== "granted") {
			alert("Permission to access the media library is required!");
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: false,
			quality: 1,
		});

		if (!result.cancelled) {
			setLoading(true); // Show the activity indicator while fetching data
			setImageUri(result.uri);
			setShowVideo(false);

			const base64Image = await convertImageToBase64(result.uri);

			try {
				const response = await axios.post(
					"https://plant.id/api/v3/identification",
					{
						images: [base64Image],
						health: "all",
						similar_images: true,
						// language: 'fr',
					},
					{
						headers: {
							"Api-Key": apiKey,
							"Content-Type": "application/json",
						},
					},
				);

				setPlantData(response.data.result.classification.suggestions[0]);
				setDisease(response.data.result.disease.suggestions);
				setHowhealthy(response.data.result.is_healthy);
			} catch (error) {
				console.error("Error identifying plant:", error.message);
			} finally {
				setLoading(false); // Hide the activity indicator once data is fetched
			}
		}
	};

	const convertImageToBase64 = async (uri) => {
		const response = await fetch(uri);
		const blob = await response.blob();
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				resolve(reader.result);
			};
			reader.onerror = (error) => {
				reject(error);
			};
			reader.readAsDataURL(blob);
		});
	};

	const pieChartData = disease?.map((item) => ({
		name: item.name,
		population: item.probability,
		color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
		legendFontColor: "#7F7F7F",
		legendFontSize: 9,
	}));

	const chartConfig = {
		backgroundGradientFrom: "#ffffff",
		backgroundGradientTo: "#ffffff",
		color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
		// strokeWidth: 2,
		// Number of decimal places for data values
	};
	return (
		<ScrollView
			contentContainerStyle={{ minHeight: "100%" }} // Set minHeight to ensure enough space
			style={styles.scrollContainer}>
			<View style={styles.container}>
				{showVideo && (
					<Video
						source={require("../../assets/Mp4/9.mp4")}
						style={{ height: 400, width: "100%" }}
						resizeMode="contain"
						isLooping
						shouldPlay={true}
					/>
				)}

				{showVideo && (
					<TouchableOpacity
						onPress={selectImage}
						style={[styles.button, styles.selectImageButton]}>
						<Text style={styles.buttonText}>Select Image</Text>
					</TouchableOpacity>
				)}

				{loading && <ActivityIndicator size="large" color="#4CAF50" />}

				{imageUri && plantData && (
					<View style={styles.imageContainer}>
						<Image source={{ uri: imageUri }} style={styles.image} />
					</View>
				)}

				{plantData && (
					<View style={styles.plantInfoContainer}>
						<Text style={styles.plantName}>Name: {plantData.name}</Text>
						<Text style={styles.plantProbability}>
							Your plant's healthy:
							{`${(howhealthy?.probability * 100).toFixed(2)}%`}
						</Text>
					</View>
				)}

				{plantData?.similar_images && (
					<>
						<Text style={styles.plantName}>Similar Images</Text>
						<FlatList
							data={plantData.similar_images}
							keyExtractor={(item) => item.id}
							horizontal={true}
							renderItem={({ item }) => (
								<View style={styles.similarImageContainer}>
									<Image
										source={{ uri: item.url }}
										style={styles.similarImage}
									/>
								</View>
							)}
						/>
					</>
				)}
				<ScrollView horizontal={true}>
					<View style={{justifyContent:"center",alignItems:"center"}}>
						{disease && disease.length > 0 && (
							<PieChart
								data={pieChartData}
								width={Dimensions.get("window").width}
								height={Dimensions.get("window").height * 0.2} // Adjust the height as needed
								chartConfig={chartConfig}
								accessor="population"
								backgroundColor="transparent"
							/>
						)}
					</View>
				</ScrollView>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flexGrow: 1,
		backgroundColor: "white",
	},
	container: {
		marginTop: 10,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
	},
	imageContainer: {
		marginBottom: 20,
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: "cover",
		borderRadius: 10,
	},
	plantInfoContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	plantName: {
		fontSize: 18,
		fontWeight: "bold",
	},
	plantProbability: {
		fontSize: 16,
	},
	similarImageContainer: {
		padding: 10,
	},
	similarImage: {
		width: 100,
		height: 100,
		resizeMode: "cover",
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
	},
});

export default Identify;
