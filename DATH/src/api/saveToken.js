import AsyncStorage from '@react-native-community/async-storage';

const saveToken = async (token) => {
  await AsyncStorage.setItem('@token', token);
};

export default saveToken;
