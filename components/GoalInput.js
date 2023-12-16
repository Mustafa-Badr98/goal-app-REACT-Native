import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Modal,Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalsText, setEnteredGoalsText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalsText(enteredText);
  }
  function addGoalHandler() {
    props.AddButtonHandler(enteredGoalsText);
    setEnteredGoalsText("");
    props.handelModalClose();
  }
  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
      <Image style={{marginBottom:8}} source={require("../assets/images/favicon.png")}/>

        <TextInput
          style={styles.textInput}
          placeholder="Inter your Goal here"
          onChangeText={goalInputHandler}
          value={enteredGoalsText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#b180f0" />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={props.handelModalClose} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    marginTop:8,
    alignItems: "center",
    backgroundColor: "#511111",
    borderBottomColor: "#ccc",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius:6,
    borderColor: "#ccc",
    padding: 16,
    backgroundColor:"#e4d0ff",
    color:"#120438"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttons: {
    width: 100,
    marginHorizontal: 8,
  },
});
export default GoalInput;
