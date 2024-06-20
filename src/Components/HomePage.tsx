import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const HomePage = () => {
  const navigation = useNavigation();

  const handleReportPress = () => {
    //@ts-ignore
    navigation.navigate("CameraFile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crime Reporting App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleReportPress()}
      >
        <Text style={styles.buttonText}>Report Crime</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomePage;
