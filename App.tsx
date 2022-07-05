import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import Login from './src/views/Login'
import NewRound from './src/views/NewRound'

const App = () => {
  return (
    <View style={styles.container}>
      < NewRound />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
})

export default App