import { StyleSheet, View, Text, Button, Modal, Image, Pressable } from "react-native";
import { useState } from 'react';
import { Title } from "../components/ui/Title";
import { COLORS } from "../constants/Color";
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
    icon: any,
    onPress: () => void;
}

export const IconButton = ({
    icon,
    onPress
}: IconButtonProps) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color='white'></Ionicons>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.25
    }
});