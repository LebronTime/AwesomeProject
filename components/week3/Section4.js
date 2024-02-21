import React from 'react';
import { Text, View, Image } from 'react-native';
export default function Section4() {
    return (
        <View style={{ padding : 5, borderTopWidth : 0.5, borderBottomWidth : 0.5, color : "gray"  }}>
    
            <View style={{ flexDirection: "row", padding: 15}}>
            <View style={{ padding : 5 }}>
                <Text style={{ fontSize : 20 }}>Hotel Description</Text>
                <Text style={{ color : '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
            </View>
        
        </View>    
    );
}
