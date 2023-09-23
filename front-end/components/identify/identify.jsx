import React, { useState } from "react";
import { View, Text, Button, Image, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

const Identify = () => {
	const [imageUri, setImageUri] = useState(null);
	const [plantData, setPlantData] = useState(null);
    const [disease, setDisease] = useState(null);
    const [howhealthy, setHowhealthy] = useState(null)
    console.log("this is plant data", plantData);
    console.log('this is howhealthy', howhealthy);
    console.log('this is disease', disease);
	const apiKey = "Z5aKXRL3E7LETKxnLbGogVAlivv1pV2Pui8R9l9tY1rF1OGTug";
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
			// Set the selected image URI
			setImageUri(result.uri);

			// Convert the selected image to base64
			const base64Image = await convertImageToBase64(result.uri);

			// Send the POST request to plant.id for identification
			try {
				const response = await axios.post(
					"https://plant.id/api/v3/identification",
					{
                        images: [base64Image],
						health: 'all',
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

				// Store the response in the plantData variable
				setPlantData(response.data.result.classification.suggestions[0]);
    setDisease(response.data.result.disease.suggestions[0]);
                    setHowhealthy(response.data.result.is_healthy)
                
			} catch (error) {
				console.error("Error identifying plant:", error.message);
			}
		}
	};
	const takePicture = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();

		if (status !== "granted") {
			alert("Permission to access the camera is required!");
			return;
		}

		const result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: false,
			quality: 1,
		});

		if (!result.cancelled) {
			// Set the taken picture's URI
			setImageUri(result.uri);

			// Convert the taken image to base64
			const base64Image = await convertImageToBase64(result.uri);

			// Send the POST request to plant.id for identification
			try {
				const response = await axios.post(
					"https://plant.id/api/v3/identification",
					{
						images: [base64Image],
						health: 'all',
						similar_images: true,
                        language: 'fr',
					},
					{
						headers: {
							"Api-Key": apiKey,
							"Content-Type": "application/json",
						},
					},
				);

				// Store the response in the plantData variable
				setPlantData(response.data.result.classification.suggestions[0]);
                setDisease(response.data.result.disease.suggestions);
                setHowhealthy(response.data.result.is_healthy)

			} catch (error) {
				console.error("Error identifying plant:", error.message);
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

	return (
		<View style={styles.container}>
			<Button
				title="Select Image"
				onPress={selectImage}
				style={styles.button}
			/>
			<Button
				title="Take Picture"
				onPress={takePicture}
				style={styles.button}
			/>
			{imageUri && (
				<View style={styles.imageContainer}>
					<Image source={{ uri: imageUri }} style={styles.image} />
				</View>
			)}
			{plantData && (
				<View style={styles.plantInfoContainer}>
					<Text style={styles.plantName}>Name: {plantData.name}</Text>
					<Text style={styles.plantProbability}>
						Probability: {`${(plantData.probability * 100).toFixed(2)}%`}
					</Text>
				</View>
			)}
			{plantData?.similar_images && (
				<FlatList
					data={plantData.similar_images}
					keyExtractor={(item) => item.id}
					horizontal={true} // Set this to true for horizontal scrolling
					renderItem={({ item }) => (
						<View style={styles.similarImageContainer}>
							<Image source={{ uri: item.url }} style={styles.similarImage} />
						</View>
					)}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		marginVertical: 20,
		backgroundColor: "#4CAF50",
		color: "white",
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
});

export default Identify;
