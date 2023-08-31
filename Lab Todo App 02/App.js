import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import CustomButton from './src/components/CustomButton';
import { AntDesign } from '@expo/vector-icons';
import TodoScreen from './src/screens/TodoScreen';
import LoginScreen from './src/screens/LoginScreen';
import Users from './src/data/Users';
import useStorage from './src/hooks/useStorage';

const userTokenKey = 'token';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showLoginScreen, setShowLoginScreen] = useState(true);
  const {setDataInStorage, getDataFromStorage, removeDataFromStorage} = useStorage();

  useEffect(() => {
    const checkToken = () => {
      getDataFromStorage(userTokenKey).then(
        (data) => {
          if(data) {
            setShowLoginScreen(false);
          }

          setTimeout(() => {
            setLoading(false);
          }, 2000);

        }
      )
    }

    checkToken();

  }, []);

  const handleLogin = async (username, password) => {

    var found = false;
    var userToken = null;

    for(var user of Users) {
        if(user.username === username && user.password === password) {
            found = true;
            userToken = user.token;
        }
    }

    if(found) {
      //les paramètres sont bons
      await setDataInStorage(userTokenKey, userToken);
      setShowLoginScreen(false);
    } else {
        Alert.alert("Erreur", "Username ou mot de passe incorrect");
    }
  }

  const handleLogout = async () => {
    removeDataFromStorage(userTokenKey).then(
      (status) => {
        if(status) {
          setShowLoginScreen(true);
        }
      }
    );
  }

  if(loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"purple"} />
      </View>
    )
  }

  if(showLoginScreen) {
    return (
        <LoginScreen isLogged={showLoginScreen} onLogin={handleLogin} />
    );
  }

  return (
      <TodoScreen isLogged={showLoginScreen} logoutUser={handleLogout} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
