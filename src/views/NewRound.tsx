import { useState } from 'react'
import { Text, View, Button, Modal } from 'react-native'
import TextHeader from '../components/TextHeader'
import styles from '../styles/commonStyles'
import theme from '../styles/theme'

const NewRound = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const newCoursePressed = () => {
    console.log('new course')
  }
  const playPressed = () => {
    console.log('play')
  }

  return (
    <View style={styles.viewContainer}>
      <TextHeader header={'New round'} />

      <View style={{ flex: 1 }}>
        <Button title='Select course' onPress={() => setModalVisible(true)} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modal}>
          <Text style={{
            textAlign: 'center',
            fontSize: theme.fonts.header,
          }}>
            courses
          </Text>

          <View style={{ flex: 1 }}>
            <Button title='ADD NEW COURSE' onPress={newCoursePressed} />
          </View>
          <Button title='Return' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <View style={{ marginBottom: 20 }}>
        <Button title='play' color='green' onPress={playPressed} />
      </View>
    </View>
  )
}



export default NewRound