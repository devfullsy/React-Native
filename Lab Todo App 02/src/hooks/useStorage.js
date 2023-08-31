import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
  
    const setDataInStorage = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);

        } catch (e) {
          // saving error
        }
    };

    const getDataFromStorage = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);

          if (value !== null) {
            return value;
          }
          return null;
        } catch (e) {
          // error reading value
          return null;
        }
    };

    const removeDataFromStorage = async (key) => {
        try {
          await AsyncStorage.removeItem(key);
          return true;
        } catch(e) {
          // remove error
          return false;
        }
    }  

    return {
        setDataInStorage,
        getDataFromStorage,
        removeDataFromStorage
    }
    
}

export default useStorage;