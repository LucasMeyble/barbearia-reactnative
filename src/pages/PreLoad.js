import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function preLoad(){
    return(
        <View style={ styles.container }>
            <Text>alo alo caruaru</Text>
        </View>
    )
} 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }

})
