import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "#00000020",
        borderBottomWidth: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          android_ripple={{ color: "#00000020", borderless: true, radius: 25 }}
          style={{ marginRight: 20 }}
        >
          <Image source={require("../../assets/back.png")} />
        </Pressable>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Notification</Text>
      </View>
      <Pressable
        android_ripple={{ color: "#00000020", borderless: true, radius: 25 }}
      >
        <Image source={require("../../assets/search.png")} />
      </Pressable>
    </View>
  );
}
