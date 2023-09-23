import React, { useState } from 'react';
import { Button, Image, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'; // Import axios

const cloudName = 'dww70arvk'; // Replace with your Cloud name
const uploadPreset = 'fcqswjeg'; // Replace with your upload preset

const App = ({ changeImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!cancelled) {
      // Upload the image to Cloudinary
      uploadToCloudinary(uri);
    }
  };

  const handleCameraLaunch = async () => {
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!cancelled) {
      // Upload the image to Cloudinary
      uploadToCloudinary(uri);
    }
  };

  const uploadToCloudinary = async (uri) => {
    try {
      const data = new FormData();
      data.append('file', { uri, type: 'image/jpeg', name: 'image.jpg' });
      data.append('upload_preset', uploadPreset);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        // Image uploaded successfully
        const cloudinaryUrl = response.data.secure_url;
        setSelectedImage(cloudinaryUrl);
        console.log(cloudinaryUrl);
        changeImage(cloudinaryUrl);
      } 
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      )}
      <TouchableOpacity
        style={styles.customButton}
        onPress={openImagePicker}
      >
        <Text style={styles.buttonText}>Choose from Device</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.customButton}
        onPress={handleCameraLaunch}
      >
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  customButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8, // Reduced padding
    paddingHorizontal: 12, // Reduced padding
    marginTop: 10,
  },
  buttonText: {
    color: 'black', // You can set the text color as per your preference
    fontSize: 18,
    fontFamily: 'Sans-serif', // Replace 'YourFontFamily' with the actual font family
    fontWeight: '900', // You can adjust the font weight as needed
    textAlign: 'center',
  },
});

export default App;
// .result.classification.suggestions[0]