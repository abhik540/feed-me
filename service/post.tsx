import axios from "axios";
import Category from "../models/Category";

export const postCategory = (category: Category ) => {
    axios.post(
        'https://myproject-34f5b-default-rtdb.firebaseio.com/category.json',
        category
    );
};