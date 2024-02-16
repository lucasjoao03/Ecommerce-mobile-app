import { View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import Main from "../bottom/Main";
import Search from "../bottom/Search";
import Cart from "../bottom/Cart";
import WishList from "../bottom/WishList";
import Profile from "../bottom/Profile";
const Home = () => {
  const [selectTab, setSelectTab] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {selectTab == 0 ? (
        <Main />
      ) : selectTab == 1 ? (
        <Search />
      ) : selectTab == 2 ? (
        <Cart />
      ) : selectTab == 3 ? (
        <WishList />
      ) : (
        <Profile />
      )}

      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectTab(0);
          }}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: selectTab == 0 ? "#000" : "#8e8e8e",
            }}
            source={require("../images/botao-de-inicio.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectTab(1);
          }}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: selectTab == 1 ? "#000" : "#8e8e8e",
            }}
            source={require("../images/lupa.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              backgroundColor: selectTab == 2 ? "green" : "#000",
              borderRadius: 22,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectTab(2);
            }}
          >
            <Image
              source={require("../images/bolsa-de-compras.png")}
              style={{ width: 24, height: 24, tintColor: "#fff" }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectTab(3);
          }}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: selectTab == 3 ? "#000" : "#8e8e8e",
            }}
            source={require("../images/coracao.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectTab(4);
          }}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              tintColor: selectTab == 4 ? "#000" : "#8e8e8e",
            }}
            source={require("../images/do-utilizador.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
