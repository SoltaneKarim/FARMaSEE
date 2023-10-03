import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const UserList = ({ onSelectUser, Currentuser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    // Make an Axios GET request to fetch user data
    axios.get('http://192.168.100.45:5000/user')
      .then(response => {
        // Filter out the Currentuser from the response data
        const filteredUsers = response.data.filter(user => user.id !== Currentuser.id);
        setUsers(filteredUsers);
        console.log(filteredUsers);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [Currentuser]); // Add Currentuser as a dependency to refresh when it changes

  // Define a renderItem function for the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.userContainer,
        selectedUserId === item.id && styles.selectedUser, // Highlight the selected user
      ]}
      onPress={() => {
        setSelectedUserId(item.id); // Set the selected user
        onSelectUser(item); // Pass the selected user to the parent component
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
      <Text style={styles.userName}>{item.fullName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal // Make the FlatList horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Make the container display horizontally
    backgroundColor: '#f2f2f2', // Greyish background color
    padding: 8, // Add some padding to make it visually appealing
  },
  userContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 200,
    borderWidth: 1, // Add a border to user containers
    borderColor: '#ccc', // Border color
    borderRadius: 8, // Border radius
    marginRight: 8, // Add some spacing between users
  },
  selectedUser: {
    backgroundColor: '#e0e0e0', // Background color for selected user
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Make the image round
    marginBottom: 8, // Add spacing between image and name
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserList;
