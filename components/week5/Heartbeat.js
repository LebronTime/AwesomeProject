import React, { useState } from "react";
import { TouchableOpacity, View, Text, Icon } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Heartbeat() {   
    const [countClick , setHeartbeat] = useState(0); 
    // const [height , setHeight] = useState('');

    const onPressButton = () => {
        let output = 0
        output = countClick + 1
        console.log(output)
        setHeartbeat(output)
    };
    return (
        <View style={{ flexDirection : "row", height:200, alignItems:"center", alignContent:"center", justifyContent:"center"}}>
            <TouchableOpacity  onPress={onPressButton}>
                <View style={{alignItems:"center", alignContent:"center", justifyContent:"center" , marginLeft:130}}>
                    <FontAwesome title="" name="heart" size={50} color="#fbacbe" />
                </View>
            </TouchableOpacity>
            <View style={{ flex:1, marginLeft:130 }}>
                <Text style={{fontSize: 50}}>{countClick}</Text>
            </View>
        </View>
    );
}

                    