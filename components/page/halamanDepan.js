import React, { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function HalamanDepan({ navigation }) {
  const [locKeberangkatan, setLocKeberangkatan] = useState("");
  const [locTujuan, setLocTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.iconHeader}>
          <Ionicons name="menu" style={styles.icon} size={30} />
          <FontAwesome5 name="user-alt" style={styles.icon} size={30} />
        </View>
      </View>

      <Text style={styles.title}>Hiling.id</Text>
      <View style={styles.search}>
        <View style={styles.column}>
          <Text style={styles.label}>Lokasi Keberangkatan</Text>
          <View style={styles.inputBox}>
            <FontAwesome5
              name="plane-departure"
              style={{ marginRight: 10 }}
              size={20}
              color="#86B257"
            />
            <TextInput
              placeholder="Masukkan Lokasi Keberangkatan"
              onChangeText={(newText) => setLocKeberangkatan(newText)}
              defaultValue={locKeberangkatan}
            />
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Lokasi Tujuan</Text>
          <View style={styles.inputBox}>
            <FontAwesome5
              name="plane-arrival"
              style={{ marginRight: 10 }}
              size={20}
              color="#86B257"
            />
            <TextInput
              placeholder="Masukkan Lokasi Tujuan"
              onChangeText={(newText) => setLocTujuan(newText)}
              defaultValue={locTujuan}
            />
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Tanggal Keberangkatan</Text>
          <View style={styles.inputBox}>
            <Fontisto
              name="date"
              style={{ marginRight: 10 }}
              size={20}
              color="#86B257"
            />
            <TextInput
              placeholder="Masukkan Tanggal Keberangkatan"
              onChangeText={(newText) => setTanggal(newText)}
              defaultValue={tanggal}
            />
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (locKeberangkatan === "" || locTujuan === "" || tanggal === "")
              return;
            navigation.navigate("hasil", {
              locKeberangkatan: locKeberangkatan,
              locTujuan: locTujuan,
              tanggal: tanggal,
            });
          }}
        >
          <Text style={styles.buttonText}>Cari</Text>
        </Pressable>
      </View>
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
    flex: 1,
    backgroundColor: "#C0BDBD",
    height: "100%",
  },
  background: {
    width: "100%",
    backgroundColor: "#86B257",
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    height: 400,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    marginTop: 60,
  },
  search: {
    width: "85%",
    backgroundColor: "#ffffff",
    position: "absolute",
    alignSelf: "center",
    marginTop: "30%",
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
  },
  inputBox: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    padding: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ED7C30",
    padding: 5,
    alignSelf: "stretch",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 18,
  },
  footer: {
    marginTop: 180,
    alignSelf: "center",
  },
  iconHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  icon: {
    color: "#fff",
  },
});
