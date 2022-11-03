import axios from "axios";
import Category from "../models/Category";

export const getCategory = async () => {
    const response = await axios.get(
        'https://myproject-34f5b-default-rtdb.firebaseio.com/category.json'
    );
    const categories = [] as Category[];
    for (const key in response.data) {
        categories.push(new Category(response.data[key].id, response.data[key].title, response.data[key].color));
    }
    return categories;
};