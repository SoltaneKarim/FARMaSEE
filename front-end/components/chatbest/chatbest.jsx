import React, { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
	Button,
	ScrollView,
} from "react-native";
import Thelist from "./thelist";
import { useSelector } from "react-redux";
import axios from "axios";

const ChatBest = () => {
	const [selectedUser, setSelectedUser] = useState(null);
	const [message, setMessage] = useState("");
	// const [chatMessages, setChatMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const Currentuser = useSelector((state) => state.user);
	const messagesEndRef = useRef(null);
	const [allMessages, setAllMessages] = useState([]);

	// useEffect(() => {
	//   messagesEndRef.current?.scrollToEnd({ animated: true });
	// }, [chatMessages]);

	const startConversation = (user) => {
		setSelectedUser(user);
	};

	const sendMessage = async () => {
		if (message.trim() !== "") {
			const newMessage = { text: message, usercontacted: Currentuser.id };
			// setChatMessages([...chatMessages, { ...newMessage, isLoading: true }]);

			// setIsLoading(true);

			try {
				const response = await axios.put(
					`http://192.168.1.4:5000/chat/users/update/${selectedUser.fullName}`,
					newMessage,
				);
				console.log("Message sent and user updated:", response.data);

				setIsLoading(false);
				setMessage("");
			} catch (error) {
				console.error("Error sending message:", error);
				setIsLoading(false);
			}
		}
	};

	const [isent, setIsent] = useState([]);
	const [hesent, setHesent] = useState([]);

	const fetchMessages = async () => {
		try {
			// Fetch messages sent by the selected user (you to them)
			const selectedUserMessagesResponse = await axios.get(
				`http://192.168.1.4:5000/chat/users/user/${selectedUser.fullName}`,
				{
					params: { usercontacted: Currentuser.id },
				},
			);

			const selectedUserMessages = selectedUserMessagesResponse.data.messages;

			// Fetch messages sent by you (selected user to you)
			const currentUserMessagesResponse = await axios.get(
				`http://192.168.1.4:5000/chat/users/user/${Currentuser.fullName}`,
				{
					params: { usercontacted: selectedUser.id },
				},
			);

			const currentUserMessages = currentUserMessagesResponse.data.messages;

			// Manually combine and sort messages by date
			const combinedMessages = [];
			let i = 0;
			let j = 0;

			while (
				i < currentUserMessages.length ||
				j < selectedUserMessages.length
			) {
				if (
					i < currentUserMessages.length &&
					(j >= selectedUserMessages.length ||
						currentUserMessages[i].date <= selectedUserMessages[j].date)
				) {
					combinedMessages.push(currentUserMessages[i]);
					i++;
				} else {
					combinedMessages.push(selectedUserMessages[j]);
					j++;
				}
			}

			setIsent(currentUserMessages); // Messages sent by you
			setHesent(selectedUserMessages); // Messages sent by selected user

			// Store the sorted messages in allMessages
			setAllMessages(combinedMessages);
		} catch (error) {
			console.error("Error fetching messages:", error);
		}
	};

	useEffect(() => {
		let intervalId; // Declare the intervalId variable

		const startPolling = () => {
			fetchMessages(); // Initial fetch when the component mounts

			intervalId = setInterval(() => {
				fetchMessages(); // Fetch messages periodically
			}, 5000); // Adjust the interval duration as needed (e.g., fetch every 5 seconds)
		};

		if (selectedUser) {
			startPolling(); // Start polling when selectedUser is set
		}

		return () => {
			clearInterval(intervalId); // Clear the interval when the component unmounts
		};
	}, [selectedUser]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.userList}>
				<Text style={styles.header}>Select a User to Start a Conversation</Text>
				<Thelist onSelectUser={startConversation} Currentuser={Currentuser} />
			</View>

			{selectedUser && (
				<View style={styles.chatContainer}>
					<Text style={styles.selectedUserName}>{selectedUser.fullName}</Text>
					<ScrollView
						style={styles.messagesContainer}
						ref={messagesEndRef}
						onContentSizeChange={() =>
							messagesEndRef.current?.scrollToEnd({ animated: true })
						}>
						{allMessages
  .filter(
    (message) =>
      message.usercontacted === Currentuser.id ||
      message.usercontacted === selectedUser.id
  )
  .map((message, index) => (
    <View
      key={index}
      style={[
        styles.message,
        message.usercontacted === Currentuser.id
          ? styles.rightMessage
          : styles.leftMessage,
        {
          // Add alignSelf property to align left messages to the left
          alignSelf: message.usercontacted !== Currentuser.id ? "flex-start" : "flex-end",
        },
      ]}
    >
      <Text>{message.text}</Text>
    </View>
  ))}
					</ScrollView>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder="Type your message..."
							value={message}
							onChangeText={(text) => setMessage(text)}
						/>
						<Button title="Send" onPress={sendMessage} />
					</View>
				</View>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	userList: {
		flex: 1,
		padding: 16,
	},
	header: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	chatContainer: {
		flex: 2,
		backgroundColor: "#f5f5f5",
		padding: 16,
	},
	selectedUserName: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 10,
	},
	messagesContainer: {
		flex: 1,
	},
	message: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 8,
		marginVertical: 5,
		maxWidth: "80%",
	},
	leftMessage: {
		// alignSelf: "flex-end",
	},
	rightMessage: {
		alignSelf: "flex-end",
		marginRight: 10,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	input: {
		flex: 1,
		backgroundColor: "white",
		marginRight: 10,
		borderRadius: 8,
		padding: 10,
	},
});

export default ChatBest;
