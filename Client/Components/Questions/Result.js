import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../../fontPoppins";
import { GlobalContext } from "../../context";

const Result = () => {
  const { Data } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      {Data?.length > 0 ? (
        Data.map((item, index) => (
          <AppText key={index} style={styles.text}>
            Question: {item.Question} {"\n"}
            Answer: {item.Answer}
          </AppText>
        ))
      ) : (
        <AppText style={styles.text}>No results available</AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Result;
