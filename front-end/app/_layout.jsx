import React from "react";
import { Stack, useNavigation } from "expo-router";
import { Button, Image, TouchableHighlight, LogBox } from "react-native";
import store from "../redux/store";
import { Provider } from "react-redux";
function StackLayout() {
	const navigation = useNavigation();
	//
	LogBox.ignoreLogs([
		"Non-serializable values were found in the navigation state",
	]);
	return (
		<Provider store={store}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerTitle: "Loader", headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					options={{ headerTitle: "login", headerShown: false }}
				/>
				<Stack.Screen
					name="home"
					options={{ headerTitle: "home", headerShown: false }}
				/>
				<Stack.Screen
					name="tabbar"
					options={{ headerTitle: "tabbar", headerShown: false }}
				/>
				<Stack.Screen
					name="notification"
					options={{
						headerStyle: {
							backgroundColor: "#346c6e",
						},

						headerTitle: "",
						presentation: "modal",
					}}
				/>
				<Stack.Screen
					name="planning"
					options={{
						headerTitle: "",
						headerShown: true,
						headerStyle: {
							backgroundColor: "#346c6e",
						},
					}}
				/>
				<Stack.Screen name="weather" options={{ headerShown: false }} />
				<Stack.Screen
					name="stock"
					options={{
						headerTitle: "",
						headerShown: true,
						headerStyle: {
							backgroundColor: "#346c6e",
						},
					}}
				/>
				<Stack.Screen name="onboarding" options={{ headerShown: false }} />
				<Stack.Screen
					name="chatbest"
					options={{
						headerTitle: "",
						headerShown: true,
						headerStyle: {
							backgroundColor: "#346c6e",
						},
					}}
				/>
				<Stack.Screen
					name="care"
					options={{
						headerTitle: "",
						headerShown: false,
						headerStyle: {
							backgroundColor: "#346c6e",
						},
					}}
				/>
				<Stack.Screen
					name="checking"
					options={{
						headerTitle: "",
						headerShown: true,
						headerStyle: {
							backgroundColor: "#346c6e",
						},
					}}
				/>
				<Stack.Screen
					name="groups"
					options={{
						headerTitle: "",
						headerShown: true,
						
					}}
				/>
				<Stack.Screen
					name="search"
					options={{
						headerTitle: "",
						headerShown: true,
						headerStyle: {
							backgroundColor: "#346c6e",
						},
					}}
				/>
			</Stack>
		</Provider>
	);
}

export default StackLayout;
