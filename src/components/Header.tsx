import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import images from "../../assets";

const { width } = Dimensions.get("window");
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <TouchableOpacity>
          <Image source={images.logo} />
        </TouchableOpacity>
        <View style={[styles.row, { justifyContent: "center" }]}>
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Image source={images.search} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Image source={images.user} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.menu} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.row, { justifyContent: "center", padding: 12 }]}>
        <Image source={images.flag} style={styles.flag} />
        <Text>
          Ministère de l’Enseignement {"\n"}supérieur et de la Recherche
        </Text>
      </View>
      <View style={styles.underline} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#ffff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    width: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  underline: {
    width: width - 32,
    alignSelf: "center",
    height: 2,
    backgroundColor: "#46BB6D",
  },
});
