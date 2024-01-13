import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { db, ref, onValue } from "../firebase";

const Weather = () => {
  const [temp, setTemp] = useState(0);
  const [humid, setHumid] = useState(0);

  useEffect(() => {
    const data = ref(db);

    onValue(data, (snapshot) => {
      setTemp(snapshot.child("DHT11/DHTread").val().temp);
      setHumid(snapshot.child("DHT11/DHTread").val().humid);
    });
  }, [db]);

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View>
          <View style={styles.block}>
            <Text style={styles.text}>{temp}°C</Text>
          </View>
          <Text style={styles.blockName}>Temperatura</Text>
        </View>
        <View>
          <View style={styles.block}>
            <Text style={styles.text}>{humid}%</Text>
          </View>
          <Text style={styles.blockName}>Wilgotność</Text>
        </View>
      </View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
  },
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  block: {
    height: 175,
    width: 175,
    backgroundColor: "#94c5e3",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#f2f2f2",
    fontSize: 50,
    fontWeight: "300",
  },
  blockName: {
    color: "#f2f2f2",
    textAlign: "center",
    paddingTop: 15,
    fontSize: 20,
  },
});
