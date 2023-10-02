import React, { useState, useEffect } from "react";
import {
	View,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	ActivityIndicator,
	PermissionsAndroid,
	Platform,
	Button,
} from "react-native";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";

import { login, signup } from "../../redux/actions";
import axios from "axios";
import Inpp from "./auth";
import { Dimensions } from "react-native";

// Get the screen width
const AuthScreen = () => {
	const screenWidth = Dimensions.get("window").width;
	const inputWrapWidth = 0.8 * screenWidth;
	const dispatch = useDispatch();
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignUp, setIsSignUp] = useState(false);
	const [fullName, setFullName] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [budget, setBudget] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false); // State to track loading status
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		setLoading(false); // Reset loading state when the component mounts
	}, [isSignUp]);

	const toggleAuthMode = () => {
		setIsSignUp(!isSignUp);
	};

	const changeImage = (pic) => {
		setSelectedImage(pic);
	};

	const handleLogin = async () => {
		try {
			setLoading(true); // Set loading to true while waiting for the response
			const response = await axios.get("http://192.168.100.62:5000/user");
			const users = response.data;
			const lowerCaseEmail = email.toLowerCase();
			const user = users.find(
				(user) =>
					user.email.toLowerCase() === lowerCaseEmail &&
					user.password === password,
			);

			if (user) {
				alert("Login successful");
				dispatch(login(user));
				router.push("/home");
			} else {
				alert("Incorrect email or password");
			}
		} catch (error) {
			console.error("Error during login:", error);
			alert("An error occurred during login. Please try again later.");
		} finally {
			setLoading(false); // Set loading to false when the response is received
		}
	};

	const handleSignUp = async () => {
		setLoading(true);

		try {
			// Continue with user registration including the image URL
			const userResponse = await axios.post("http://192.168.100.62:5000/user", {
				fullName,
				email,
				password,
				address,
				phoneNumber,
				budget,
				imageUrl: selectedImage,
			});

			console.log("User signed up successfully:", userResponse.data);
			dispatch(signup(userResponse.data));
			router.push("home");
		} catch (error) {
			console.error("Error during sign-up:", error);
			alert("An error occurred during sign-up. Please try again later.");
		} finally {
			setLoading(false);

		}
	};

	return (
		<View style={styles.main}>
			{loading ? ( // Show the ActivityIndicator while loading
				<ActivityIndicator size="large" color="#fffff" />
			) : isSignUp ? (
				<View style={styles.container}>
					<Image
						style={styles.image}
						source={require("../../assets/FarmingIllustration.png")}
					/>
					<KeyboardAwareScrollView>
						<Text style={styles.text}>Sign Up</Text>
						<View style={styles.inputWrapSignup}>
							<View style={[styles.inputWrap, { marginBottom: 10 }]}>
								<Image
									style={{
										height: 20,
										width: 20,
										marginRight: 10,
										marginLeft: 10,
									}}
									source={require("../../assets/name.png")}
								/>
								<TextInput
									style={styles.textInput}
									placeholder="Full Name"
									value={fullName}
									keyboardShouldPersistTaps="handled"
									onChangeText={(text) => setFullName(text)}
								/>
							</View>

							<View style={[styles.inputWrap, { marginBottom: 10 }]}>
								<Image
									style={{
										height: 20,
										width: 20,
										marginRight: 10,
										marginLeft: 10,
									}}
									source={require("../../assets/Vector.png")}
								/>
								<TextInput
									style={styles.textInput}
									placeholder="Email"
									value={email}
									keyboardShouldPersistTaps="handled"
									onChangeText={(text) => setEmail(text)}
								/>
							</View>

							<View style={[styles.inputWrap, { marginBottom: 10 }]}>
								<Image
									style={{
										height: 20,
										width: 20,
										marginRight: 10,
										marginLeft: 10,
									}}
									source={require("../../assets/Group9.png")}
								/>
								<TextInput
									style={styles.textInput}
									placeholder="Password"
									secureTextEntry={!showPassword}
									value={password}
									onChangeText={(text) => setPassword(text)}
								/>
								<TouchableOpacity
									onPress={() => setShowPassword(!showPassword)}
									style={{ position: "absolute", right: 10, top: 12 }}>
									{/* You can use an eye icon here */}
									{showPassword ? (
										<Image
											style={{ height: 20, width: 20 }}
											source={require("../../assets/eye.png")} // Replace with your eye icon
										/>
									) : (
										<Image
											style={{ height: 20, width: 20 }}
											source={require("../../assets/eye-off.png")} // Replace with your eye-off icon
										/>
									)}
								</TouchableOpacity>
							</View>

							<View style={[styles.inputWrap, { marginBottom: 10 }]}>
								<Image
									style={{
										height: 20,
										width: 20,
										marginRight: 10,
										marginLeft: 10,
									}}
									source={require("../../assets/tunisia.png")}
								/>
								<TextInput
									style={styles.textInput}
									placeholder="Address"
									value={address}
									keyboardShouldPersistTaps="handled"
									onChangeText={(text) => setAddress(text)}
								/>
							</View>

							<View style={[styles.inputWrap, { marginBottom: 10 }]}>
								<Image
									style={{
										height: 20,
										width: 20,
										marginRight: 10,
										marginLeft: 10,
									}}
									source={require("../../assets/phone-call.png")}
								/>
								<TextInput
									style={styles.textInput}
									placeholder="Phone Number"
									keyboardShouldPersistTaps="handled"
									value={phoneNumber}
									onChangeText={(text) => setPhoneNumber(text)}
								/>
							</View>

							<View style={styles.inputWrap}>
								<Image
									style={{
										height: 20,
										width: 20,
										marginRight: 10,
										marginLeft: 10,
									}}
									source={require("../../assets/money.png")}
								/>
								<TextInput
									style={styles.textInput}
									placeholder="Budget"
									keyboardShouldPersistTaps="handled"
									value={budget}
									onChangeText={(text) => setBudget(text)}
								/>
							</View>
							<View style={{ backgroundColor: "#0000" }}>
								<View style={(styles.inputWrap, { width: inputWrapWidth , flexDirection: 'row' ,marginBottom:10})}>
									<Image
										style={{
											height: 20,
											width: 20,
											marginRight: 10,
											marginLeft: 10,
											marginTop: 5,
										}}
										source={require("../../assets/photo.png")}
									/>
									<Text style={styles.centeredText}>
										Choose a picture or Take one
									</Text>
								</View>
								<Inpp changeImage={changeImage} />
							</View>
						</View>
					</KeyboardAwareScrollView>
					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={handleSignUp}>
						<Text style={styles.buttonText}>Sign Up</Text>
					</TouchableOpacity>
					<Text style={styles.captionText} onPress={toggleAuthMode}>
						Already have an account?
						<Text style={styles.signUpText} onPress={toggleAuthMode}>
							{" "}
							Login
						</Text>
					</Text>
				</View>
			) : (
				<View style={styles.container}>
					<Image
						style={styles.image}
						source={require("../../assets/FarmingIllustration.png")}
					/>
					<Text style={styles.text}>Login</Text>
					<View style={styles.inputWrap}>
						<Image
							style={{
								height: 20,
								width: 20,
								marginRight: 10,
								marginLeft: 10,
							}}
							source={require("../../assets/Vector.png")}
						/>
						<TextInput
							style={styles.textInput}
							placeholder="Email"
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
					</View>
					<View style={[styles.inputWrap, { marginBottom: 10 }]}>
						<Image
							style={{
								height: 20,
								width: 20,
								marginRight: 10,
								marginLeft: 10,
							}}
							source={require("../../assets/Group9.png")}
						/>
						<TextInput
							style={styles.textInput}
							placeholder="Password"
							secureTextEntry={!showPassword}
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
						<TouchableOpacity
							onPress={() => setShowPassword(!showPassword)}
							style={{ position: "absolute", right: 10, top: 12 }}>
							{/* You can use an eye icon here */}
							{showPassword ? (
								<Image
									style={{ height: 20, width: 20 }}
									source={require("../../assets/eye.png")} // Replace with your eye icon
								/>
							) : (
								<Image
									style={{ height: 20, width: 20 }}
									source={require("../../assets/eye-off.png")} // Replace with your eye-off icon
								/>
							)}
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={handleLogin}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>
					<Text style={styles.captionText}>
						Don't have an account?
						<Text style={styles.signUpText} onPress={toggleAuthMode}>
							{" "}
							Sign Up
						</Text>
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		width: "80%",
	},
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#0000",
		width: "100%",
	},
	image: {
		marginBottom: 20,
		marginTop: 70,
		width: "100%",
		height: "30%",
	},
	text: {
		fontSize: 40, // Set the font size
		fontWeight: "bold", // Set the font weight to bold
		color: "#333", // Set the text color
		textAlign: "center", // Set text alignment to center
		marginBottom: 20, // Add other styles as needed
	},
	textInput: {
		flex: 1,
		height: 40,
		backgroundColor: "#ffffff",
		borderRadius: 5,
		paddingHorizontal: 16,
	},
	inputWrap: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginBottom: 10,
		backgroundColor: "#ffffff",
	},
	buttonContainer: {
		marginTop: 20,
		backgroundColor: "#4CAF50",
		paddingVertical: 10,
		paddingHorizontal: 60,
		borderRadius: 6,
		borderWidth: 3, // Set the border width
		borderColor: "#ffff", // Set the border color (black in this example)
	},
	buttonText: {
		alignSelf: "center",
		color: "#ffffff",
		fontSize: 18,
	},
	captionText: {
		color: "#ffff", // Use your preferred gray color
		fontSize: 14, // Adjust the font size as needed
	},
	inputWrapSignup: {
		// gap: 10,

		width: "100%",
	},
	imagePickerButton: {
		backgroundColor: "#4CAF50",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 25,
		marginTop: 10,
	},
	selectedImage: {
		width: 100,
		height: 100,
		resizeMode: "cover",
		marginTop: 10,
	},
	centeredText: {
		fontSize: 15,
		// textAlign: "center",
	},
	captionText: {
		marginTop: 20,
		fontSize: 16,
		color: "#5DB075",
		textAlign: "center",
	},
	signUpText: {
		fontWeight: "bold",
		fontSize: 20,
		textDecorationLine: "underline", // Add an underline to make it look like a link
		color: "#333", // You can set your desired color here
	},
});

export default AuthScreen;
