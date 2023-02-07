import { Image, StyleSheet, Text, View } from 'react-native';

export const ListItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://picsum.photos/200/300' }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, quod, quia,
          voluptates quae voluptatibus quibusdam hogehogehogegeeegeegegegeg
        </Text>
        <Text style={styles.subText}>React Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});
