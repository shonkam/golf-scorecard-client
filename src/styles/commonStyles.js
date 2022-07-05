import { StyleSheet } from 'react-native'
import theme from './theme'

export default styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop: 10,
    textAlign: 'center',
    fontSize: theme.fonts.body,
    color: theme.colors.textPrimary,
  },
  modal: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
})