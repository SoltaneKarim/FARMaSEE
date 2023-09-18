import React from "react";
import { Stack, useNavigation } from "expo-router";
import { Button, Image, TouchableHighlight, LogBox } from "react-native";

function StackLayout() {
	const navigation = useNavigation();
	//
	LogBox.ignoreLogs([
		"Non-serializable values were found in the navigation state",
	]);
	return (
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
				options={{ headerTitle: "tabbar", headerShown: true }}
			/>
			<Stack.Screen
				name="notification"
				options={{
					headerStyle: {
						backgroundColor: "#5db075",
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
						backgroundColor: "#5db075",
					},
				}}
			/>
			<Stack.Screen name='weather' options={{headerShown: true}} />
			<Stack.Screen
				name="stock"
				options={{
					headerTitle: "",
					headerShown: true,
					headerStyle: {
						backgroundColor: "#5db075",
					},
				}}
			/>
		</Stack>
	);
}

export default StackLayout;
