import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { ListItem } from './components/ListItem';
import dummyArticles from './dummies/articles.json';
import { Articles } from './types/articles';

export default function App() {
  const [articles, setArticles] = useState<Articles>([]);

  const fetchArticles = () => {
    setArticles(dummyArticles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
