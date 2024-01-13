import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <Text style={styles.time}>{date.format("HH:mm:ss")}</Text>
      </View>
      <View style={styles.today}>
        <Text style={styles.day}>{date.format("dddd")}</Text>
      </View>
      <View style={styles.calendar}>
        <Text style={styles.date}>{date.format("DD.MM.YYYY")}</Text>
      </View>
    </View>
  );
};
export default Clock;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    display: "flex",
    //justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  clock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
  },
  today: {
    height: 60,
    width: "100%",
  },
  calendar: {
    height: 50,
    width: "100%",
  },
  day: {
    color: "#f2f2f2",
    fontSize: 40,
    paddingHorizontal: 20,
  },
  time: {
    color: "#f2f2f2",
    fontSize: 70,
    fontWeight: "600",
  },
  date: {
    color: "#f2f2f2",
    fontSize: 25,
    paddingHorizontal: 20,
  },
});
