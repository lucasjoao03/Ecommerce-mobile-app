import { View, Image, TextInput } from "react-native";
import React, { useState } from "react";

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type }) => {
  return (
    <View
      style={{
        width: "90%",
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Image source={icon} style={{ width: 24, height: 24 }} />
      <TextInput
        value={value}
        onChangeText={(txt) => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        secureTextEntry={type == "password" ? true : false}
        style={{ marginLeft: 10 }}
      />
    </View>
  );
};

export default CustomTextInput;