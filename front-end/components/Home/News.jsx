import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const NewsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(
        "https://newsapi.org/v2/everything?q=agriculture+and+tunisia&apiKey=f0630ecaf33b48259ccd954df94c5e2c"
      )
      .then((response) => {
        // Filter out items that don't have a title, picture (urlToImage), author, and publishedAt
        const filteredData = response.data.articles.filter(
          (item) =>
            item.title &&
            item.urlToImage &&
            item.author &&
            item.publishedAt
        );
        setData(filteredData);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the data is loaded (success or error)
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          margin: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#93ac99",
        }}
      >
        <Image
          source={{ uri: item.urlToImage }}
          style={{
            width: "100%",
            height: 150,
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
          }}
        />
        <Text style={{ padding: 10 , fontWeight:700, color:"#104242"}}>
          {item.title.length > 23 ? item.title.substr(0, 30) + "..." : item.title}
        </Text>
        <Text style={{ padding: 10, color: "gray" }}>
          {item.author.length > 23 ? item.author.substr(0, 23) + "..." : item.author}
        </Text>
        <Text style={{ padding: 10, color: "gray" }}>
          Published At: {formatPublishedDate(item.publishedAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const formatPublishedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2", paddingVertical:25 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#113f41",marginLeft: 10 }}>
        See what's new
      </Text>
      <Text style={{ fontSize: 16, color: "gray" ,marginLeft: 10}}>
        Concerns Tunisia overall
        <Text style={{ fontSize: 30 }}>↴</Text>
      </Text>

      {loading ? ( // Display the activity indicator while loading
        <ActivityIndicator size="large" color="black" style={{ marginTop: 20 }} />
      ) : (
        // Display the FlatList when data is loaded
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          horizontal={true}
        />
      )}
    </View>
  );
};

export default NewsList;
