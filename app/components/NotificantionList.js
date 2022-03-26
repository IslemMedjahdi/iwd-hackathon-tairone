import React, { useState } from "react";
import { SectionList, Text, View } from "react-native";
import Card from "./Card";

const DATA = [
  {
    title: "26 mars 2022",
    data: [
      {
        id: 1,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Vous semblez triste, est-il le cas?",
        hour: "12:48",
      },
      {
        id: 2,
        name: "Machine à laver",
        icon: require("../../assets/wash.png"),
        desc: "Opération achevée!",
        hour: "9:45",
      },
      {
        id: 3,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Recommandations de series télé ",
        hour: "7:10",
      },
    ],
  },
  {
    title: "25 mars 2022",
    data: [
      {
        id: 4,
        name: "Machine à laver",
        icon: require("../../assets/wash.png"),
        desc: "Opération achevée!",
        hour: "8:45",
      },
      {
        id: 5,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Recommandations de series télé",
        hour: "7:48",
      },
      {
        id: 6,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Vous semblez heureux, pouvez-vous le confirmer? :D",
        hour: "7:40",
      },
    ],
  },
  {
    title: "23 mars 2022",
    data: [
      {
        id: 7,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Vous semblez triste, est-il le cas?",
        hour: "10:48",
      },
      {
        id: 8,
        name: "Machine à laver",
        icon: require("../../assets/wash.png"),
        desc: "Opération achevée!",
        hour: "9:45",
      },
      {
        id: 9,
        name: "Téléviseur",
        icon: require("../../assets/tv.png"),
        desc: "Recommandations de series télé ",
        hour: "7:10",
      },
    ],
  },
];

export default function NotificantionList({navigation}) {
  const [notifications, setNotifications] = useState(DATA);
  return (
    <SectionList
      style={{ paddingHorizontal: 20 }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      sections={notifications}
      renderItem={({ item,index }) => <Card navigation={navigation} {...item}  />}
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
