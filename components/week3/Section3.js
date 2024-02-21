import React from 'react';
import { Text, View } from 'react-native';
export default function Section3() {
    return (
        <View style={{ padding : 15 }}>
            
            <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ width: 50, height: 50, borderRadius: 50 / 2, backgroundColor : "red", justifyContent : "center", alignItems : "center"}}/>
                    <Text style={{ fontSize : 20, fontWeight : "bold", textAlign : "center", marginLeft : -40, marginTop: 13}}>9.5</Text>
                    
                    <View style={{ paddingLeft: 25 }}>
                        <Text style={{ fontSize: 20 }}>Excellent</Text>
                        <Text style={{ color: "gray" }}>see 801 views</Text>
                    </View>
                <View/>
            </View>

        </View> 
    );
}