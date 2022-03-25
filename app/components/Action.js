import { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native'

export default function Action({ image, name, color, desc, textColor }) {
    const [open, setOpen] = useState(false);
    return (
        <Pressable  style={{ marginBottom: 20 }}>
            <Pressable onPress={() => setOpen(!open)} style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15, borderBottomRightRadius: open ? 0 : 15, borderBottomLeftRadius: open ? 0 : 15, overflow: "hidden", backgroundColor: color + "90" }}>
                <Pressable android_ripple={{ color: color }} style={{ padding: 20, justifyContent: "space-between", alignItems: "center", flexDirection: "row", }}>
                    <Image source={image} />
                    <Text style={{ color: textColor, fontSize: 20, fontWeight: "bold" }}>{name}</Text>
                    <Pressable   android_ripple={{ color: "#00000020", borderless: true, radius: 25 }}>
                        <Image style={{ transform: [{ rotate: open ? "180deg" : "0deg" }] }} source={require("../../assets/chevron.png")} />
                    </Pressable>
                </Pressable>
            </Pressable>
            {
                open &&
                <View style={{ backgroundColor: color + "90", padding: 20, borderBottomRightRadius: 15, alignItems: "flex-end", borderBottomLeftRadius: 15 }}>
                    <Text style={{ color: textColor }}>{desc}</Text>
                    <View style={{overflow: "hidden",marginTop: 15,borderRadius: 15,}}>
                        <Pressable android_ripple={{color: "#3F414E" }} style={{   alignItems: "center", flexDirection: "row", backgroundColor: "#4E5567", paddingHorizontal: 15, paddingVertical: 10 }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 17, marginRight: 10 }}>Lancer</Text>
                            <Image source={require("../../assets/lancer.png")} />
                        </Pressable>
                    </View>
                </View>
            }
        </Pressable>
    )
}