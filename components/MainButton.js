import { Pressable, Text, StyleSheet } from 'react-native';

const MainButton = () => {
  return (
    <Pressable style={styles.boxBtn}>
      <Text style={styles.textBtn}>Button</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  boxBtn:{
    borderRadius: 20,
    paddingHorizontal: 45,
    paddingVertical: 7,
    marginTop: 25,
    backgroundColor: '#422e50ff',
  },
  textBtn:{
    fontWeight: 600,
    fontSize: 15,
    color: '#ffffffde',
  }
});

export default MainButton;
