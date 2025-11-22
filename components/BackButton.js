import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = () => {
  return (
    <Pressable style={styles.boxBack}>
      <Ionicons name='arrow-back' size={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  boxBack: {
    top: '9%',
    left: '6%',
    position: "absolute",
  },
});

export default BackButton;
