import React from "react";
import {  View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    <View>
      <View style={{ flexDirection : "row", marginTop : 10, paddingBottom : 20 }}>
        <MyIcon title="wifi" name="wifi" size={30} color="#B7C9F2" />
        <MyIcon title="coffee" name="coffee" size={30} color="#B7C9F2" />
        <MyIcon title="bath" name="bath" size={30} color="#B7C9F2" />
        <MyIcon title="car" name="car" size={30} color="#B7C9F2" />
        <MyIcon title="paw" name="paw" size={30} color="#B7C9F2" />

      </View>
    </View>  
  );
}
