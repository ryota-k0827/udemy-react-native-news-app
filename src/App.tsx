import axios from 'axios';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { ListItem } from './components/ListItem';
import { Articles } from './types/articles';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${
  Constants?.manifest?.extra?.newsApiKey as string
}`;

export default function App() {
  const [articles, setArticles] = useState<Articles>([]);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(URL);
      console.log(res.data.articles);
      setArticles(res.data.articles);
    } catch (e) {
      console.log(e);
    }
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
