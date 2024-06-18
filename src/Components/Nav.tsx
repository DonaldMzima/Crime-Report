import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import ReportForm from "./IncidentReportForm";
import CameraFile from "./CameraFile";
import CapturedImages from "./CapturedImages";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const AppRoot = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "HomePage":
              iconName = focused ? "home" : "home-outline";
              break;
            case "ReportForm":
              iconName = focused ? "document" : "document-outline";
              break;
            case "CameraFile":
              iconName = focused ? "camera" : "camera-outline";
              break;
            case "CapturedImages":
              iconName = focused ? "images" : "images-outline";
              break;
            default:
              iconName = "help-circle";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="ReportForm" component={ReportForm} />
      <Tab.Screen name="CameraFile" component={CameraFile} />
      <Tab.Screen name="CapturedImages" component={CapturedImages} />
    </Tab.Navigator>
  );
};
