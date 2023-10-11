import React, { useState } from "react";
<<<<<<< HEAD
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TextInput,
	Alert,
	StyleSheet,
	Modal,
} from "react-native";
=======
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Color, } from "./GlobalStyles";
import { UseSelector, useSelector } from "react-redux"
const Profile = () => {
  const currentUser = useSelector((state) => state.user); // Assuming your user object in Redux has a 'name' property
>>>>>>> 6a97f9ec44730fc9be11c0a072b29853c5d501d1

const ProfileComponent = () => {
	const [wallet, setWallet] = useState(0);
	const [amount, setAmount] = useState(0);
	const [password, setPassword] = useState("");
	const [isPasswordDialogVisible, setIsPasswordDialogVisible] = useState(false);
	const [isWalletAlertVisible, setIsWalletAlertVisible] = useState(false);
	const [isWalletInputVisible, setIsWalletInputVisible] = useState(false);
	const [isIncrementing, setIsIncrementing] = useState(true); // State to track if user wants to increment (true) or decrement (false)
	const [walletInput, setWalletInput] = useState("");
	const [walletPassword, setWalletPassword] = useState("");


	const handleIncrement = () => {
		setIsPasswordDialogVisible(true);
		setIsIncrementing(true); // User wants to increment
	};

	const handleDecrement = () => {
		setIsPasswordDialogVisible(true);
		setIsIncrementing(false); // User wants to decrement
	};

	const handleCancelPassword = () => {
		setIsPasswordDialogVisible(false);
		setPassword("");
	};

	// Function to handle the Wallet text click
	const handleWalletTextClick = () => {
		setIsWalletInputVisible(true);
	};

	const handleWalletInputCancel = () => {
		setIsWalletInputVisible(false);
		setWalletInput(""); // Clear the input when the modal is canceled
	};

	const handleWalletInputConfirm = () => {
		setIsWalletInputVisible(false);
		setWalletInput("");
		setWalletPassword(""); // Clear the password input after confirming
	};
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/profile/DEFAULT.png")} // Replace with your image source
				style={styles.profileImage}
			/>
			<Text style={styles.name}>John Doe</Text>
			<Image
				source={require("../../assets/profile/verified-logo.png")} // Replace with your verified logo source
				style={styles.verifiedLogo}
			/>
			<Text style={styles.address}>123 Main St, City</Text>
			<View style={styles.logoGrid}>
				{/* Add your logos here */}
				<Image
					source={require("../../assets/animal6.png")}
					style={styles.logo}
				/>
				<Image source={require("../../assets/shep4.png")} style={styles.logo} />
				<Image source={require("../../assets/olives.png")} style={styles.logo} />
				{/* Add more logos as needed */}
			</View>
			<View style={styles.walletContainer}>
        <TouchableOpacity onPress={handleWalletTextClick} style={styles.walletInputContainer}>
          <Text style={styles.walletText}>Wallet: {wallet} TND</Text>
        </TouchableOpacity>
      </View>

      {/* Wallet input modal */}
      <Modal
        visible={isWalletInputVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleWalletInputCancel}>
        <View style={styles.wrapper}>
          <View style={styles.walletInputModal}>
            <Text style={styles.walletInputLabel}>Enter Amount:</Text>
            <TextInput
              style={styles.walletInput}
              value={wallet}
              onChangeText={(text) => setWallet(text)}
              keyboardType="numeric" // Allow only numeric input
              placeholder="Enter Amount"
            />
            <View style={styles.btnwrap}>
              <TouchableOpacity
                onPress={handleWalletInputCancel}
                style={styles.walletInputCancelButton}>
                <Text style={styles.walletInputCancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleWalletInputConfirm}
                style={styles.walletInputConfirmButton}>
                <Text style={styles.walletInputConfirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
	container: {
		alignItems: "center",
		padding: 20,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50, // to make it round
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 10,
	},
	verifiedLogo: {
		width: 20,
		height: 20,
		marginLeft: 5,
	},
	address: {
		marginTop: 5,
	},
	logoGrid: {
		flexDirection: "row",
		marginTop: 20,
	},
	logo: {
		width: 50,
		height: 50,
		margin: 5,
	},
	walletContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
	},
	amountInput: {
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		width: 100,
		textAlign: "center",
		fontSize: 18,
	},
	walletButton: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
		marginHorizontal: 5,
	},
	walletButtonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	walletText: {
		marginTop: 20,
		fontSize: 18,
		fontWeight: "bold",
	},
	confirmationContainer: {
		marginTop: 20,
		alignItems: "center",
	},
	passwordInput: {
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		width: 200,
		textAlign: "center",
		fontSize: 18,
	},
	confirmButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
	},
	confirmButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	cancelButton: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
	},
	cancelButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	walletInputContainer: {
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
	},
	walletText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	wrapper: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	walletInputModal: {
		flex: 1 / 3,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	walletInput: {
		width: 200,
		height: 40,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	btnwrap: {
		flexDirection: "row",
		gap: 10,
	},
	walletInputCancelButton: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 5,
	},
	walletInputCancelButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	walletInputConfirmButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 5,
	},
	walletInputConfirmButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},

	walletInputLabel: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	amountContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	amountButton: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
	},
	amountButtonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	amountText: {
		fontSize: 20,
		fontWeight: "bold",
		marginHorizontal: 20,
	},
	walletInputCancelButton: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 5,
	},
	walletInputCancelButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	walletInputConfirmButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 5,
	},
	walletInputConfirmButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	walletContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
	},
	walletButton: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
		marginHorizontal: 5,
	},
	walletButtonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},

	// Modal styles
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalInput: {
		width: 200,
		height: 40,
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 20,
		backgroundColor: "white",
	},
	modalCancelButton: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 5,
	},
	modalCancelButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	modalConfirmButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 5,
	},
	modalConfirmButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
