import React from 'react';
import { Text, View, Image } from 'react-native';
import { FontAwesome, } from "@expo/vector-icons";

export default function Section1() {
    return (
        <View style={{ paddingTop : 15  }}>

            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 16/9 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
          
        </View>    
    );
}