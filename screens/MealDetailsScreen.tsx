import { StyleSheet, View, Text, Button, Modal, Image } from "react-native";
import { useLayoutEffect } from 'react';
import { Title } from "../components/ui/Title";
import { IconButton } from "../components/IconButton";

interface MealDetailsScreenProps {
    route: any;
    navigation: any;
};

export const MealDetailsScreen = ({
    route,
    navigation
}: MealDetailsScreenProps) => {

    const headerButtonPressHandler = () => {
        console.log('pressed');
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={headerButtonPressHandler}></IconButton>
            }
        });
    }, [navigation]);

    return (
        <View>
            <Title>{route.params.mealId}</Title>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {

    }
});