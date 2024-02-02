import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="index" options={{ title: "home", tabBarIcon: () => <AntDesign name="home" size={24} color="grey" /> }} />
      <Tabs.Screen name="calendar" options={{ tabBarIcon: () => <AntDesign name="calendar" size={24} color="grey"/> }} />
      <Tabs.Screen name="mylist" options={{ tabBarIcon: () => <AntDesign name="profile" size={24} color="grey"/> }}/>
      <Tabs.Screen name="download" options={{ tabBarIcon: () => <AntDesign name="download" size={24} color="grey"/> }}/>
      <Tabs.Screen name="profile" options={{ tabBarIcon: () => <AntDesign name="customerservice" size={24} color="grey"/> }}/>
    </Tabs>
  );
}
