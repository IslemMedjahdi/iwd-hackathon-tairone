import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";

import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore/lite";



export default function Chat() {
  const [messageList,setMessageList] = useState([]);
  
  const [lastServerMessage, setLastServerMessage] = useState("");
  const [currentServerMessage, currentLastServerMessage] = useState("");
    //const [data,setData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  

    const getData = async () => {
      const messages = collection(db,'Messages');
      const messageSnapshot = await getDocs(messages);
      
      

      const messageList = messageSnapshot.docs.map(doc => doc.data());
      setMessageList(messageList)
    }
    
    useEffect(() =>{
        const lastMsgIndex = messageList.length
        if (messageList.length>0){
        if (messageList[lastMsgIndex-1].isHost){
          setShowSuggestions(false)
        }else{
          setShowSuggestions(true)
        }
      }
    },[messageList])
    
  
    getData()
    console.log(messageList)


  
  return (
    
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //   <Text>Hey</Text>
    //   </ScrollView>
    // </SafeAreaView>
    // <SafeAreaView>
    //   <ScrollView>
    <View style={styles.container}>

    <View>
      {messageList.map((item,index) => { return <Text style={{
        alignSelf: item.isHost ? "flex-end" : "flex-start"
      }} key={index}>{item.content}</Text>})}
    </View>
    <View>
      {
        showSuggestions && 
        <Text>Suggestions</Text>
      }
    </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      display : "flex",
      justifyContent: "flex-end",
      height: "100%"
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    content: {
      fontSize: 32,
    },

  });