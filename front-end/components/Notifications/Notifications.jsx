import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Axios from "axios";
import { useNavigation } from "@react-navigation/native";
import moment from "moment-timezone";
import { useSelector } from "react-redux";

const IPhone13ProMax5 = () => {
	const user = useSelector((state) => state.user);
	console.log("tjis", user.id);
	const navigation = useNavigation();
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		// Make an Axios GET request to fetch group data
		Axios.get(`http://192.168.1.20:5000/group/one/${user.id}`)
			.then((response) => {
				setGroups(response.data.data);
			})
			.catch((error) => {
				console.error("Error fetching group data:", error);
			});
	}, []);

	const calculateTimeDifference = (eatingTime) => {
		// Convert the eatingTime string to a moment object in the correct timezone
		const eatingMoment = moment.tz(eatingTime, "HH:mm", "Paris");

		// Get the current time in the same timezone
		const currentTime = moment().tz("Paris");

		// If the eatingTime is in the past, add one day to it to classify it as tomorrow
		if (eatingMoment.isBefore(currentTime)) {
			eatingMoment.add(1, "day");
		}

		// Calculate the time difference
		const timeDifference = eatingMoment.diff(currentTime, "milliseconds");
		console.log("Time difference:", timeDifference);

		return timeDifference;
	};

	const getColorAndImage = (timeDifference) => {
		if (timeDifference < 30 * 60 * 1000) {
			return {
				backgroundColor: "red",
				image: require("../../assets/IrrigationSystem.png"),
			};
		} else if (timeDifference < 2 * 60 * 60 * 1000) {
			return {
				backgroundColor: "orange",
				image: require("../../assets/WateringCan.png"),
			};
		} else {
			return {
				backgroundColor: "#26575a",
				image: require("../../assets/Sprout.png"),
			};
		}
	};

	// Sort the groups based on the color categories
	const sortedGroups = [...groups].sort((a, b) => {
		const colorA = getColorAndImage(
			calculateTimeDifference(a.eatingTime),
		).backgroundColor;
		const colorB = getColorAndImage(
			calculateTimeDifference(b.eatingTime),
		).backgroundColor;

		// Order: Red, Orange, Green
		if (colorA === "red" && colorB === "orange") return -1;
		if (colorA === "orange" && colorB === "red") return 1;
		if (colorA === "red" && colorB === "green") return -1;
		if (colorA === "green" && colorB === "red") return 1;
		if (colorA === "orange" && colorB === "green") return -1;
		if (colorA === "green" && colorB === "orange") return 1;

		return 0;
	});

	return (
		<View style={styles.container}>
		{sortedGroups.map((group) => {
  const timeDifference = calculateTimeDifference(group.eatingTime);
  const { backgroundColor, image } = getColorAndImage(timeDifference);

  const hoursLeft = Math.floor(timeDifference / (60 * 60 * 1000));
  const minutesLeft = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));

  const containerStyle = timeDifference < 0 ? styles.groupContainerFullWidth : styles.groupContainer;

  return (
    <View key={group.id} style={[containerStyle, { backgroundColor }]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.message}>
        {timeDifference < 0
          ? `Scheduled for tomorrow, ${-hoursLeft} hours and ${-minutesLeft} minutes ago for ${group.name}`
          : `Still have ${hoursLeft} hours and ${minutesLeft} minutes left for watering/feeding the ${group.name}`}
      </Text>
    </View>
  );
})}

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop:40
	},
	groupContainer: {
		width: "90%", // Set a fixed width that suits your design
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    margin: 8,
	paddingVertical:20,
    borderRadius: 15,
  	},
    image: {
      width: 50,
      height: 50,
      marginRight: 16,
    },
  message: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    flex:1
  },
});

export default IPhone13ProMax5;
