import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useStorage from '../hooks/useStorage';
import { Entypo } from '@expo/vector-icons';

const userTokenKey = 'token';

const Header = (props) => {
  const showLogoutBtn = !props.isLogged  && (
    <Pressable onPress={() => props?.logout()}>
      <Entypo name="log-out" size={24} color="white" />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {
        showLogoutBtn
      } 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: 'purple',
        paddingTop: 40,
        paddingHorizontal: 20,
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    }
})

export default Header
