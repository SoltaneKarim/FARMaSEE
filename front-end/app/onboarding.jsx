import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Video } from "expo-av";
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router"; // Import the useRouter hook

const OnboardingWithVideo = () => {
  const videoRef = useRef(null);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const loadVideo = async (videoSource) => {
      try {
        await videoRef.current.loadAsync(videoSource);
        await videoRef.current.playAsync();
        videoRef.current.setIsLoopingAsync(true);
      } catch (error) {
        console.error("Error loading or playing the video:", error);
      }
    };

    // Load the first video when the component mounts
    loadVideo(require("../assets/Mp4/1.mp4"));
  }, [videoRef]);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const handleOnFinish = () => {
    // Navigate to the "Login" page after finishing the onboarding
    router.push("/Login");
  };

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          imageContainerStyles: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          image: (
            <View
              style={[
                styles.circularVideoContainer,
                { width: windowWidth * 0.8 },
              ]}
            >
              <Video
                ref={videoRef}
                style={styles.video}
                source={require("../assets/Mp4/1.mp4")}
                useNativeControls={false}
                resizeMode="cover"
              />
            </View>
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          imageContainerStyles: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          image: (
            <View
              style={[
                styles.circularVideoContainer,
                { width: windowWidth * 0.8 },
              ]}
            >
              <Video
                ref={videoRef}
                style={styles.video}
                source={require("../assets/Mp4/2.mp4")}
                useNativeControls={false}
                resizeMode="cover"
              />
            </View>
          ),
          title: "Second Page",
          subtitle: "This is the second page with a different video",
        },
        // Add more pages as needed
      ]}
      bottomBarColor="#fff"
      controlStatusBar={false}
      containerStyles={styles.onboardingContainer}
      skipLabel={
        <Text style={[styles.onboardingText, styles.smallButton]}>Skip</Text>
      }
      nextLabel={
        <Text style={[styles.onboardingText, styles.smallButton]}>Next</Text>
      }
      onDone={handleOnFinish} // Call handleOnFinish when onboarding is done
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circularVideoContainer: {
    aspectRatio: 1,
    borderRadius: Dimensions.get("window").width * 0.4, // Half of the width to create a circle
    overflow: "hidden",
  },
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  onboardingContainer: {
    paddingBottom: Dimensions.get("window").height * 0.05, // Adjust the bottom padding for the controls
  },
  onboardingText: {
    fontSize: 18,
    color: "#555",
  },
  smallButton: {
    width: 50, // Adjust as needed for the button width
  },
});

export default OnboardingWithVideo;