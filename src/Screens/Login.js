import { View, Text } from "react-native";
import React, { useState } from "react";

import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const validate = () => {
    if (email == "") {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }

    if (password == "") {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
  };

  return (
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
        Login
      </Text>
      <CustomTextInput
        placeholder={"Digite seu e-mail"}
        icon={require("../images/e-mail.png")}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />
      {badEmail === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
          Digite o e-mail!
        </Text>
      )}
      <CustomTextInput
        type={"password"}
        placeholder={"Digite sua senha"}
        icon={require("../images/trancar.png")}
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />
      {badPassword === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
          Digite a senha!
        </Text>
      )}
      <CommonButton
        title={"Login"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {
          // validate();
          navigation.navigate("Home");
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "800",
          alignSelf: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        Cadastre-se
      </Text>
    </View>
  );
};

export default Login;
