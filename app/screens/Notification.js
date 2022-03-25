import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Filter from "../components/Filter";
import Header from "../components/Header";
import NotificantionList from "../components/NotificantionList";

export default function Notification() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <Header />
        <View style={{ padding: 20 }}>
          <Filter />
        </View>
        <NotificantionList />
      </View>
    </SafeAreaView>
  );
}
