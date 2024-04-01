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
  // const handleClick = () => {
  //   setNum((num + 1 >= 5)? 5 : num+1)
  // }
  // const handleReSet = () => {
  //   setNum(0);
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{num}</Text>
      <TouchableOpacity style={styles.button} onPress={ () => setNum(num +1)} disabled={num>=5}>
        <Text style={styles.buttonText}>{num<5?'증가':'스톱'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={ () => setNum(0)}>
        <Text style={styles.buttonText}>리셋</Text>
      </TouchableOpacity>
    </View>
  );
} 