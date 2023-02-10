import { StyleSheet, View } from 'react-native';

import { ListItem } from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem imageUrl="https://picsum.photos/200/300" title="hgoehoge" author="React News" />
      <ListItem imageUrl="https://picsum.photos/200/400" title="hgoehoge" author="React News" />
      <ListItem imageUrl="https://picsum.photos/200/500" title="hgoehoge" author="React News" />
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
