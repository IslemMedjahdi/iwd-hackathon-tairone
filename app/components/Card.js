import React from "react";
import { Text, View, Image, Pressable } from "react-native";

export default function Card({ name, desc, icon, hour, navigation }) {
  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#B7B7B750",
          borderRadius: 15,
          marginVertical: 7,
          overflow: "hidden",
        }}
      >
        <Pressable
          android_ripple={{ color: "#A6173740" }}
          style={{ padding: 15 }}
          onPress={() => navigation.push("Chat")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image style={{ marginRight: 10 }} source={icon} />
              <Text
                style={{ fontWeight: "bold", color: "#484848", fontSize: 16 }}
              >
                {name}
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", color: "#ADADAD" }}
              >
                {hour}
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "#565656", fontSize: 17 }}>{desc}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
