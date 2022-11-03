class Meal {
    id: string;
    categoryIds: string[];
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    price: number;

    constructor(id: string, categoryIds: string[], title: string, affordability: string, complexity: string, imageUrl: string, price: number) {
        this.id = id;
        this.title = title;
        this.categoryIds = categoryIds;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

export default Meal;