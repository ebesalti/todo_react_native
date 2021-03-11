import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}> 
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 10,
        margin: 16,
        borderRadius: 10,
        backgroundColor: '#9EFAFA',
        shadowColor: '#ddd',
        shadowRadius: 20,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        color: '#000',  
    }
})