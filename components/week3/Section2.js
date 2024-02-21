import React from 'react';
import { FontAwesome, } from "@expo/vector-icons";
import { Text, View, Image } from 'react-native';

export default function Section2() {
    return (

        <View style={{ marginTop : -30 , margin: 10 }}>
            <View style={{ padding : 10, borderRadius : 35, backgroundColor : "#efeeed" }}>
            
            <View>
                <Text style={{ fontSize : 20, fontWeight : "bold", textAlign : "center"}}>Hilton San Francisco</Text>
            </View>
            <View style={{ flexDirection : "row", justifyContent : "center"}}>
                <FontAwesome name="star" size={58} color="yellow" />
                <FontAwesome name="star" size={58} color="yellow" />
                <FontAwesome name="star" size={58} color="yellow" />
                <FontAwesome name="star" size={58} color="yellow" />
                <FontAwesome name="star" size={58} color="yellow" />
            </View>
            <View>
                <Text style={{ color : '#444444' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
            </View>
        </View>
    );
}