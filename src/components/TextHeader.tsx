import { StyleSheet, Text } from 'react-native'

interface TextHeaderProps {
  header: String
}

// used by different views/screens to render the text header
const TextHeader = ({ header }: TextHeaderProps) =>
  <Text style={styles.container}>
    {header}
  </Text>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 26
  },
})

export default TextHeader