import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	TextInput,
	Modal,
	FlatList,
	Button,
	KeyboardAvoidingView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";

const Stock = () => {
	const user = useSelector((state) => state.user); // Assuming your user object in Redux has a 'name' property
	console.log("yhis is it", user);
	const [isAdding, setIsAdding] = useState(false);
	const [itemType, setItemType] = useState("animal");
	const [selectedOption, setSelectedOption] = useState(null); // Selected option from the custom dropdown
	const [animalModalVisible, setAnimalModalVisible] = useState(false);

	const [selectedAnimalType, setSelectedAnimalType] = useState(null);
	const [selectedAnimalOption, setSelectedAnimalOption] = useState(null);

	const [selectedSexe, setSelectedSexe] = useState(null);
	const [genderModalVisible, setGenderModalVisible] = useState(false);

	const [selectedTreeType, setSelectedTreeType] = useState(null);
	const [selectedTreeOption, setSelectedTreeOption] = useState(null);
	const [treeModalVisible, setTreeModalVisible] = useState(false);
	const [animalData, setAnimalData] = useState([]);
	const [treeData, setTreeData] = useState([]);

	//adding the animals
	const [birthday, setBirthday] = useState("");
	const [priceB, setPriceB] = useState(null);
	////////////////////////////////////////////////////////////////
	const [age, setAge] = useState("");
	const [weight, setWeight] = useState("");

	const [ageTree, setAgeTree] = useState(0); // Age of the selected tree
	const [quantityTree, setQuantityTree] = useState(0);
	const randomAnimalOptions = [
		{ label: "Cow", imageSource: require("../../assets/animal6.png") },
		{ label: "Sheep", imageSource: require("../../assets/sheep.png") },
		// Add more options as needed with their respective image sources
	];
	const randomTreeOptions = [
		{ label: "Olive", imageSource: require("../../assets/olives.png") },
		// Add more options as needed with their respective image sources
	];

	const genderOptions = [
		{ label: "Male", imageSource: require("../../assets/male.png") },
		{ label: "Female", imageSource: require("../../assets/female.webp") },
		// Add more options as needed with their respective image sources
	];
	const toggleAdding = () => {
		setIsAdding(!isAdding);
	};
	//the axios for posting
	const addtree = async () => {
		console.log("hey");
		if (selectedTreeType && ageTree && quantityTree) {
			const treeData = {
				type: selectedTreeType,
				age: ageTree,
				quantity: quantityTree,
				report: "",
				specificId: user.id,
			};

			try {
				const response = await axios.post(
					"http://192.168.100.49:5000/tree",
					treeData,
				);

				if (response.status === 200) {
					console.log("Tree data posted successfully");
					// Reset your form and perform other necessary actions
				} else {
					console.error("Error posting tree data");
					// Handle the error as needed
				}
			} catch (error) {
				console.error("Error posting tree data:", error.message);
				// Handle the error as needed
			} finally {
				// Clear the input fields
				setSelectedTreeType("");
				setAgeTree("");
				setQuantityTree("");
				// You can also reset your form in this block if needed
			}
		}
	};

	const postAnimalData = () => {
		// Construct the data object to send to the server
		console.log("you have",user.id);
		const data = {
			type: selectedAnimalType,
			sexe: selectedSexe.label,
			age: parseInt(age),
			weight: parseFloat(weight),
			birthday: birthday,
			priceB: parseFloat(priceB),
			specificId: user.id,
		};

		// Send the data to the server using Axios
		axios
			.post("http://192.168.100.49:5000/animal", data)
			.then((response) => {
				// Handle the response (e.g., display a success message)
				console.log("Animal data successfully posted:", response.data);
				alert("Animal data successfully posted");
				// Optionally, reset the form fields or perform other actions
				setSelectedAnimalType("");
				setSelectedSexe("");
				setAge("");
				setWeight("");
				setBirthday("");
				setPriceB("");
				setPriceS("");
				setDescription("");
			})
			.catch((error) => {
				console.error("Error posting animal data:", error.message);
			});
	};

	
	const fetchAnimalData = async () => {
		try {
			const response = await axios.get(
				`http://192.168.100.49:5000/animal/one/${user.id}`,
			);

			if (response.status === 200) {
				// Assuming the response.data is an array of animal data
				setAnimalData(response.data.data);
			
			}
		} catch (error) {
			console.error("Error fetching animal data:", error.message);
		}
	};

	// Function to fetch tree data based on user.id
	const fetchTreeData = async () => {
		try {
			const response = await axios.get(
				`http://192.168.100.49:5000/tree/one/${user.id}`,
			);

			if (response.status === 200) {
				setTreeData(response.data.data);
			
			}
		} catch (error) {
			console.error("Error fetching tree data:", error.message);
		}
	};

	// UseEffect for fetching animal data when the component mounts
	useEffect(() => {
		fetchAnimalData();
	}, []); // The empty dependency array ensures this effect runs only once when the component mounts

	// UseEffect for fetching tree data when the component mounts
	useEffect(() => {
		fetchTreeData();
	}, []);

	// Filter animal data by type (e.g., "Cow" or "Sheep")
	const cowsData = animalData.filter((item) => item.type === "Cow");
	const sheepData = animalData.filter((item) => item.type === "Sheep");

	// Filter tree data by type (e.g., "Olive")
	const oliveTreeData = treeData.filter((item) => item.type === "Olive");

	const renderItemAnimal = () => {
		if (isAdding) {
			return (
				<>
					<KeyboardAvoidingView
						style={{ flex: 1 }}
						behavior={Platform.OS === "ios" ? "padding" : null}
						keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}>
						<ScrollView>
							<View style={styles.inputwrapper}>
								{itemType === "animal" ? (
									<>
										<Image
											style={{ width: 200, height: 200 }}
											source={require("../../assets/cow2.png")}
										/>
										<TouchableOpacity
											style={styles.dropdown}
											onPress={() => setAnimalModalVisible(true)}>
											{selectedAnimalType ? (
												<View style={styles.selectedOptionContainer}>
													<Image
														source={selectedAnimalOption.imageSource}
														style={styles.optionImage}
													/>
													<Text style={styles.selectedOptionText}>
														{selectedAnimalType}
													</Text>
												</View>
											) : (
												<Text style={[styles.placeholderText, styles.optionText]}>
													Select an animal
												</Text>
											)}
										</TouchableOpacity>

										{/* Custom dropdown modal for Animal */}
										<Modal
											transparent={true}
											animationType="slide"
											visible={animalModalVisible}
											onRequestClose={() => setAnimalModalVisible(false)}>
											<View style={styles.modalContainer}>
												<View style={styles.modalContent}>
													<FlatList
														data={randomAnimalOptions}
														keyExtractor={(item, index) => index.toString()}
														renderItem={({ item }) => (
															<TouchableOpacity
																style={styles.optionContainer}
																onPress={() => {
																	setSelectedAnimalType(item.label);
																	setSelectedAnimalOption(item);
																	setAnimalModalVisible(false);
																}}>
																<Image
																	source={item.imageSource}
																	style={styles.optionImage}
																/>
																<Text style={styles.optionText}>
																	{item.label}
																</Text>
															</TouchableOpacity>
														)}
													/>
												</View>
											</View>
										</Modal>

										{/* Custom dropdown for selecting Sexe */}
										<TouchableOpacity
											style={styles.dropdown}
											onPress={() => setGenderModalVisible(true)}>
											{selectedSexe ? (
												<View style={styles.selectedOptionContainer}>
													<Image
														source={selectedSexe.imageSource}
														style={styles.optionImage}
													/>
													<Text style={styles.selectedOptionText}>
														{selectedSexe.label}
													</Text>
												</View>
											) : (
												<Text style={styles.placeholderText}>Select Sexe</Text>
											)}
										</TouchableOpacity>

										<Modal
											transparent={true}
											animationType="slide"
											visible={genderModalVisible}
											onRequestClose={() => setGenderModalVisible(false)}>
											<View style={styles.modalContainer}>
												<View style={styles.modalContent}>
													<FlatList
														data={genderOptions}
														keyExtractor={(item, index) => index.toString()}
														renderItem={({ item }) => (
															<TouchableOpacity
																style={styles.optionContainer}
																onPress={() => {
																	setSelectedSexe(item);
																	setGenderModalVisible(false);
																}}>
																<Image
																	source={item.imageSource}
																	style={styles.optionImage}
																/>
																<Text style={styles.optionText}>
																	{item.label}
																</Text>
															</TouchableOpacity>
														)}
													/>
												</View>
											</View>
										</Modal>

										<TextInput
											style={styles.input}
											placeholder="Age"
											keyboardType="numeric"
											value={age}
											width="80%"
											onChangeText={(text) => setAge(text)}
										/>
										<TextInput
											style={styles.input}
											placeholder="Weight"
											keyboardType="numeric"
											value={weight}
											onChangeText={(text) => setWeight(text)}
										/>

										<TextInput
											style={styles.input}
											placeholder="Birthday (e.g., 2023-09-20)"
											value={birthday}
											onChangeText={(text) => setBirthday(text)}
										/>

										<TextInput
											style={styles.input}
											placeholder="Price (Buying) (e.g., 50.000)"
											keyboardType="numeric"
											value={priceB}
											onChangeText={(text) => setPriceB(text)}
										/>
									</>
								) : (
									<>
										<Image
											style={{ width: 200, height: 200 }}
											source={require("../../assets/tree.png")}
										/>
										<TouchableOpacity
											style={styles.dropdown}
											onPress={() => setTreeModalVisible(true)}>
											{selectedTreeType ? (
												<View style={styles.selectedOptionContainer}>
													<Image
														source={selectedTreeOption.imageSource}
														style={styles.optionImage}
													/>
													<Text style={styles.selectedOptionText}>
														{selectedTreeType}
													</Text>
												</View>
											) : (
												<Text style={styles.placeholderText}>
													Select a tree
												</Text>
											)}
										</TouchableOpacity>

										{/* Custom dropdown modal for Tree */}
										<Modal
											transparent={true}
											animationType="slide"
											visible={treeModalVisible}
											onRequestClose={() => setTreeModalVisible(false)}>
											<View style={styles.modalContainer}>
												<View style={styles.modalContent}>
													<FlatList
														data={randomTreeOptions}
														keyExtractor={(item, index) => index.toString()}
														renderItem={({ item }) => (
															<TouchableOpacity
																style={styles.optionContainer}
																onPress={() => {
																	setSelectedTreeType(item.label);
																	setSelectedTreeOption(item);
																	setTreeModalVisible(false);
																}}>
																<Image
																	source={item.imageSource}
																	style={styles.optionImage}
																/>
																<Text style={styles.optionText}>
																	{item.label}
																</Text>
															</TouchableOpacity>
														)}
													/>
												</View>
											</View>
										</Modal>

										<TextInput
											style={styles.input}
											placeholder="Age"
											keyboardType="numeric"
											value={ageTree}
											onChangeText={(text) => setAgeTree(text)}
										/>

										<TextInput
											style={styles.input}
											placeholder="Quantity"
											keyboardType="numeric"
											value={quantityTree}
											onChangeText={(text) => setQuantityTree(text)}
										/>
									</>
								)}
							</View>
						</ScrollView>
					</KeyboardAvoidingView>

					{/* Submit button outside KeyboardAvoidingView */}
					<TouchableOpacity
						style={{
							backgroundColor: "#336b6d",
							borderRadius: 10,
							padding: 10,
							alignSelf: "center",
							marginBottom: 40,
							width: "50%",
						}}
						onPress={() => {
							if (itemType === "animal") {
								postAnimalData();
							} else {
								addtree();
							}
						}}>
						<Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
					</TouchableOpacity>
				</>
			);
		} else {
			// Render the list of items (animals or trees)
			return (
				<ScrollView style={styles.scrollView}>
					{/* Your list of items goes here */}
					<View style={styles.all}>
						<View style={styles.wrapper}>
							<View style={styles.title}>
								<Text
									style={{
										fontSize: 30,
										fontWeight: "800",
										fontFamily: "sans-serif",
										color: "#123f41",
										textTransform:"capitalize"
									}}>
									This is what you have
								</Text>
								<Image
									style={{ marginLeft: 10 }}
									source={require("../../assets/info.png")}
								/>
							</View>

							<View style={styles.content}>
								<View style={styles.table}>
									<Image
										style={{ width: 50, height: 50 }}
										source={require("../../assets/cow4.png")} // Replace with your cow image
									/>
									<Text style={{fontWeight:700, fontSize:20 , color:"#134042"}}>Cows</Text>
									<Text style={styles.quantityText} style={{fontWeight:700, fontSize:15 , color:"#94a995"}}>
										Quantity: {cowsData.length}
									</Text>
								</View>
								<View style={styles.table}>
									<Image
										style={{ width: 50, height: 50 }}
										source={require("../../assets/shep4.png")} // Replace with your sheep image
									/>
									<Text style={{fontWeight:700, fontSize:20 , color:"#134042"}}>Sheep</Text>
									<Text style={styles.quantityText} style={{fontWeight:700, fontSize:15 , color:"#94a995"}}>
										Quantity: {sheepData.length}
									</Text>
								</View>
								<View style={styles.table}>
									<Image
										style={{ width: 50, height: 50 }}
										source={require("../../assets/olives.png")} // Replace with your olive tree image
									/>
									<Text style={{fontWeight:700, fontSize:20 , color:"#134042"}}>Olive Trees:</Text>
									<Text style={styles.quantityText} style={{fontWeight:700, fontSize:15 , color:"#94a995"}}>
										Quantity: {oliveTreeData.length}
									</Text>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			);
		}
	};

	return (
		<View style={styles.container}>
			{renderItemAnimal()}
			{!isAdding && (
				<TouchableOpacity style={styles.plusButton} onPress={toggleAdding}>
					<Text style={styles.plusButtonText}>{!isAdding && "+"}</Text>
				</TouchableOpacity>
			)}
			{isAdding && (
				<TouchableOpacity
					style={styles.toggleItemTypeButton}
					onPress={() =>
						setItemType(itemType === "animal" ? "tree" : "animal")
					}>
					<Text style={styles.toggleItemTypeButtonText}>
						{itemType === "animal" ? "Switch to Tree" : "Switch to Animal"}
					</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
		paddingVertical:30
	},
	all: {
		alignItems: "center",
		flex: 1,
		
	},
	wrapper: {
		marginTop: 100,
		width: "90%",
		
		
	},
	title: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		marginTop: 30,
	},
	table: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		borderWidth: 1,
		borderColor: "#94a995",
		borderRadius: 5,
	},
	plusButton: {
		position: "absolute",
		bottom: 40, // Adjust the value as needed to position the button at the desired distance from the bottom
		right: 30,
		backgroundColor: "#336b6d", // Customize button styles as needed
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	plusButtonText: {
		fontSize: 24,
		color: "white",
	},
	toggleItemTypeButton: {
		position: "absolute",
		bottom: 90, // Adjust the value as needed to position the button
		right: 20,
		backgroundColor: "gray", // Customize button styles as needed
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	toggleItemTypeButtonText: {
		fontSize: 16,
		color: "white",
	},
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	dropdown: {
		height: 50,
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		borderRadius: 5,
		
		marginBottom: 10,
textAlign: "left",

		width: "80%",
		
	},
	selectedOptionContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		textAlign:"left"

	},
	selectedOptionText: {
		marginLeft: 10,
		textAlign:"left"
		
	},
	placeholderText: {
		color: "gray",
		textAlign:"left"
	
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		textAlign:"left"

	},
	modalContent: {
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
		width: "80%",
		textAlign:"left"

	},
	optionContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
		textAlign:"left"
		
	},
	optionImage: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	optionText: {
		fontSize: 16,
		textAlign:"left",

		
	},
	// plusButton: {
	// 	position: "absolute",
	// 	bottom: 20,
	// 	right: 20,
	// 	backgroundColor: "blue",
	// 	width: 50,
	// 	height: 50,
	// 	borderRadius: 25,
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// },
	plusButtonText: {
		fontSize: 24,
		color: "white",
	},
	toggleItemTypeButton: {
		position: "absolute",
		bottom: 90,
		right: 20,
		backgroundColor: "gray",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	toggleItemTypeButtonText: {
		fontSize: 16,
		color: "white",
	},
	input: {
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		borderRadius: 5,
		width: "80%",
		marginBottom: 10,
		textAlign:"left",
		height: "10%",
	},
	inputwrapper: {
		// width: "90%",
		alignItems: "center",
	},
});

export default Stock;
