import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Filter() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          borderColor: "#4AA8BB",
          borderWidth: 2,
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <Pressable
          style={{
            paddingVertical: 4,
            paddingHorizontal: 35,
          }}
          android_ripple={{ color: "#4AA8BB" }}
        >
          <Text style={{ color: "#4AA8BB", fontSize: 16, fontWeight: "bold" }}>
            Tout
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 20,
        }}
      >
        <Pressable
          style={{
            paddingVertical: 4,
            paddingHorizontal: 35,
          }}
          android_ripple={{ color: "#9D9D9D40" }}
        >
          <Text style={{ fontSize: 16, color: "#9D9D9D" }}>Produit</Text>
        </Pressable>
      </View>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 20,
        }}
      >
        <Pressable
          style={{
            paddingVertical: 4,
            paddingHorizontal: 35,
          }}
          android_ripple={{ color: "#9D9D9D40" }}
        >
          <Text style={{ fontSize: 16, color: "#9D9D9D" }}>Service</Text>
        </Pressable>
      </View>
    </View>
  );
}
