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
          borderColor: "#A61737",
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
          android_ripple={{ color: "#A61737" }}
        >
          <Text style={{ color: "#A61737", fontSize: 16, fontWeight: "bold" }}>
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
