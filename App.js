import { SafeAreaView, View, StyleSheet } from 'react-native';

import Avatar from './components/Avatar';
import BackButton from './components/BackButton';
import UserInfo from './components/UserInfo';
import Skills from './components/Skills';
import MainButton from './components/MainButton';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <Avatar />
        <BackButton />
        <UserInfo />
        <Skills />
        <MainButton />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  card: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 5,
  }
});

export default App;
