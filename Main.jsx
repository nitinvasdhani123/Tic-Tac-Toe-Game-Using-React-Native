import React,{useState} from 'react'
import { View , Text , StyleSheet , Alert} from 'react-native'

function Main() {
    const [currentvalue, setcurrentvalue] = useState(Array(9).fill(null))
    const [symbol, setsymbol] = useState("X")
    const [count, setcount] = useState(0)

    const whowin = (arr) => {
        const winarray = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ]
        for (let i = 0; i < winarray.length; i++) {
          const [a, b, c] = winarray[i]
          if (arr[a] !== null && (arr[a] === arr[b]) && ((arr[a] === arr[c]))) {
            Alert.alert('Congratulations!!!!!', 'You Won', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            setcurrentvalue(Array(9).fill(null))
            setcount(0)
            return;
          }
        }
        setcount(count + 1)
      }

      const handlechange = (index) => {
        const copyarray = Array.from(currentvalue)
        if (copyarray[index] !== null) {
          return;
        }
        copyarray[index] = symbol;
        setcurrentvalue(copyarray)
        whowin(copyarray)
        setsymbol(symbol === "X" ? "O" : "X")
        if (count === 8) {
        Alert.alert('Nobody Won!!!!!!', 'Try Again..........', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          setcurrentvalue(Array(9).fill(null))
          setcount(0)
        }
      }

  return (
    <View style={styles.container}>
      <View style={styles.containerview}>
        <Text style={styles.containertext} onPress={() => {
          handlechange(0)
        }}  value={currentvalue[0]}>{currentvalue[0]}</Text>
        <Text style={styles.containertext} onPress={() => {
          handlechange(1)
        }}  value={currentvalue[1]}>{currentvalue[1]}</Text>
        <Text style={styles.containertext} onPress={() => {
          handlechange(2)
        }}  value={currentvalue[2]}>{currentvalue[2]}</Text>
      </View>
      <View style={styles.containerview}>
      <Text style={styles.containertext} onPress={() => {
          handlechange(3)
        }}  value={currentvalue[3]}>{currentvalue[3]}</Text>
        <Text style={styles.containertext} onPress={() => {
          handlechange(4)
        }}  value={currentvalue[4]}>{currentvalue[4]}</Text>
        <Text style={styles.containertext} onPress={() => {
          handlechange(5)
        }}  value={currentvalue[5]}>{currentvalue[5]}</Text>
      </View>
      <View style={styles.containerview}>
      <Text style={styles.containertext} onPress={() => {
          handlechange(6)
        }}  value={currentvalue[6]}>{currentvalue[6]}</Text>
        <Text style={styles.containertext} onPress={() => {
          handlechange(7)
        }}  value={currentvalue[7]}>{currentvalue[7]}</Text>
        <Text style={styles.containertext} onPress={() => {
          handlechange(8)
        }}  value={currentvalue[8]}>{currentvalue[8]}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d7f7f7',
      alignItems:"center",
      justifyContent:"center"
    },
    containerview:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
    },
    containertext:{
        backgroundColor:"white",
        fontSize:80,
        padding:20,
        margin:6,
        borderRadius:20,
        flex:1,
        textAlign:"center",
        textShadowColor: 'rgba(0, 0, 0, 0.35)', 
        textShadowOffset: { width: 3, height: 3 }, 
        textShadowRadius: 3, 
    }
  });

export default Main
