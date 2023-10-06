import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const ProfileComponent = () => {
  const [wallet, setWallet] = useState('0'); // Use a string for TextInput value
  const [isWalletInputVisible, setIsWalletInputVisible] = useState(false);
  const walletInputRef = useRef(null); // Reference to the TextInput

  const handleWalletTextClick = () => {
    setIsWalletInputVisible(true);
  };

  const handleWalletInputCancel = () => {
    setIsWalletInputVisible(false);
  };

  const handleWalletInputConfirm = () => {
    setIsWalletInputVisible(false);
    // You can add logic here to handle the input value
  };

  useEffect(() => {
    if (isWalletInputVisible) {
      // Focus on the TextInput when the modal is displayed
      walletInputRef.current.focus();
    }
  }, [isWalletInputVisible]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile/DEFAULT.png')} // Replace with your image source
        style={styles.profileImage}
      />
      <Image
        source={require('../../assets/profile/verified-logo.png')} // Replace with your verified logo source
        style={styles.verifiedLogo}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.address}>123 Main St, City</Text>
      <View style={styles.logoGrid}>
        {/* Add your logos here */}
        <Image source={require('../../assets/animal6.png')} style={styles.logo} />
        <Image source={require('../../assets/shep4.png')} style={styles.logo} />
        <Image source={require('../../assets/tree.png')} style={styles.logo} />
        {/* Add more logos as needed */}
      </View>
      <TouchableOpacity onPress={handleWalletTextClick} style={styles.walletInputContainer}>
        <Text style={styles.walletText}>Wallet: {wallet} TND</Text>
      </TouchableOpacity>

      {/* Wallet input modal */}
      <Modal
        visible={isWalletInputVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleWalletInputCancel}
      >
        <View style={styles.walletInputModal}>
          <Text style={styles.walletInputLabel}>Enter Amount:</Text>
          {/* Add autoFocus prop to TextInput */}
          <TextInput
            ref={walletInputRef}
            style={styles.walletInput}
            onChangeText={(text) => setWallet(text)}
            value={wallet}
            keyboardType="numeric" // Use numeric keyboard for numbers
          />
          <TouchableOpacity onPress={handleWalletInputCancel} style={styles.walletInputCancelButton}>
            <Text style={styles.walletInputCancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWalletInputConfirm} style={styles.walletInputConfirmButton}>
            <Text style={styles.walletInputConfirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 50, 
    top:40
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 15,
    top:5
  },
  logoGrid: {
    flexDirection: 'row', 

  },
  logo: {
    width: 70,
    height: 70,
    top:25,
    
  },
  walletInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletText: {
    fontSize: 30,
    fontWeight: 'bold',
    top:50
  },
  walletInputModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray', // Change the background color to gray
  },
  walletInputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  walletInputCancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  walletInputCancelButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  walletInputConfirmButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  walletInputConfirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  verifiedLogo: {
    width: 20,
    height: 20,
    top:25,
    left:80
  },
  
});

export default ProfileComponent;
