import * as React from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

function BackButton() {
  const navigation = useNavigation();

  return (
    <Button
      icon={<Icon name="arrow-back" size={15} color="white" />}
      title="Back"
      onPress={() => {
        //Library type issues
        //@ts-ignore
        navigation.navigate("CameraFile");
      }}
    />
  );
}

export default BackButton;
