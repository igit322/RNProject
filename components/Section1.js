import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Section1 = () => {
  return (
    <View style={style.Section1}>
      <TouchableOpacity>
        <View style={style.box}>
          <Text style={style.text}>시작하기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  Section1: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    width : "50%",
    flexDirection: "row",
    backgroundColor: "#253741",
    padding: 20,
    alignItems: "center",
    borderRadius : 20,
  },
  text: {
    fontSize: 25,
    color: "#fff",
  },
});

export default Section1;
