import { Text, View } from "react-native";
import Constants from "expo-constants";
import { Slot, Stack } from "expo-router";
import { DarkTheme } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="(tabs)"/>
      </Stack>
    </View>
  );
}
