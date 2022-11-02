import { StyleSheet, View, Text, Button, Modal, Image } from "react-native";
import { useState } from 'react';
import { Title } from "../components/ui/Title";
import { COLORS } from "../constants/Color";

interface GameOverScreenProps {
}

export const GameOverScreen = ({
}: GameOverScreenProps) => {
    return (
        <View>
            <Title>Game is Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/goal_2.png')}></Image>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: 400,
        height: 400,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: COLORS.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    }
});