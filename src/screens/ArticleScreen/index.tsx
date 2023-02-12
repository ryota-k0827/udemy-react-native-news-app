import { RouteProp } from '@react-navigation/native';
import { FC } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import WebView from 'react-native-webview';
import { Articles } from '../../types/articles';

type Props = {
  route: RouteProp<{ Article: { article: Articles } }, 'Article'>;
};

export const ArticleScreen: FC<Props> = ({ route }) => {
  console.log(route.params);
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
