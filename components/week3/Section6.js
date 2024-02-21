import React from 'react';
import { Text, View, Image } from 'react-native';
export default function Section6() {
    return (
        <View style={{ padding : 20, borderTopWidth : 0.5  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                
                <View style={{ paddingLeft: 10 }}>

                    <Text style={{ fontSize: 20 }}>Location</Text>
                    <Text style={{ color: "gray" }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
                    <Image style={{ width: 500, height: 200, borderRadius: 10 }} source={require("../../assets/week3/map.jpg")} />
                    
                </View>
            </View>
        </View>    
    );
}