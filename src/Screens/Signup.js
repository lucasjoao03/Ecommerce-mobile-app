import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CommonButton from "../common/CommonButton";
import CustomTextInput from "../common/CustomTextInput";

export default function Signup() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);

  const validate = () => {
    if (email == "") {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (name == "") {
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (mobile == "") {
      setBadMobile(true);
    } else if (mobile.length < 10) {
      setBadMobile(true);
    } else {
      setBadMobile(false);
    }
  };

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
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
          icon={require("../images/do-utilizador.png")}
        />
        <CustomTextInput
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
          placeholder={"Digite seu e-mail"}
          icon={require("../images/e-mail.png")}
        />
        <CustomTextInput
          value={mobile}
          keyboardType={"number-pad"}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
          placeholder={"Entre pelo celular"}
          icon={require("../images/iphone.png")}
        />
        <CustomTextInput
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
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
