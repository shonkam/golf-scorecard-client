import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Constants from 'expo-constants'
import Login from './src/views/Login'
import NewRound from './src/views/NewRound'
import backgroundPicture from './src/assets/bg.jpg'

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundPicture} resizeMode="cover" style={styles.image}>
        < NewRound />
      </ImageBackground>
      <StatusBar backgroundColor='#3cd83c' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  image: {
    flex: 1
  },
})

export default App