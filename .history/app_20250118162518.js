import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Stylesheet,Text,View} from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <Text>
                Open up App.js to start working on your app!
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
}
const styles = Stylesheet.create({})