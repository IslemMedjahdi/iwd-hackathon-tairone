import React, { useState } from "react";
import { SectionList, Text, View } from "react-native";
import Card from "./Card";

const DATA = [
  {
    title: "27 mars 2022",
    data: [
      {
        id: 1,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old. I'm a developer :D",
        hour: "PM 10:48",
      },
      {
        id: 2,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old",
        hour: "PM 10:48",
      },
      {
        id: 3,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old",
        hour: "PM 10:48",
      },
    ],
  },
  {
    title: "27 mars 2022",
    data: [
      {
        id: 1,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old",
        hour: "PM 10:48",
      },
      {
        id: 2,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old",
        hour: "PM 10:48",
      },
      {
        id: 3,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old",
        hour: "PM 10:48",
      },
    ],
  },
  {
    title: "27 mars 2025",
    data: [
      {
        id: 1,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old",
        hour: "PM 10:48",
      },
      {
        id: 2,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old",
        hour: "PM 10:48",
      },
      {
        id: 3,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Hello i'm islem medjahdi I'm 19 years Old",
        hour: "PM 10:48",
      },
    ],
  },
];

export default function NotificantionList() {
  const [notifications, setNotifications] = useState(DATA);
  return (
    <SectionList
      style={{ paddingHorizontal: 20 }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      sections={notifications}
      renderItem={({ item }) => <Card {...item} />}
      renderSectionHeader={({ section }) => (
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 15 }}>
            {section.title}
          </Text>
        </View>
      )}
    />
  );
}
