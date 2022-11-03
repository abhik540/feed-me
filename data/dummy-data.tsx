import Category from "../models/Category";
import Meal from "../models/Meal";

export const CATEGORIES = [
    new Category('1', 'Italian', '#f5428d'),
    new Category('2', 'Mexican', '#f54242'),
    new Category('3', 'Indian', '#ddf708')
];

export const MEALS = [
    new Meal('1', ['1'], 'Pizza', 'Yes', 'None', 'https://i.postimg.cc/cJ473KnF/saahil-khatkhate-kf-Ds-MDy-X1-K0-unsplash.jpg', 34 ),
    new Meal('2', ['1'], 'Pasta', 'Yes', 'None', '', 22 ),
    new Meal('3', ['2'], 'Chipolte', 'Yes', 'None', '', 23 ),
    new Meal('4', ['3'], 'Biryani', 'Yes', 'None', '', 34 )
];