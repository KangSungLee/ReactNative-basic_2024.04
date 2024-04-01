import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet  } from "react-native";

const styles = StyleSheet.create({
  container: {

    margin: 10,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    
    textAlign: 'center',
    fontSize: 20
  }
});

export default function Num() {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum((num + 1 >= 5)? 5 : num+1)
    console.log(num);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{num}</Text>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>증가</Text>
      </TouchableOpacity>
    </View>
  );
} 