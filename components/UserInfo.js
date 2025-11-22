import { View, Text, StyleSheet } from 'react-native';

const UserInfo = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.name}>Кот в банке</Text>
      <Text style={styles.title}>дурак</Text>
      <Text style={styles.bio}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4
  },
  title: {
    fontSize: 16,
    color: '#636363',
    marginBottom: 8
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center'
  }
});

export default UserInfo;
