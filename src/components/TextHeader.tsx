import { StyleSheet, Text } from 'react-native'
import theme from '../styles/theme'

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
    marginTop: 10,
    textAlign: 'center',
    fontSize: 36,
    color: theme.colors.textPrimary,
    fontWeight: 'bold'
  },
})

export default TextHeader