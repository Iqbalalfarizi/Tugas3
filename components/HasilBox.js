import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function HasilBox(props) {
  return (
    <View style={styles.hasilPencarian}>
      <View style={styles.hasilBox}>
        <Text>{props.lokasiAsal}</Text>
        <Text>-</Text>
        <Text>{props.lokasiTujuan}</Text>
      </View>
      <View style={styles.hasilBox2}>
        <View style={styles.iconHasilBox}>
          <MaterialIcons
            name="airplanemode-active"
            size={24}
            color="#86B257"
            style={{ marginRight: 10 }}
          />
          <Text>{props.maskapai}</Text>
        </View>
        <Text>{props.tanggal}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hasilPencarian: {
    height: 100,
    backgroundColor: "#fff",
    borderColor: "rgba(0,0,0, 0.2)",
    borderWidth: 2,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  hasilBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hasilBox2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  iconHasilBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
