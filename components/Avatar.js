import { Image, StyleSheet } from 'react-native';

const Avatar = () => {
  return (
    <Image
      style={styles.avatar}
      source={{ uri: 'https://cdn.fishki.net/upload/post/201405/22/1271219/002.jpg' }}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  }
});

export default Avatar;
