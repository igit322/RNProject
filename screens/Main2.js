// 시작페이지
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Main2 = () => {
  return (
    <View style={styles.container}>
      {/* 섹션1 */}
      {/* <View style={styles.section1}>
        <Text style={styles.title}>뭐 만들지</Text>
      </View> */}

      {/* 섹션2 */}

      <View style={styles.section2}>
        {/* <ScrollView
            style={styles.mainScroll}
            showsVerticalScrollIndicator={false}
            scrollIndicatorInsets={{ right: 0 }}
          > */}
        <View style={styles.contents1}>
          <Text style={styles.text1}>...</Text>
        </View>
        <View style={styles.contents1}></View>
        <View style={styles.contents1}></View>
        <View style={styles.contents1}></View>
        <View style={styles.contents1}></View>
        {/* </ScrollView> */}
      </View>

      {/* 섹션3 */}
      <View style={styles.section3}>
        <View style={styles.baContents}>
          <Text style={{ color: "white" }}>....</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  // 영역1
//   section1: {
//     width: "100%",
//     flex: 1,
//     backgroundColor: "white",
//   },

//   title: {
//     top: "50%",
//     color: "#000000",
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//   },

  // 영역2
  section2: {
    width: "100%",
    flex: 8,
    backgroundColor: "#bbe5ff",
    fontSize: 20,
    alignItems: "center",
  },

  contents1: {
    width: "90%",
    height: 100,
    opacity: 0.8,
    backgroundColor: "white",
    top: 50,
    borderRadius: 25,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  text1: {
    color: "#8e0000",
  },

  mainScroll: {
    flex: 1,
    width: "90%",
    right: 0,
  },

  // 영역3
  section3: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  baContents: {
    backgroundColor: "#6a9bba",
    borderRadius: 50,
    width: 70,
    height: 40,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main2;
