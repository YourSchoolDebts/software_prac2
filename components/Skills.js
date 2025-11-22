import { View, Text, StyleSheet } from 'react-native';

const Skills = () => {
  return (
    <View style={styles.skills}>
      <Text style={styles.skill}>Кот</Text>
      <Text style={styles.skill}>Жидкий</Text>
      <Text style={styles.skill}>В банке</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skills: {
    marginTop: 15,
    gap: 35,
    flexDirection: 'row',
  },
  skill: {
    color:'#ffffffff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#8777aaff',
  },
});

export default Skills;
