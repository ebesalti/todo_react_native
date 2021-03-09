import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='new todo'
                onChangeText={changeHandler}
            />
            <View style={styles.button}>
                <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        margin: 16,
        flex: 2,
        height: 40,
    },
    button: {
        paddingVertical: 6,
        margin: 16,
        flex: 1,
        height: 40,
        justifyContent: 'center'
    }

})