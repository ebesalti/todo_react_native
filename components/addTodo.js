import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='new todo'onChangeText={changeHandler}/>
                <TouchableOpacity onPress={() => submitHandler(text)}  >
                    <View style={styles.button}>
                        <MaterialIcons name='add' size={24} color='#333'/>
                    </View>
                </TouchableOpacity>
        </View>
        )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 60,
        backgroundColor: '#fff',
        margin: 16,
        flex: 1,
        height: 40,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 5,},
	    shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#B1FBFB',
        paddingVertical: 6,
        marginLeft: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 5,},
	    shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }

})