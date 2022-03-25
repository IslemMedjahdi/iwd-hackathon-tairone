import React, { useEffect, useState } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { StyleSheet, FlatList, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore/lite";
import { Button } from "react-native";



export default function Chat({ navigation }) {
  const [messageList, setMessageList] = useState([]);

  const [lastServerMessage, setLastServerMessage] = useState("");
  const [currentServerMessage, currentLastServerMessage] = useState("");
  //const [data,setData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [firstTime, setFirstTime] = useState(true);

  const [route, setRoute] = useState(0);


  // const getData = async () => {
  //   const messages = collection(db, 'Messages');
  //   const messageSnapshot = await getDocs(messages);
  //   const messageList = messageSnapshot.docs.map(doc => doc.data());
  //   setMessageList(messageList)
  // }

  const [Suggestions, setSuggestions] = useState([])


  useEffect(() => {
    const lastMsgIndex = messageList.length
    if (messageList.length > 0) {
      if (messageList[lastMsgIndex - 1].isHost) {
        setShowSuggestions(false)
      } else {
        setShowSuggestions(true)
        if (messageList.length == 1) {
          setSuggestions([
            { text: "Oui", fct: () => { setRoute(1); setMessageList(messageList => [...messageList, { content: "Oui", isHost: true }, { content: "Quel est la cause de votre tristesse?", isHost: false }]) } },
            { text: "Non", fct: () => { setRoute(2); setMessageList(messageList => [...messageList, { content: "Non", isHost: true }, { content: "OK", isHost: false }]) } },
            { text: "Je prefère ne pas répondre", fct: () => { setRoute(3); setMessageList(messageList => [...messageList, { content: "Peut-être", isHost: true }]) } }])
        }
        if (route == 1) {
          setSuggestions([
            { text: "Problèmes Familials", fct: () => { setRoute(4); setMessageList(messageList => [...messageList, { content: "Problèmes Familials", isHost: true }, { content: "Soyez confiant que votre situation va s'améliorer, ce n'est qu'une courte periode dans votre vie.", isHost: false }]) } },
            { text: "Je suis sous pression", fct: () => { setRoute(5); setMessageList(messageList => [...messageList, { content: "Je suis sous pression", isHost: true }, { content: "OK", isHost: false }]) } },
            { text: "J'ai perdu un être cher", fct: () => { setRoute(6); setMessageList(messageList => [...messageList, { content: "Peut-être", isHost: true }]) } },
            { text: "Je prefère ne pas répondre", fct: () => { setRoute(6); setMessageList(messageList => [...messageList, { content: "Peut-être", isHost: true }]) } }])
          }

          if (route == 2) {
              setMessageList(messageList => [...messageList, { content: "C'est noté, passez une bonne journée", isHost: false }])
              setSuggestions([])
            }

        if (route == 4 || route == 5 || route == 6) {
          setMessageList(messageList => [...messageList, { content: "LG vous propose d'accèder au coach de vie", isHost: false }]);
          setSuggestions([
            { text: "Accéder au coach de vie", fct: () => { navigation.push("Suggetions");setRoute(7) } },
          ])
        }


      }
    }
  }, [route])
  // useEffect(() => {
  //   setInterval(() => {
  //     getData();
  //   }, 10000)
  // }, [])

  if (firstTime) {
    messageList.push({ content: "Vous semblez triste, est-il le cas?", isHost: false })
    setFirstTime(false)
  }


  return (

    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //   <Text>Hey</Text>
    //   </ScrollView>
    // </SafeAreaView>
    // <SafeAreaView>
    //   <ScrollView>
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "white" }}>

        <View style={{ height: 7 * Dimensions.get("window").height / 100, flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#d9d9d9" }}>
          <Pressable hitSlop={{bottom: 10,left:10,right: 10,top: 10}} android_ripple={{ color: "#00000020", borderless: true, radius: 25 }}
            style={{ marginHorizontal: 15 }} onPress={() => navigation.pop()} >
            <Image source={require("../../assets/arrow.png")} />
          </Pressable>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Coach de Bien-être</Text>
        </View>
        <View style={{ padding: 10, height: 83 * Dimensions.get("window").height / 100 }}>
          <FlatList showsVerticalScrollIndicator={false} keyExtractor={(_, index) => index} data={messageList} renderItem={({ item }) => <View style={{ maxWidth: "80%", marginTop: 12, borderRadius: 20,borderColor: "#A61737",borderWidth: 1,borderTopRightRadius: item.isHost ? 0 : 20,borderTopLeftRadius: item.isHost ? 20 : 0,  backgroundColor: item.isHost ? "white" : "#A61737", alignSelf: item.isHost ? "flex-end" : "flex-start" }}>
            <Pressable style={{ padding: 12 }} >
              <Text style={{ color: item.isHost ? "#A61737": "white", fontSize: 15 }}>{item.content}</Text>
            </Pressable>
          </View>} />
        </View>
        <View style={{ paddingHorizontal: 10, height: 10 * Dimensions.get("window").height / 100, alignItems: "center" }}>
          {
            showSuggestions && <FlatList horizontal keyExtractor={(_, index) => index} data={Suggestions} renderItem={
              ({ item }) => <View style={{ minWidth: 100, marginRight: 10, borderRadius: 20, overflow: "hidden", backgroundColor: "#A61737", height: "50%" }}><Pressable  android_ripple={{ color: "#3F414E50" }} style={{ padding: 5, alignItems: "center", justifyContent: "center", height: "100%" }} onPress={item.fct}><Text style={{ color: "white", fontWeight: "bold" }}>{item.text}</Text></Pressable></View>
            } />
          }
        </View>
      </View>
    </SafeAreaView>
  );
}
