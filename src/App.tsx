import { StyleSheet, View } from 'react-native';

import { ListItem } from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
