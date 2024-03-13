import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";

export default function Event(props) {

    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  
    useEffect(() => {
        loadOnlineTours();
    }, []);
        

    return (
        <View style={props.style}>
            <Text style={{fontSize:30, fontStyle:'bold'}}>Tour with FlatList</Text>
            <Text>Let find out what most interesting things</Text>
            <FlatList
                horizontal={true}
                // numColumns={2}
                // columnWrapperStyle={{ justifyContent: 'space-between'}}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight : 10 }}>
                                <Text style={{ marginRight : 10 }}>{ item.title }</Text>
                                <Image style={{ width : Dimensions.get("screen").width / 2.0 , height :150, borderRadius:10 }} source={{ uri : item.uri}} />
                                <View style={{ marginTop : -30, height : 30 , width: 300, paddingHorizontal : 10, opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10 , backgroundColor : 'black'}}>
                                    <Text style={{ fontSize:20, color : "white"}}>{item.title}</Text>
                                 </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
            
                
        </View>
    );
}
