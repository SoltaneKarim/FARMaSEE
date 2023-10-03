import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, Modal, Button } from "react-native";

const Profile = () => {
  const [total, setTotal] = useState("0");
  const [isTotalModalVisible, setTotalModalVisible] = useState(false);

  const handleIncrement = () => {
    setTotal((prevTotal) => (parseInt(prevTotal) + 1).toString());
  };

  const handleDecrement = () => {
    setTotal((prevTotal) => (parseInt(prevTotal) - 1).toString());
  };

  const handleTotalChange = (text) => {
    // Add validation here to ensure the input is a valid number
    setTotal(text);
  };

  const handleLogout = () => {
    // Handle logout action here
    console.log("Logout clicked");
  };

  const handleMessage = () => {
    // Handle message action here
    console.log("Message clicked");
  };

  const openTotalModal = () => {
    setTotalModalVisible(true);
  };

  const closeTotalModal = () => {
    setTotalModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.topSection}>
          <Image
            style={styles.profilePicture}
            source={require("../../assets/BG.png")} // Replace with your profile picture source
          />
          <Text style={styles.name}>User's Name</Text>
          <Text style={styles.address}>User's Address</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.messageButton} onPress={handleMessage}>
              <Text style={styles.buttonText}>MESSAGE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.buttonText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.bottomSection}>
          <Image
            style={styles.walletPicture}
            source={require("../../assets/wallet.png")} // Replace with your wallet picture source
          />
          <TouchableOpacity style={styles.totalButton} onPress={openTotalModal}>
            <Text style={styles.totalButtonText}>Total: {total}</Text>
          </TouchableOpacity>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleDecrement}
            >
              <Text style={styles.actionButtonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleIncrement}
            >
              <Text style={styles.actionButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        visible={isTotalModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeTotalModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.totalInput}
              value={total}
              onChangeText={handleTotalChange}
              keyboardType="numeric"
              placeholder="Total"
            />
            <Button title="Done" onPress={closeTotalModal} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74EC8D", // Green background for the entire page
  },
  profileContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  topSection: {
    alignItems: "center",
    borderRadius: 5, // Add border radius for a fancy touch
    padding: 20,
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 10,
  },
  bottomSection: {
    alignItems: "center",
    borderRadius: 20, // Add border radius for a fancy touch
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "white",
    marginTop : 10
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#32325D",
    marginTop: 10,
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#32325D",
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  messageButton: {
    backgroundColor: "#11CDEF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
    
  },
  logoutButton: {
    backgroundColor: "#172B4D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  walletPicture: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,

  },
  actionButtonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: "#1C2942",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 50,

  },
  actionButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  totalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  totalInputContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -10 }], // Adjust translateY as needed to center the input vertically
  },

  container: {
    flex: 1,
    backgroundColor: "#74EC8D", // Green background for the entire page
  },
  scrollView: {
    flexGrow: 1,
  },
  // ... (your existing styles)

  totalButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
  },
  totalButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  totalInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Profile;
