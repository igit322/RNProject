// 시작페이지
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import ImageViewer from "../components/ImageViewer";

// 이미지1
const MainImage = require("../assets/fitsum.jpg");

function Start({ navigation }) {
  return (
    <View style={style.header}>
      <Text style={style.text}>Welcome!</Text>
      <Text style={style.text2}>나의 일정을 기록하고 관리해보세요</Text>
      <View style={style.imgwrap}>
        <ImageViewer MainImageSource={MainImage} />
      </View>

      <View style={style.Section1}>
        <TouchableOpacity onPress={() => navigation.navigate("Main2")}>
          <View style={style.box}>
            <Text style={style.text3}>시작하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flex: 1,
  },
  imgwrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 80,
    marginLeft: 20,
    fontSize: 35,
    fontWeight: "600",
  },
  text2: {
    marginTop: 10,
    marginLeft: 23,
    marginBottom: 20,
    fontSize: 15,
  },

  Section1: {
    marginTop: 50,
    alignItems: "center",
  },
  box: {
    width: "50%",
    flexDirection: "row",
    backgroundColor: "#253741",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  text3: {
    fontSize: 20,
    color: "#fff",
  },
});

export default Start;
