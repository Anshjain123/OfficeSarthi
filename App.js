import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AuthProvider, { AuthContext } from './AuthProvider';
import Root from './Root';


export default function App() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
