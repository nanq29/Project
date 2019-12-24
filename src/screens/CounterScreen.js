import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  //state == {count : number};
  //action === {type : 'increment' || 'decrement', payload : 1}
  switch (action.type) {
    case 'increment' :
      return {...state, count : state.count + action.payload};
    case 'decrement' :
      return {...state, count : state.count - action.payload};
    default : 
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer (reducer, {count : 0} )

  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => {
         dispatch({type : 'increment', payload : 1 })
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress = {() => { 
          dispatch({type : 'decrement', payload : 1 })
        }}
      ></Button>
<Text>Current Count : {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 11111111
  }
});

export default CounterScreen;
