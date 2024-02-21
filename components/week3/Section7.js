import React from 'react';
import { Text, View, Image } from 'react-native';
export default function Section7() {
    return (
        <View style={{ padding : 20, borderTopWidth : 0.5  }}>
            
            <View style={{ flexDirection: "row", padding: 10 }}>
                
                <View style={{ paddingLeft: 10 }}>
                    <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Room Type</Text>


                        <Image style={{ width: 200, height: 200, borderRadius: 50/2 }} source={require("../../assets/week3/room-8.jpg")} />
                    </View>
                    
                    <View style={{ flexDirection: "column", justifyContent: "flex-end", paddingLeft: 250 ,alignText: "center"}}>
                        <View>
                            <View style={{fontWeight: "bold",marginTop: -325}}>
                                <Text style={{ fontWeight: "bold",fontSize: 25 }}>Standard Twin Room</Text>
                            </View>
                        </View>

                        <View style={{marginTop: -200}}>
                            <Text style={{ color: "tomato",fontWeight: "bold",fontSize: 25 }}>$399.99</Text>
                            <Text style={{ color: "#9195F6" }}>Hurry Up! This is your last room!</Text>
                        </View>
                    </View>

                    
                    
                </View>
            </View>
        </View>    
    );
}