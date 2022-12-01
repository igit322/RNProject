import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ MainImageSource }) {
  return <Image source={MainImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 200,
    borderRadius: 25,
    opacity: 0.8,
    top: 20,
  },
});
