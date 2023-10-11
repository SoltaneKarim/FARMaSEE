import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";

const ProfileComponent = () => {
  const [wallet, setWallet] = useState(0);
  const [isWalletInputVisible, setIsWalletInputVisible] = useState(false);
  const [amountChange, setAmountChange] = useState(0);
  const [walletInput, setWalletInput] = useState("");

  const handleIncrement = () => {
    setIsWalletInputVisible(true);
    setAmountChange("+"); // Increment amount
  };

  const handleDecrement = () => {
    setIsWalletInputVisible(true);
    setAmountChange("-"); // Decrement amount
  };

  const handleWalletInputCancel = () => {
    setIsWalletInputVisible(false);
    setWalletInput(""); // Clear input
    setAmountChange(0); // Reset amount change
  };

  const handleWalletInputConfirm = () => {
    setIsWalletInputVisible(false);

    // Convert the input to a number
    const inputAmount = parseFloat(walletInput);

    if (!isNaN(inputAmount)) {
      // Check if the user wants to increment or decrement
      if (amountChange === "+") {
        // Increment the wallet amount
        setWallet(wallet + inputAmount);
      } else if (amountChange === "-") {
        // Decrement the wallet amount
        setWallet(wallet - inputAmount);
      }
    }

    // Reset the input and amountChange state
    setWalletInput("");
    setAmountChange(0);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/profile/iheb.png")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Image
        source={require("../../assets/profile/verified-logo.png")}
        style={styles.verifiedLogo}
      />
      <Text style={styles.address}>123 Main St, City</Text>
      <View style={styles.logoGrid}>
        {/* Add your logos here */}
        {/* ... */}
      </View>
      <Text style={styles.walletText}>Wallet: {wallet} TND</Text>

      <View style={styles.walletContainer}>
        <TouchableOpacity onPress={handleIncrement} style={styles.walletButton}>
          <Text style={styles.walletButtonText}>Increment</Text>
        </TouchableOpacity>
		

        <TouchableOpacity onPress={handleDecrement} style={styles.walletButton}>
          <Text style={styles.walletButtonText}>Decrement</Text>
        </TouchableOpacity>
		
      </View>

		<Image
    source={require("../../assets/profile/Money-bag.png")} // Replace with the path to your image
    style={styles.imageStyle}
  />
      {/* Wallet input modal */}
      <Modal
        visible={isWalletInputVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleWalletInputCancel}
      >
        <View style={styles.wrapper}>
          <View style={styles.walletInputModal}>
            <Text style={styles.walletInputLabel}>Enter Amount:</Text>
            <TextInput
              style={styles.walletInput}
              value={walletInput}
              onChangeText={(text) => setWalletInput(text)}
              keyboardType="numeric"
              placeholder="Enter Amount"
            />
            <View style={styles.btnwrap}>
              <TouchableOpacity
                onPress={handleWalletInputCancel}
                style={styles.walletInputCancelButton}
              >
                <Text style={styles.walletInputCancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleWalletInputConfirm}
                style={styles.walletInputConfirmButton}
              >
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
	container: {
		alignItems: "center",
		padding: 20,
		
	},
	profileImage: {
		width: 160,
		height: 160,
		borderRadius: 100, 
		top:50
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
		top: 60,
	}, 
	verifiedLogo: {
		width: 20,
		height: 20,
		left:80	,
		top:38	
	},
	address: {
		top: 45,
	},
	logoGrid: {
		flexDirection: "row",
	},
	
	walletContainer: {
		flexDirection: "row",
		alignItems: "center",
		top: 20,
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
	
	// walletButtonText: {
	// 	color: "white",
	// 	fontSize: 20,
	// 	fontWeight: "bold",
	// },
	// walletText: {
	// 	top: 20,
	// 	fontSize: 18,
	// 	fontWeight: "bold",
	// },
	confirmationContainer: {
		top: 20,
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
		top: 10,
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
		top: 10,
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
		fontSize: 30,
		fontWeight: "bold",
		top:100
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
		top: 40,
	},
	walletButton: {
		backgroundColor: "orange",
		padding: 10,
		borderRadius: 5,
		marginHorizontal: 5,
		top:140
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
	imageStyle:{
		width:200,
		height:250,
		top:200
	}
});

export default ProfileComponent;
