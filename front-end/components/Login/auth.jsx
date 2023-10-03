import React, { useState, useEffect } from "react";
import {
	ActivityIndicator,
	Button,
	Image,
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios"; // Import axios

const cloudName = "dww70arvk"; // Replace with your Cloud name
const uploadPreset = "fcqswjeg"; // Replace with your upload preset

const App = ({ changeImage }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [uploading, setUploading] = useState(false);

	useEffect(() => {
		if (selectedImage) {
			setUploading(false); // Once the image is selected and displayed, stop showing the activity indicator
		}
	}, [selectedImage]);

	const openImagePicker = async () => {
		const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!cancelled) {
			setUploading(true); // Start showing the activity indicator
			// Upload the image to Cloudinary
			uploadToCloudinary(uri);
		}
	};

	const handleCameraLaunch = async () => {
		const { cancelled, uri } = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!cancelled) {
			setUploading(true); // Start showing the activity indicator
			// Upload the image to Cloudinary
			uploadToCloudinary(uri);
		}
	};

	const uploadToCloudinary = async (uri) => {
		try {
			const data = new FormData();
			data.append("file", { uri, type: "image/jpeg", name: "image.jpg" });
			data.append("upload_preset", uploadPreset);

			const response = await axios.post(
				`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
				data,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				},
			);

			if (response.status === 200) {
				// Image uploaded successfully
				const cloudinaryUrl = response.data.secure_url;
				setSelectedImage(cloudinaryUrl);
				console.log(cloudinaryUrl);
				changeImage(cloudinaryUrl);
			}
		} catch (error) {
			console.error("Error uploading image to Cloudinary:", error);
		}
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			{uploading && <ActivityIndicator size="large" color="#4CAF50" />}
			{selectedImage && (
				<Image
					source={{ uri: selectedImage }}
					style={{ width: 200, height: 200, resizeMode: "contain" }}
				/>
			)}
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.customButton} onPress={openImagePicker}>
					<Image
						style={styles.buttonImage}
						source={require("../../assets/mobile-video.png")} // Replace with your image icon
					/>
					<Text style={styles.buttonText}>Choose from Device</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.customButton}
					onPress={handleCameraLaunch}>
					<Image
						style={styles.buttonImage}
						source={require("../../assets/camera.png")} // Replace with your camera icon
					/>
					<Text style={styles.buttonText}>Open Camera</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	centeredText: {
		fontSize: 20,
		textAlign: "center",
		marginTop: 20,
	},
	customButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white", // Background color for the button
		padding: 10,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: "#113f40",
		marginBottom: 15,
	},
	buttonImage: {
		width: 24, // Adjust the image width as needed
		height: 24, // Adjust the image height as needed
		marginRight: 8, // Adjust the spacing between image and text as needed
	},
	buttonText: {
		color: "#113f40", // Text color
		fontWeight: "bold",
		borderColor: "#4CAF50",
	},
	buttonContainer: {
		flexDirection: "column",
		justifyContent: "space-between", // Adjust as needed
		marginHorizontal: 20, // Adjust as needed
		marginTop: 20, // Adjust as needed
	},
});

export default App;
