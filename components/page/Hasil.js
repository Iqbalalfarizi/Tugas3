import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HasilBox from "../HasilBox";

export default function Hasil({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View>
          <TouchableOpacity
            style={styles.iconHeader}
            onPress={() => {
              navigation.goBack();
              console.log("Lalallal");
            }}
          >
            <Ionicons
              name="arrow-back"
              style={styles.icon}
              size={24}
              color="black"
            />
            <FontAwesome5 name="user-alt" style={styles.icon} size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Hiling.id</Text>
        <Text style={styles.childTitle}>Hasil Pencarian Penerbangan</Text>
        <Text style={styles.childTitle}>Tanggal Keberangkatan</Text>
      </View>
      <HasilBox />
      <View style={styles.footer}>
        <Text style={{ fontSize: 17, color: "rgba(0,0,0, 0.3)" }}>
          Copyright IqbalAlfarizi-120140122
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  background: {
    width: "100%",
    backgroundColor: "#86B257",
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    height: 130,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    marginTop: 15,
  },
  iconHeader: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: "#fff",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },

  childTitle: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 5,
  },
});
