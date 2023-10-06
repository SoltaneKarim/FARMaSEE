import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, StyleSheet, Modal } from 'react-native';

const ProfileComponent = () => {
  const [wallet, setWallet] = useState(0);
  const [amount, setAmount] = useState(0);
  const [password, setPassword] = useState('');
  const [isPasswordDialogVisible, setIsPasswordDialogVisible] = useState(false);
  const [isWalletAlertVisible, setIsWalletAlertVisible] = useState(false);
  const [isWalletInputVisible, setIsWalletInputVisible] = useState(false);
  const [isIncrementing, setIsIncrementing] = useState(true); // State to track if user wants to increment (true) or decrement (false)

  const handleIncrement = () => {
    setIsPasswordDialogVisible(true);
    setIsIncrementing(true); // User wants to increment
  };

  const handleDecrement = () => {
    setIsPasswordDialogVisible(true);
    setIsIncrementing(false); // User wants to decrement
  };

  const handleConfirmPassword = () => {
    if (password === 'yourpassword') { // Replace 'yourpassword' with the actual password
      if (isPasswordDialogVisible) {
        if (amount !== 0) {
          if (isIncrementing) {
            setWallet(wallet + amount);
          } else {
            setWallet(wallet - amount);
          }
          setIsPasswordDialogVisible(false);
          setAmount(0);
          setPassword('');
        } else {
          Alert.alert('Invalid Amount', 'Please enter a valid amount.');
        }
      }
    } else {
      setIsPasswordDialogVisible(false);
      setPassword('');
      Alert.alert('Invalid Password', 'Please enter the correct password.');
    }
  };

  const handleCancelPassword = () => {
    setIsPasswordDialogVisible(false);
    setPassword('');
  };

  // Function to handle the Wallet text click
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

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile/DEFAULT.png')} // Replace with your image source
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Image
        source={require('../../assets/profile/verified-logo.png')} // Replace with your verified logo source
        style={styles.verifiedLogo}
      />
      <Text style={styles.address}>123 Main St, City</Text>
      <View style={styles.logoGrid}>
        {/* Add your logos here */}
        <Image source={require('../../assets/animal6.png')} style={styles.logo} />
        <Image source={require('../../assets/shep4.png')} style={styles.logo} />
        <Image source={require('../../assets/tree.png')} style={styles.logo} />
        {/* Add more logos as needed */}
      </View>
      <View style={styles.walletContainer}>
        <TouchableOpacity onPress={handleWalletTextClick} style={styles.walletInputContainer}>
          <Text style={styles.walletText}>Wallet: {wallet} TND</Text>
        </TouchableOpacity>
      </View>
      {isPasswordDialogVisible && (
        <View style={styles.confirmationContainer}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="Enter Password"
          />
          <TouchableOpacity onPress={handleCancelPassword} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleConfirmPassword} style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Wallet input modal */}
      <Modal
        visible={isWalletInputVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleWalletInputCancel}
      >
        <View style={styles.walletInputModal}>
          <Text style={styles.walletInputLabel}>Enter Amount:</Text>
          <View style={styles.amountContainer}>
            <TouchableOpacity onPress={() => setAmount(amount + 1)} style={styles.amountButton}>
              <Text style={styles.amountButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.amountText}>{amount}</Text>
            <TouchableOpacity onPress={() => setAmount(amount - 1)} style={styles.amountButton}>
              <Text style={styles.amountButtonText}>-</Text>
            </TouchableOpacity>
          </View>
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
    width: 100,
    height: 100,
    borderRadius: 50, // to make it round
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
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
    flexDirection: 'row',
    marginTop: 20,
  },
  logo: {
    width: 50,
    height: 50,
    margin: 5,
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  amountInput: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 100,
    textAlign: 'center',
    fontSize: 18,
  },
  walletButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  walletButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  walletText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  passwordInput: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
    fontSize: 18,
  },
  confirmButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  walletInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  walletText: {
    fontSize: 18,
    fontWeight: 'bold',
  },


  walletInputModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  walletInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
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
  walletInputModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  walletInputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  amountButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  amountButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
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
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  walletButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  walletButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  modalCancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  modalCancelButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalConfirmButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  modalConfirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default ProfileComponent;
