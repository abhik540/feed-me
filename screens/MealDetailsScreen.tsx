import { StyleSheet, View, Text, Button, Modal, Image } from "react-native";
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Title } from "../components/ui/Title";
import { IconButton } from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
// import { FavoriteContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from '../store/redux/favorites';

interface MealDetailsScreenProps {
    route: any;
    navigation: any;
};

export const MealDetailsScreen = ({
    route,
    navigation
}: MealDetailsScreenProps) => {

    const mealId = route.params.mealId;
    // const favoriteMeals = useContext(FavoriteContext);

    const favoriteMealIds = useSelector((state: any) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    const changeFavStateHandler = () => {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} onPress={changeFavStateHandler}></IconButton>
            }
        });
    }, [navigation, changeFavStateHandler]);

    return (
        <View>
            <Title>{mealId}</Title>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {

    }
});