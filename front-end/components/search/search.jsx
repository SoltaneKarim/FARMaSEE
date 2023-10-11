import React, { useState, useEffect, useRef  } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	FlatList,
	Image,
	TouchableOpacity,
	ScrollView,
	Button,
	Linking,
} from "react-native";
import Modal from "react-native-modal";
const Search = () => {
	const diseasesData = [
		{
			name: "Fungi",
			description:
				"Leaf spot is a common fungal disease that causes dark, round spots to appear on the leaves of plants. It can lead to defoliation and reduced plant vigor.",
			prevention_methods: [
				"Plant disease-resistant varieties.",
				"Ensure proper spacing between plants for good air circulation.",
				"Avoid overhead watering to reduce moisture on leaves.",
				"Apply fungicides as a preventive measure.",
			],
			imageUrl:
				"https://extension.umn.edu/sites/extension.umn.edu/files/marssonia-leaf-spot-on-euonymus-grabowski.jpg",
		},
		{
			name: "Powdery Mildew",
			description:
				"Powdery mildew is a fungal disease characterized by white, powdery spots on the leaves, stems, and flowers of plants. It can inhibit photosynthesis and weaken the plant.",
			prevention_methods: [
				"Plant in areas with good sunlight and air circulation.",
				"Prune and thin plants to reduce overcrowding.",
				"Apply neem oil or sulfur-based fungicides.",
				"Remove and destroy infected plant parts.",
			],
			imageUrl:
				"https://www.greenlife.co.ke/wp-content/uploads/2022/04/powdery_mildew.jpg",
		},
		{
			name: "Root Rot",
			description:
				"Root rot is a soil-borne disease that affects the roots of plants, causing them to become brown and mushy. It leads to wilting and poor nutrient uptake.",
			prevention_methods: [
				"Ensure well-draining soil to prevent waterlogging.",
				"Avoid overwatering and water at the base of plants.",
				"Use disease-free planting material and sterilized tools.",
				"Apply beneficial nematodes to the soil for natural control.",
			],
			imageUrl:
				"https://theplantgallery.com/wp-content/uploads/2020/06/Root-Rot-Featured-Image-2.jpg",
		},
		{
			name: "Bacterial Blight",
			description:
				"Bacterial blight is a bacterial disease that causes water-soaked lesions on leaves, which turn brown and often have a yellow halo. It can lead to plant death in severe cases.",
			prevention_methods: [
				"Practice crop rotation to reduce disease buildup in the soil.",
				"Use disease-free seeds and transplants.",
				"Avoid overhead irrigation to minimize leaf wetness.",
				"Apply copper-based fungicides as a preventive measure.",
			],
			imageUrl:
				"https://soybeanresearchinfo.com/wp-content/uploads/2020/04/SoyFG_Fig076-Bacterial-blight-coalescing-lesion-Daren-Mueller-scaled_1280x720_acf_cropped.jpg",
		},
		{
			name: "Aphids",
			description:
				"Aphids are small, soft-bodied insects that feed on the sap of plants. They can distort plant growth and transmit plant viruses.",
			prevention_methods: [
				"Use insecticidal soap or neem oil to control aphids.",
				"Encourage natural predators like ladybugs and lacewings.",
				"Prune infested plant parts.",
				"Keep the garden clean and free from weeds.",
			],
			imageUrl:
				"https://cdn-www.terminix.com/-/media/Feature/Terminix/Articles/what-are-aphids.jpg?rev=6e5acfdf5a80455b9869c91904f302bb",
		},
		{
			name: "Tomato Blight",
			description:
				"Tomato blight is a fungal disease that affects tomato plants. It causes brown spots on leaves, fruit rot, and can lead to plant death.",
			prevention_methods: [
				"Plant tomatoes in well-drained soil with good air circulation.",
				"Avoid overhead watering and water at the base of plants.",
				"Apply copper-based fungicides preventively.",
				"Remove and destroy infected plant parts.",
			],
			imageUrl:
				"https://www.greenlife.co.ke/wp-content/uploads/2022/04/Late-Blight-Tomatoes.jpg",
		},
		// Add more disease objects with names, descriptions, prevention methods, and image URLs here
	];
	const router = useRouter();

	const [searchText, setSearchText] = useState(""); // Initialize searchText with an empty string

	// Modify getData to set the initial searchText from local storage
	async function getData() {
		try {
			const value = await AsyncStorage.getItem("searchedone");
			if (value !== null) {
				// Set searchText to the retrieved value if it's not null
				setSearchText(value);
			}
		} catch (error) {
			console.error("Error retrieving data:", error);
		}
	}

	useEffect(() => {
		// Call getData when the component is mounted
		getData();
		// You can add other useEffect logic here if needed
	}, []);

	useEffect(() => {
		// Define your search logic here
		const handleSearch = async () => {
			try {
				// Clear local storage
				await AsyncStorage.removeItem("searchedone");

				// Rest of your search logic
				const filteredResults = diseasesData.filter((disease) => {
					const { name, description, prevention_methods } = disease;
					const lowerCaseQuery = searchText.toLowerCase();

					// Check if the name, description, or any prevention method includes the query text
					return name.toLowerCase().includes(lowerCaseQuery);
				});

				setSearchResults(filteredResults);
			} catch (error) {
				console.error("Error clearing local storage:", error);
			}
		};

		// Call handleSearch when searchText changes
		handleSearch();
	}, [searchText]);
  const [isLoading, setIsLoading] = useState(true); 
	const [selectedDisease, setSelectedDisease] = useState(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [searchResults, setSearchResults] = useState([]);

	const toggleDiseaseDetail = (disease) => {
		setSelectedDisease(disease);
		setIsModalVisible(true);
	};
  const isMounted = useRef(true);
  useEffect(() => {
    setTimeout(() => {
      // Check if the component is still mounted before updating state
      if (isMounted.current) {
        setIsLoading(false);
      }
    }, 1000);

    // Cleanup function to update isMounted when unmounting
    return () => {
      isMounted.current = false;
    };
  }, []);
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#346c6e" />
      </View>
    );
  }
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.searchBar}
				placeholder="Search for a disease"
				onChangeText={(text) => {
					setSearchText(text); // Update the searchText state
				}}
				value={searchText}
			/>

			<FlatList
				data={searchResults.length > 0 ? searchResults : diseasesData}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.resultContainer}
						onPress={() => toggleDiseaseDetail(item)}>
						<View style={styles.wrapper}>
							<Image
								source={{ uri: item.imageUrl }}
								style={styles.diseaseImage}
							/>
							<View style={styles.diseaseInfo}>
								<Text style={styles.diseaseName}>{item.name}</Text>
								<Text style={styles.diseaseDescription}>
									{item.description.slice(0, 100)}...
									<Text style={styles.readMore}>Read more</Text>
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
			<Modal isVisible={isModalVisible}>
				<View style={styles.modalContainer}>
					{selectedDisease && (
						<View>
							<Text style={styles.diseaseName}>{selectedDisease.name}</Text>
							<Image
								source={{ uri: selectedDisease.imageUrl }}
								style={styles.modalDiseaseImage}
							/>
							<Text style={styles.modalDescription}>
								{selectedDisease.description}
							</Text>
							<Text style={styles.diseasePrevention}>Prevention methods:</Text>
							<View>
								{selectedDisease.prevention_methods.map((method, index) => (
									<Text key={index} style={styles.preventionMethod}>
										• {method}
									</Text>
								))}
							</View>

							<View style={styles.cont}>
								<Text
									style={styles.google}
									onPress={() => {
										const query = `https://www.google.com/search?q=${selectedDisease.name}`;
										Linking.openURL(query);
									}}>
									Continue to Google
								</Text>
								<Image
									source={require("../../assets/google.png")}
									style={{ width: 20, height: 20 }}
								/>
							</View>
						</View>
					)}
					<View
						style={styles.cancelbtn}
						onPress={() => setIsModalVisible(false)}>
						<Text
							style={styles.btncancel}
							onPress={() => setIsModalVisible(false)}>
							Return
						</Text>
					</View>
				</View>
			</Modal>
		</View>
	);
};
const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		flex: 1,
		marginBottom: 16,
		shadowColor: "rgba(0, 0, 0, 0.55)", // Box shadow color
		shadowOffset: {
			width: 1.95,
			height: 1.95,
		},
		shadowOpacity: 1,
		shadowRadius: 2.6,
		elevation: 5,
		borderRadius: 8, // Border radius for the entire wrapper
		padding: 10, // Add padding to create space around the content
		backgroundColor: "white", // Set background color to white
	},
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "white",
	},
	searchBar: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 16,
		paddingHorizontal: 8,
		borderRadius: 4,
	},
	resultContainer: {
		flexDirection: "row",
		marginBottom: 16,

		borderRadius: 8, // Border radius for the entire item
	},
	diseaseImage: {
		width: 80,
		height: 80,
		marginRight: 16,
		borderRadius: 8, // Border radius for the image
	},
	diseaseInfo: {
		flex: 1,
	},
	diseaseName: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#346c6e", // Text color
		padding: 10,
	},
	diseaseDescription: {
		marginBottom: 8,
		// color: '#346c6e', // Text color
	},
	diseasePrevention: {
		fontWeight: "bold",
		padding: 10,
		fontSize: 18,
	},

	readMore: {
		color: "#888",
		fontSize: 14,
		fontStyle: "italic",
	},
	modalContainer: {
		flex: 1,
		padding: 16,
		backgroundColor: "white",
	},
	modalDiseaseImage: {
		width: "100%",
		height: 200,
		marginBottom: 16,
		borderRadius: 8, // Border radius for the image in the modal
	},
	modalDescription: {
		marginBottom: 16,
		padding: 10,
		fontSize: 15,
		// color: '#346c6e', // Text color
	},
	preventionMethod: {
		marginBottom: 8,
		padding: 7,
		// color: '#346c6e', // Text color
	},
	cancelbtn: {
		backgroundColor: "#336b6d",
		borderRadius: 10,
		padding: 12,
		alignItems: "center",
		// marginBottom: 40,
		width: "100%",
		marginTop: 20,
	},
	btncancel: {
		color: "white",
		fontWeight: "bold",
	},

	cont: {
		flexDirection: "row", // Display as a row
		justifyContent: "flex-end", // Align to the right of the container
		alignItems: "center", // Center vertically within the container
		marginTop: 20, // Add spacing from the content above
	},
	google: {
		marginRight: 10, // Add spacing between text and image
		color: "grey", // Customize the text color
	},
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Search;
