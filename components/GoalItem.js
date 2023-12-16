import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#1e0acc" }}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalText: {
    color: "white",
    padding: 8,
  },
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
});
export default GoalItem;
