import React from 'react';
import { FontAwesome, } from "@expo/vector-icons";
import { Text, View, Image } from 'react-native';
export default function Section8() {
    return (
        <View style={{ marginTop : 25, flexDirection : "row", justifyContent :"space-between", borderTopWidth : 0.5, borderColor : "gray"  }}>
            
            <View style={{ flexDirection : "column", paddingLeft: 40 }}>
                <Text style={{ fontSize : 15 }}>Price</Text>
                <Text style={{ fontSize : 20 , color :"tomato" }}>$399.99</Text>
                <Text style={{ fontSize : 20 , color :"tomato" }}>AVG/Night</Text>
            </View>
            <View style={{margin:15, width: 100, height: 50, borderRadius: 10, justifyContent:"center", alignItems:"center", backgroundColor:"tomato"}}>
                <Text style={{ fontSize : 15, fontWeight: "bold" ,color:"white" }}>Book now</Text>
            </View>
        </View>    
    );
}