=======
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  jessicaJones27Clr: {
    color: Color.colorDarkslateblue,
    textAlign: "left",
    position: "absolute",
  },
 
  bgPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2.7961666584014893,
    },
    backgroundColor: Color.colorDarkslategray_100,
    bottom: "0%",
    height: "2000%",
    left: "-71%",
    top: "11500%",
    position: "absolute",
    width: "120%",
    borderRadius:5
  },
  message1Typo: {
    color: Color.colorWhite,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: 14,
    top: "12100%",
    textAlign: "center",
    lineHeight: 15,
    left:-73,
    height:20
  },
  hoverPosition: {
    display: "none",
    position: "absolute",
  },
  bg1ShadowBox: {
    elevation: 7.61,
    shadowRadius: 7.61,
    shadowColor: "rgba(50, 50, 93, 0.1)",
    borderRadius: 2,
  },
  
  text2Typo: {
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  headerIcon: {
    height: "42.8%",
    width: "100.1%",
    right: "-0.1%",
    bottom: "57.2%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  oval2Icon: {
    height: "12.76%",
    width: "24.14%",
    top: "14.95%",
    right: "62.77%",
    bottom: "72.29%",
    left: "13.09%",
    opacity: 0.1,
  },
  line: {
    height: "0.2%",
    width: "56.54%",
    top: "38.26%",
    right: "21.52%",
    bottom: "61.64%",
    left: "21.94%",
    backgroundColor: "#e9ecef",
    position: "absolute",
  },
  sanFranciscoUsa: {
    top: "28%",
    left: "35%",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    lineHeight: 15,
    color: Color.colorDarkslateblue,
  },
  jessicaJones27: {
    top: "23%",
    fontSize: 23,
    lineHeight: 22,
    left: "29.5%",
    textAlign: "left",
  },
  message: {
    height: "5%",
    width: "30%",
    top: "52.5%",
    right: "30.16%",
    left: "55%",
  },
  text: {
    width: "14%",
    left: "90%",
    color: "#4a9c4a",
    fontSize:60,
    top:210
  },
  text1: {
    width: "12%",
    color: "#da1717",
    left: "0%",
    fontSize:100,
    top:100
    
  },
  text2: {
    height: "20%",
    width: "92.63%",
    top: "51.42%",
    left: "4.56%",
    fontSize: 33,
    color: "#1b5630",
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 1,
  },
  spinach: {
    height: "10%",
    width: "42%",
    top: "74%",
    left: "33%",
    fontSize: 23,
    color: "#282c29",
  },
  wallet11: {
    height: "47%",
    width: "62.92%",
    right: "18.7%",
    bottom: "56.34%",
    left: "18.38%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  money: {
    height: "41.95%",
    width: "54.81%",
    top: "47.1%",
    right: "24.68%",
    bottom: "10.94%",
    left: "20.51%",
    position: "absolute",
  },
  profile: {
    flex: 1,
    height: 535,
    width: "100%",
  },
  imageDefault: {
    width: 150,
    height: 150, // Increase the height to match the width to make it a circle
    top: -20,
    left: 130,
    borderRadius: 90, // Half of the width and height
  }
>>>>>>> 6a97f9ec44730fc9be11c0a072b29853c5d501d1
});

export default ProfileComponent;
