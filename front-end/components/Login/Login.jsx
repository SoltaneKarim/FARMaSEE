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
const AuthScreen = () => {
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
		setSelectedImage(pic)
	}

	

	const handleLogin = async () => {
		try {
			setLoading(true); // Set loading to true while waiting for the response
			const response = await axios.get("http://192.168.100.48:5000/user");
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

		// Upload the image to Cloudinary
		try {
			// Continue with user registration including the image URL
			axios
				.post("http://192.168.100.48:5000/user", {
					fullName,
					email,
					password,
					address,
					phoneNumber,
					budget,
					imageUrl:selectedImage,
				})
				.then((response) => {
					console.log("User signed up successfully:", response.data);
					dispatch(signup(response.data));
					router.push("/home");
				})
				.catch((error) => {
					console.error("Error signing up:", error);
				});
		} catch (error) {
			console.error("Error uploading image to Cloudinary:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.main}>
			{loading ? ( // Show the ActivityIndicator while loading
				<ActivityIndicator size="large" color="#fffff" />
			) : isSignUp ? (
				<>
					<Image
						style={styles.image}
						source={require("../../assets/ic_email_submit_logo.png")}
					/>
					<Text style={styles.text}>Sign Up</Text>
					<KeyboardAwareScrollView>
						<View style={styles.inputWrapSignup}>
							<View style={[styles.inputWrap, { marginBottom: 10 }]}>
								<Image
									style={{ height: 20, width: 20, marginRight: 10 }}
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
									style={{ height: 20, width: 20, marginRight: 10 }}
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
									style={{ height: 20, width: 20, marginRight: 10 }}
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
									style={{ height: 20, width: 20, marginRight: 10 }}
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
									style={{ height: 20, width: 20, marginRight: 10 }}
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
									style={{ height: 20, width: 20, marginRight: 10 }}
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
							<View style={styles.inputWrap}>
								<Image
									style={{ height: 20, width: 20, marginRight: 10 }}
									source={require("../../assets/photo.png")}
								/>
								<Text style={styles.centeredText}>
									Choose a picture or Take one
								</Text>
							</View>
							<Inpp changeImage={changeImage} />
						</View>
					</KeyboardAwareScrollView>
					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={handleSignUp}>
						<Text style={styles.buttonText}>Sign Up</Text>
					</TouchableOpacity>
					<Text style={styles.captionText} onPress={toggleAuthMode}>
						Already have an account? Login
					</Text>
				</>
			) : (
				<>
					<Image
						style={styles.image}
						source={require("../../assets/ic_email_submit_logo.png")}
					/>
					<Text style={styles.text}>Login</Text>
					<View style={styles.inputWrap}>
						<Image
							style={{ height: 20, width: 20, marginRight: 10 }}
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
							style={{ height: 20, width: 20, marginRight: 10 }}
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
					<Text style={styles.captionText} onPress={toggleAuthMode}>
						Don't have an account? Sign Up
					</Text>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#5DB075",
	},
	image: {
		marginBottom: 20,
		marginTop: 70,
	},
	text: {
		fontSize: 30,

		marginBottom: 20,
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
		width: 250,
		marginBottom: 10,
	},
	buttonContainer: {
		backgroundColor: "#4CAF50",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 25,
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 18,
	},
	captionText: {
		color: "#ffff", // Use your preferred gray color
		fontSize: 14, // Adjust the font size as needed
	},
	inputWrapSignup: {
		// gap: 10,

		width: 250,
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
		textAlign: "center",
	},
});

export default AuthScreen;
