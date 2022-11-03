import { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile';
// import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/Category';
import { getCategory } from '../service/get';

interface CategoriesScreenProps {
    navigation: any;
};

export const CategoriesScreen = ({
    navigation
}: CategoriesScreenProps) => {

    const[fetchCategories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const getCategories = async () => {
            const categoires = await getCategory();
            setCategories(categoires);
        };
        getCategories();
    }, []);

    const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
        const onPressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title
            });
        };

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}></CategoryGridTile>
        );
    };
    return (
        <FlatList data={fetchCategories}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2} />
    );
};

const styles = StyleSheet.create({
});