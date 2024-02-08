import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import CommonButton from "../common/CommonButton";
import CustomTextInput from "../common/CustomTextInput";

export default function Signup() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: 50,
            alignSelf: "center",
            fontSize: 24,
            fontWeight: 600,
            color: "#000",
          }}
        >
          Criar nova conta
        </Text>
        <CustomTextInput
          placeholder={"Digite seu nome"}
          icon={require("../images/do-utilizador.png")}
        />
        <CustomTextInput
          placeholder={"Digite seu e-mail"}
          icon={require("../images/e-mail.png")}
        />
        <CustomTextInput
          type={"password"}
          placeholder={"Entre pelo celular"}
          icon={require("../images/iphone.png")}
        />
        <CustomTextInput
          type={"password"}
          placeholder={"Digite sua senha"}
          icon={require("../images/trancar.png")}
        />
        <CommonButton
          title={"Login"}
          bgColor={"#000"}
          textColor={"#fff"}
          onPress={() => {}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Já tem uma conta?
        </Text>
      </View>
    </ScrollView>
  );
}
