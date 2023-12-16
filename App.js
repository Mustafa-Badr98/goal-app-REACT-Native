import { Button, FlatList } from "react-native";
import { StyleSheet, Text, View,Image } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handelModalVisibility() {
    setModalIsVisible(true);
  }

  function handelModalVisibilityClose() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteHandler(id) {
    console.log("deleted");
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={handelModalVisibility} />
      <GoalInput visible={modalIsVisible} AddButtonHandler={addGoalHandler} handelModalClose={handelModalVisibilityClose}/>

      <View style={styles.goalsContainer}>
        <Text>Your Goals: </Text>
        <FlatList
          keyExtractor={(item, index) => {
            return item.id;
          }}
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDelete={deleteHandler}
                id={itemData.item.id}
              />
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
