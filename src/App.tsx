import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { ListItem } from './components/ListItem';
import articles from './dummies/articles.json';

export default function App() {
  const items = articles.map((articles, index) => {
    return (
      <ListItem
        key={index}
        imageUrl={articles.urlToImage}
        title={articles.title}
        author={articles.author}
      />
    );
  });

  return (
    <View style={styles.container}>
      {items}
      <StatusBar style="auto" />
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
