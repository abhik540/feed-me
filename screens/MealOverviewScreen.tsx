import { StyleSheet, View, Text, FlatList, ListRenderItemInfo, Pressable, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/Meal";
import { useLayoutEffect } from 'react';

interface MealOverviewScreenProps {
    route: any;
    navigation: any;
};

export const MealOverviewScreen = ({
    route,
    navigation
}: MealOverviewScreenProps) => {

    const catId = route.params.categoryId;

    useLayoutEffect(() => {
        const categoryTitle = route.params.categoryTitle;
        navigation.setOptions({
            title: categoryTitle
        });

    }, [navigation]);

    const displayMeals: Meal[] = MEALS.filter((mealItem: Meal) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    const onPressHandler = (meal: Meal) => {
        navigation.navigate('MealDetails', {
            mealId: meal.id,
        });
    };

    const renderMealItem = (mealData: ListRenderItemInfo<Meal>) => {
        return <View>
            <Pressable onPress={onPressHandler.bind(this, mealData.item)}>
                <View>
                    <Image source={mealData.item.imageUrl ? { uri: mealData.item.imageUrl } : require('../assets/images/goal_2.png')} style={styles.image} />
                    <Text style={styles.title}>{mealData.item.title}</Text>
                </View>
                <View>
                    <Text>Price: {mealData.item.price}</Text>
                </View>
            </Pressable>
        </View>;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(m) => m.id}
                renderItem={renderMealItem}></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    mealItem: {

    }
});