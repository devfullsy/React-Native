import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = (props) => {
  return (
    <TextInput 
        {...props}
        style={[styles.textInput, props.style]}
    /> 
  )
}

const styles = StyleSheet.create({ 
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 30, 
    borderRadius: 10,
    fontSize: 18,
  },
})

export default CustomTextInput
