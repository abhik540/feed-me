import { StyleSheet, View, Text, Button, Modal, Image, FlatList, ListRenderItemInfo } from "react-native";
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Title } from "../components/ui/Title";
import { COLORS } from "../constants/Color";
import { useSelector } from "react-redux";
// import { FavoriteContext } from "../store/context/favorites-context";

interface FavoriteScreenProps {
    route: any,
    navigation: any
}

export const FavoriteScreen = ({
    route,
    navigation
}: FavoriteScreenProps) => {
    // const favMeals = useContext(FavoriteContext);
    const favoriteMealIds = useSelector((state: any) => state.favoriteMeals.ids);

    const renderItem = (itemData: ListRenderItemInfo<string>) => {
        return <Text>{itemData.item}</Text>
    };
    useLayoutEffect(() => {
        console.log('test');

    }, [navigation]);
    return (
        <View>
            <FlatList
                data={favoriteMealIds}
                keyExtractor={(item) => item}
                renderItem={renderItem}>Favorite Screen</FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
});