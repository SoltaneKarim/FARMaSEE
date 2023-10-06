import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const UserList = ({ onSelectUser, Currentuser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const agricultureSpecialities = [
    "Crop Science",
    "Horticulture",
    "Agronomy",
    "Soil Science",
    "Plant Breeding",
    "Genetic Engineering",
    "Agricultural Economics",
    "Agribusiness Management",
    "Animal Science",
    "Livestock Management",
    "Poultry Science",
    "Veterinary Medicine",
    "Aquaculture",
    "Forestry",
    "Agricultural Engineering",
    "Precision Agriculture",
    "Food Science",
    "Agroecology",
    "Organic Farming",
    "Sustainable Agriculture",
    "Agricultural Education",
    "Rural Development",
    "Agri-Tourism",
    "Farm Management",
    "Agricultural Extension",
  ];

  const getRandomOccupation = () => {
    const randomIndex = Math.floor(Math.random() * agricultureSpecialities.length);
    return agricultureSpecialities[randomIndex];
  };
  
  useEffect(() => {
    // Make an Axios GET request to fetch user data
    axios.get('http://192.168.1.19:5000/user')
      .then(response => {
        // Filter out the Currentuser from the response data
        const filteredUsers = response.data.filter(user => user.id !== Currentuser.id);
        // Assign a random occupation to each user
        const usersWithOccupation = filteredUsers.map(user => ({
          ...user,
          occupation: getRandomOccupation(),
        }));
        setUsers(usersWithOccupation);
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
    <View style={styles.userInfoContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item.fullName}</Text>
        <Text style={styles.occupation}>{item.occupation}</Text>
      </View>
    </View>
  </TouchableOpacity>
);



  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer:{
    marginLeft:10,
    justifyContent: 'center'
  },
  userInfoContainer:{
  flexDirection: 'row',
  },
  container: {
    flexDirection: 'row', // Make the container display horizontally
    backgroundColor: '#f2f2f2', // Greyish background color
    padding: 8, // Add some padding to make it visually appealing
  },
  userContainer: {
    // alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    // height: 200,

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
  occupation: {
    fontSize: 14,
    color: '#333', // Dark text color for occupation
  },
});

export default UserList;
