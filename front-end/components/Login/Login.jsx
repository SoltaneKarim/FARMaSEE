import * as React from "react";
import { useState } from "react";
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	Button,
	TouchableHighlight,
	Pressable,
	Image,
	SafeAreaView
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { FontFamily, Color, FontSize, Border } from "./GlobalStyles.js";

const IPhone13ProMax2 = () => {
	const router = useRouter();
	const [email, onChangeEmail] = useState("");
	const [password, onChangePassword] = useState("");
	const handlelogin = () => {
		console.log(email);
		console.log(password);
		router.push("/home");
	};
	return (
		<SafeAreaView style={[styles.iphone13ProMax2, styles.signInLayout]}>
			<View style={[styles.signInParent, styles.signPosition]}>
				<View style={[styles.signIn, styles.signPosition, ]}>
					<Text
						onPress={() => {
							console.log("sign up");
						}}
						style={[styles.signUp, styles.groupParentLayout,styles.justthis]}>
						Sign up
					</Text>
					<View style={[styles.groupParent, styles.groupParentLayout]}>
						<View style={[styles.rectangleParent, styles.groupParentLayout]}>
							<View style={[styles.groupChild, styles.groupLayout]} />
							<TextInput
								onChangeText={onChangePassword}
								value={password}
								placeholder="Your password"
								secureTextEntry={true}
								style={[styles.groupChild, styles.groupLayout]}
							/>
							<Image
								style={[styles.groupItem, styles.iconLayout]}
								contentFit="contain"
								source={require("../../assets/Group9.png")}
							/>
						</View>

						<Text
							onPress={() => {
								console.log("forgot it");
							}}
							style={[styles.forgotYourPassword, styles.passwordFlexBox]}>
							Forgot your password?
						</Text>
						<Text style={[styles.password, styles.passwordFlexBox]}>
							Password
						</Text>
					</View>

					<Pressable>
						<TouchableHighlight onPress={handlelogin} activeOpacity={0.7}>
							<View style={[styles.rectangleGroup, styles.groupParentLayout]}>
								<View style={[styles.groupInner, styles.groupLayout]} />
								<Text style={[styles.login, styles.groupParentLayout]}>
									Login
								</Text>
							</View>
						</TouchableHighlight>
					</Pressable>
					<View style={[styles.emailParent, styles.groupParentLayout]}>
						<Text style={[styles.password, styles.passwordFlexBox]}>Email</Text>
						<View style={[styles.rectangleParent, styles.groupParentLayout]}>
							<TextInput
								onChangeText={onChangeEmail}
								value={email}
								placeholder="Type your email"
								style={[styles.groupChild, styles.groupLayout]}
							/>
							{/* <Text style={[styles.text, styles.passwordFlexBox]}>
								iqbal.syafiq.rozaan@gmail.com
							</Text> */}
							<Image
								style={[styles.vectorIcon, styles.iconLayout]}
								contentFit="contain"
								source={require("../../assets/Vector.png")}
							/>
						</View>
					</View>
				</View>
				<Text style={[styles.signInTo, styles.signFlexBox]}>
					Sign in to continue
				</Text>
				<Image
					style={[styles.icEmailSubmitLogoIcon, styles.iconLayout]}
					contentFit="cover"
					source={require("../../assets/ic_email_submit_logo.png")}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	justthis:{
		left:10,
	
	},
	signInLayout: {
		height: "100%",
	},
	signPosition: {
		width: "100%",
		position: "absolute",
		left: 0,
	},
	groupParentLayout: {
		width: "100%",
		position: "absolute",
	},
	groupLayout: {
		borderRadius: 9,
		height: 59,
		width: 359,
		left: 0,
		top: 0,
		position: "absolute",
		textAlign: "center",
	},
	passwordFlexBox: {
		textAlign: "left",
		position: "absolute",
	},
	iconLayout: {
		maxHeight: "100%",
		maxWidth: "100%",
		position: "absolute",
	},
	signFlexBox: {
		justifyContent: "center",
		display: "flex",
		textAlign: "center",
		
		alignItems: "center",
		color: Color.colorWhitesmoke,
		fontWeight: "600",
	},
	signUp: {
		top: 743,
		height: 59,
		justifyContent: "center",
		display: "flex",
		textAlign: "center",
	
		alignItems: "center",
		color: Color.colorWhitesmoke,
		fontWeight: "600",
		fontSize: 21,
		width: 359,
		left: 34,
	},
	groupChild: {
		backgroundColor: Color.colorGainsboro,
	},
	text: {
		left: 64,
		color: Color.colorDarkslategray,
		width: 274,

		fontWeight: "500",
		fontSize: 16,
		textAlign: "left",
		display: "flex",
		top: 0,
		height: 59,
		alignItems: "center",
	},
	groupItem: {
		height: "36.54%",
		width: "3.27%",
		top: "31.73%",
		right: "89.54%",
		bottom: "31.73%",
		left: "6.19%",
	},
	rectangleParent: {
		top: 32,
		height: 59,
		left: 0,
		padding: 5,
	},
	forgotYourPassword: {
		marginLeft: -174.61,
		bottom: 0,
		left: "50%",
		fontSize: FontSize.uI16Semi_size,
		fontFamily: FontFamily.uI16Semi,
		color: Color.colorWhite,
		textAlign: "left",
		fontWeight: "600",
	},
	password: {
		alignItems: "flex-end",
		width: 211,

		fontWeight: "500",
		fontSize: 16,
		textAlign: "left",
		display: "flex",
		top: 0,
		color: Color.colorWhitesmoke,
		left: 0,
	},
	groupParent: {
		top: 498,
		height: 120,
		left: 34,
	},
	groupInner: {
		borderStyle: "solid",
		borderColor: Color.colorWhitesmoke,
		borderWidth: 3.4,
		backgroundColor: Color.colorMediumseagreen,
	},
	login: {
		height: 59,
		justifyContent: "center",
		display: "flex",
		textAlign: "center",
		fontFamily: FontFamily.poppinsSemiBold,
		alignItems: "center",
		color: Color.colorWhitesmoke,
		fontWeight: "600",
		fontSize: 21,
		width: 359,
		left: -25,
		top: 12,
	},
	rectangleGroup: {
		top: 684,
		height: 59,
		left: 34,
	},
	vectorIcon: {
		height: "34.62%",
		width: "4.71%",
		height: "37%",
		top: "32.69%",
		right: "87.94%",
		bottom: "32.69%",
		left: "6.35%",
	},
	emailParent: {
		top: 383,
		height: 91,
		left: 34,
	},
	signIn: {
		backgroundColor: Color.colorMediumseagreen,
		borderRadius: Border.br_8xl,
		top: 0,
	
		height: "100%",
	},
	signInTo: {
		top: 297,
		fontSize: 27,
		width: 428,
		position: "absolute",
		left: 0,
	},
	icEmailSubmitLogoIcon: {
		height: "16.2%",
		width: "39.86%",
		top: "11.99%",
		right: "30.99%",
		bottom: "71.81%",
		left: "31.07%",
	},
	signInParent: {
		top: 0,
		height: 926,
		position: "absolute",
	},
	iphone13ProMax2: {
		backgroundColor: Color.colorWhite,
		flexSrink: 1,
		width: "100%",
	},
});

export default IPhone13ProMax2;
