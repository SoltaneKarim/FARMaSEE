import React, { useState, useEffect } from "react";
import { Svg, Path } from "react-native-svg";

import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	TextInput,
	Image,
	Alert,
	ScrollView,
	ActivityIndicator, // Import ActivityIndicator
	Button,
} from "react-native";
import axios from "axios";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CheckBox } from "@rneui/base";
import ToggleButton from "react-native-toggle-element";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const Groups = () => {
	const user = useSelector((state) => state.user);
	console.log("this is it", user.id);

	const [isLoading, setIsLoading] = useState(true); // State to track loading
	const [toggleValue, setToggleValue] = useState(false);
	const [groupData, setGroupData] = useState([]);
	const [groupName, setGroupName] = useState("");
	const [eatingTime, setEatingTime] = useState("");
	const [duration, setDuration] = useState("");
	const [showTimePicker, setShowTimePicker] = useState(false);
	const [animals, setAnimals] = useState([]);
	const [trees, setTrees] = useState([]);
	const [selectedAnimals, setSelectedAnimals] = useState([]);
	const [selectedTrees, setSelectedTrees] = useState([]);
	const [selectedTime, setSelectedTime] = useState(new Date());
	const [searchId, setSearchId] = useState("");
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		// Fetch group data
		axios
			.get(`http://192.168.100.49:5000/group/one/${user.id}`, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				setGroupData(response.data.data);
				setIsLoading(false); // Set loading to false when data is fetched
			})
			.catch((error) => {
				console.error("Error fetching group data:", error);
				setIsLoading(false); // Set loading to false on error
			});

		// Fetch animal data
		axios
			.get("http://192.168.100.49:5000/animal")
			.then((response) => {
				setAnimals(response.data);
			})
			.catch((error) => {
				console.error("Error fetching animals:", error);
			});

		// Fetch tree data
		axios
			.get("http://192.168.100.49:5000/tree")
			.then((response) => {
				setTrees(response.data);
			})
			.catch((error) => {
				console.error("Error fetching trees:", error);
			});
	}, [groupName]);

	const handleAddGroup = () => {
		const newGroup = {
			name: groupName,
			members: JSON.stringify(selectedAnimals.concat(selectedTrees)),
			consumption: "",
			eatingTime: eatingTime,
			duration: duration,
			specificId: user.id,
		};

		axios
			.post("http://192.168.100.49:5000/group", newGroup)
			.then((response) => {
				console.log("Group added successfully:", response.data);
				setGroupName("");
				setEatingTime("");
				setDuration("");
			})
			.catch((error) => {
				console.error("Error adding group:", error);
			});
	};

	const toggleAnimalSelection = (animal) => {
		setSelectedAnimals((prevSelectedAnimals) =>
			prevSelectedAnimals.some((a) => a.id === animal.id)
				? prevSelectedAnimals.filter((a) => a.id !== animal.id)
				: [...prevSelectedAnimals, animal],
		);
	};

	const toggleTreeSelection = (tree) => {
		setSelectedTrees((prevSelectedTrees) =>
			prevSelectedTrees.some((t) => t.id === tree.id)
				? prevSelectedTrees.filter((t) => t.id !== tree.id)
				: [...prevSelectedTrees, tree],
		);
	};

	const handleTimePickerChange = (event, selectedDate) => {
		if (event.type === "set" && selectedDate) {
			const selectedHours = selectedDate.getHours();
			const selectedMinutes = selectedDate.getMinutes();
			const formattedTime = `${selectedHours < 10 ? "0" : ""}${selectedHours}:${
				selectedMinutes < 10 ? "0" : ""
			}${selectedMinutes}`;
			setEatingTime(formattedTime);
			setSelectedTime(selectedDate);
		}
		setShowTimePicker(false);
	};

	const handleDeleteGroup = (item) => {
		Alert.alert(
			"Confirm Delete",
			`Are you sure you want to delete the group "${item.name}"?`,
			[
				{
					text: "No",
					style: "cancel",
				},
				{
					text: "Yes",
					style: "destructive",
					onPress: () => {
						axios
							.delete(
								`http://192.168.100.49:5000/group/one/${user.id}/${item.id}`,
							)
							.then((response) => {
								console.log("Group deleted successfully:", response.data);
								setGroupData((prevData) =>
									prevData.filter((group) => group.id !== item.id),
								);
							})
							.catch((error) => {
								console.error("Error deleting group:", error);
							});
					},
				},
			],
		);
	};
	const selectAllAnimals = () => {
		const allAnimalIds = animals.map((animal) => animal.id);
		setSelectedAnimals(allAnimalIds.map((id) => ({ id })));
	};
	const selectAllTrees = () => {
		const allTreeIds = trees.map((tree) => tree.id);
		setSelectedTrees(allTreeIds.map((id) => ({ id })));
	};

	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<Text style={styles.sectionText}>Groups</Text>
			</View>

			<View style={styles.separator}></View>

			{isLoading ? (
				// Display an activity indicator while loading
				<ActivityIndicator size="large" color="black" />
			) : (
				<FlatList
					data={groupData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => {
						const members = JSON.parse(item.members);

						return (
							<View style={styles.groupItem}>
								<View style={styles.groupHeader}>
									<Text style={styles.groupName}>{item.name}</Text>
									<TouchableOpacity onPress={() => handleDeleteGroup(item)}>
										<Text style={styles.deleteButton}>
											<Svg
												width="25"
												height="25"
												fill="#346c6e"
												viewBox="0 0 16 16">
												<Path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
											</Svg>
										</Text>
									</TouchableOpacity>
								</View>
								<Text style={styles.groupCaption}>
									Time: {item.eatingTime} | Duration: {item.duration} min |
									Members: {members.length}
								</Text>
							</View>
						);
					}}
				/>
			)}
			<TouchableOpacity
				style={styles.plusButton}
				onPress={() => setIsModalVisible(true)}>
				<Icon name="plus" size={24} color="white" />
			</TouchableOpacity>

			<Modal
				isVisible={isModalVisible}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				backdropTransitionOutTiming={0}
				onBackdropPress={() => setIsModalVisible(false)}>
				<ScrollView>
					<View style={styles.addGroupContainer}>
						<Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 10 }}>
							Set your group as desired
						</Text>
						<TextInput
							style={styles.input}
							placeholder="Group Name"
							value={groupName}
							onChangeText={(text) => setGroupName(text)}
						/>

						<TouchableOpacity
							style={styles.timePickerButton}
							onPress={() => setShowTimePicker(true)}>
							<Text>
								{eatingTime
									? `Selected Time: ${eatingTime}`
									: "Select Eating/Watering Time"}
							</Text>
						</TouchableOpacity>

						{showTimePicker && (
							<DateTimePicker
								value={selectedTime}
								mode="time"
								is24Hour={true}
								display="default"
								onChange={handleTimePickerChange}
							/>
						)}

						<TextInput
							style={styles.input}
							placeholder="Duration in minutes"
							value={duration}
							onChangeText={(text) => setDuration(text)}
							keyboardType="numeric"
						/>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Text
								style={{ fontSize: 18, fontWeight: "bold", marginRight: 10 }}>
								Pick trees and/or animals:
							</Text>
							<ToggleButton
								value={toggleValue}
								onPress={(newState) => setToggleValue(newState)}
								thumbActiveComponent={
									<View
										style={{
											width: 40,
											height: 40,
											borderRadius: 20,
											backgroundColor: "#FFD6A5",
											alignItems: "center",
											justifyContent: "center",
										}}>
										<Image
											source={require("../../assets/tree.png")}
											style={{ width: 30, height: 30 }}
										/>
									</View>
								}
								thumbInActiveComponent={
									<View
										style={{
											width: 40,
											height: 40,
											borderRadius: 20,
											backgroundColor: "#F7A4A4",
											alignItems: "center",
											justifyContent: "center",
										}}>
										<Image
											source={require("../../assets/animal6.png")}
											style={{ width: 30, height: 30 }}
										/>
									</View>
								}
								trackBar={{
									activeBackgroundColor: "#7AA874",
									inActiveBackgroundColor: "#6b6b6b",
									borderActiveColor: "#004225",
									borderInActiveColor: "#1c1c1c",
									borderWidth: 5,
									width: 100,
								}}
							/>
						</View>
						{toggleValue ? (
							<>
								<TextInput
									placeholder="Search by ID"
									value={searchId}
									onChangeText={(text) => setSearchId(text)}
									style={{
										borderWidth: 1,
										borderColor: "#ccc",
										borderRadius: 5,
										padding: 10,
										marginBottom: 10,
									}}
								/>

								<Text>Trees:</Text>

								<View style={styles.buttonContainer}>
									<TouchableOpacity
										onPress={selectAllTrees}
										style={styles.buttonall}>
										<Text style={styles.buttonText}>Select All Trees</Text>
									</TouchableOpacity>
								</View>
								<FlatList
									data={trees.filter((item) =>
										item.id.toString().includes(searchId),
									)}
									keyExtractor={(item) => item.id.toString()}
									renderItem={({ item }) => (
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												borderColor: "#ccc",
												borderWidth: 1,
												padding: 8,
												marginBottom: 10,
											}}>
											<Text style={{ flex: 1 }}>
												{`This is the tree number ${item.id}`}
											</Text>
											<View style={{ flex: 1, alignItems: "flex-end" }}>
												<CheckBox
													checked={selectedTrees.some((t) => t.id === item.id)}
													checkedColor="#94a995"
													onPress={() => toggleTreeSelection(item)}
													size={20}
													uncheckedColor="#114243"
												/>
											</View>
										</View>
									)}
								/>
							</>
						) : (
							<>
								<TextInput
									placeholder="Search by ID"
									value={searchId}
									onChangeText={(text) => setSearchId(text)}
									style={{
										borderWidth: 1,
										borderColor: "#ccc",
										borderRadius: 5,
										padding: 10,
										marginBottom: 10,
									}}
								/>

								<Text>Animals:</Text>

								<View style={styles.buttonContainer}>
									<TouchableOpacity
										onPress={selectAllAnimals}
										style={styles.buttonall}>
										<Text style={styles.buttonText}>Select All Animals</Text>
									</TouchableOpacity>
								</View>

								<FlatList
									data={animals.filter((item) =>
										item.id.toString().includes(searchId),
									)}
									keyExtractor={(item) => item.id.toString()}
									renderItem={({ item }) => (
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												borderColor: "#ccc",
												borderWidth: 1,
												padding: 8,
												marginBottom: 10,
											}}>
											<Text>{`This is the animal number ${item.id}`}</Text>
											<View style={{ flex: 1, alignItems: "flex-end" }}>
												<CheckBox
													checked={selectedAnimals.some(
														(a) => a.id === item.id,
													)}
													checkedColor="#94a995"
													onPress={() => toggleAnimalSelection(item)}
													size={20}
													uncheckedColor="#114243"
												/>
											</View>
										</View>
									)}
								/>
							</>
						)}
						<TouchableOpacity
							style={styles.createGroupButton}
							onPress={() => {
								handleAddGroup(); // Call handleAddGroup when the button is pressed
								setIsModalVisible(false); // Close the modal
							}}>
							<Text style={styles.createGroupButtonText}>Create Group</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	section: {
		alignItems: "center",
		paddingTop: 20,
	},
	sectionText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#104142",
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: "#95aa96",
		marginHorizontal: 20,
		marginTop: 10,
	},
	groupItem: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#95aa96",
	},
	plusButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#346c6e",
		width: 60,
		height: 60,
		borderRadius: 30,
		alignSelf: "center",
		marginBottom: 20,
	},
	addGroupContainer: {
		padding: 20,
		backgroundColor: "#fff",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	},
	timePickerButton: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	},
	checkboxContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	checkbox: {
		width: 24,
		height: 24,
		borderWidth: 1,
		borderColor: "black",
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	uncheckedBox: {
		backgroundColor: "white",
	},
	checkedBox: {
		backgroundColor: "blue",
	},
	checkmark: {
		color: "white",
	},
	createGroupButton: {
		backgroundColor: "#114243",
		padding: 12,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 20,
	},
	createGroupButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	groupItem: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},

	groupName: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 5,
		color: "#114243",
		marginLeft: 0,
		textTransform: "uppercase",
	},

	groupCaption: {
		fontSize: 14,
		color: "#666",
		alignSelf: "flex-start",
		/* borderTopWidth: 1,
		borderTopColor: "#93aa95", */
		paddingVertical: 5,
		marginLeft: 9,
	},
	groupHeader: {
		flexDirection: "row",
		justifyContent: "space-between", // To separate the name and X button
		alignItems: "center", // Vertically center items
		padding: 8,
	},
	deleteButton: {
		fontSize: 18,
		fontWeight: "bold",
		color: "red", // You can change the color to your preference
	},
	buttonall: {
		backgroundColor: "#114243",
		color: "white",
		padding: 10,
		borderRadius: 5,
		marginBottom: 10,
		alignItems: "center",
	},
	buttonContainer: {
		justifyContent: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Groups;
