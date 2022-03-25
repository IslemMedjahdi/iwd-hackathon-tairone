import React from 'react'
import { View, Image, Text, ScrollView,Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Action from '../components/Action'
export default function Suggestions({navigation}) {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "white", height: "100%" }}>
                <View style={{ flexDirection: "row", padding: 20, alignItems: "center", borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                <Pressable hitSlop={{bottom: 10,left:10,right: 10,top: 10}} android_ripple={{ color: "#00000020", borderless: true, radius: 25 }}
            style={{ marginHorizontal: 15 }} onPress={() => navigation.pop()} >
            <Image source={require("../../assets/arrow.png")} />
          </Pressable>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Suggestions</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 26, color: "#3F414E", marginBottom: 12 }}>Nous vous suggérons</Text>
                    <Text style={{ color: "#3F414E", fontSize: 22, marginBottom: 12 }}>les solutions suivantes</Text>
                    <Text style={{ color: "#A1A4B2", fontSize: 18, fontWeight: '100', marginBottom: 0 }}>Choisir une action: </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, paddingBottom: 20, }}>
                    <Action textColor={"#4E5567"} desc={"Hello i'm islem medjahdi, I'm a 2nd year student at ESI algiers, lorem ipsum blabla"} name={"Divertissement"} color={"#FFCF86"} image={require("../../assets/Frame.png")} />
                    <Action textColor={"white"} desc={"Hello i'm islem medjahdi, I'm a 2nd year student at ESI algiers, lorem ipsum blabla"} name={"Meditier"} color={"#AEB4FC"} image={require("../../assets/Frame3.png")} />
                    <Action textColor={"white"} desc={"Hello i'm islem medjahdi, I'm a 2nd year student at ESI algiers, lorem ipsum blabla"} name={"Bouger"} color={"#A2E0C1"} image={require("../../assets/Frame2.png")} />
                    <Action textColor={"white"} desc={"Hello i'm islem medjahdi, I'm a 2nd year student at ESI algiers, lorem ipsum blabla"} name={"Reposer"} color={"#4E5567"} image={require("../../assets/Frame1.png")} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
