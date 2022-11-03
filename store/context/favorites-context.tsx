import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids: [] as string[],
    addFavorite: (id: string) => { },
    removeFavorite: (id: string) => { }
});

interface FavoriteContextProviderProps {
    children: any;
}

const FavoriteContextProvider = ({ children }: FavoriteContextProviderProps) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        const currrentFavIds = favoriteMealIds;
        if (!currrentFavIds.includes(id)) {
            currrentFavIds.push(id);
            setFavoriteMealIds(currrentFavIds)
        }
    };

    const removeFavorite = (id: string) => {
        const currrentFavIds = favoriteMealIds;
        if (currrentFavIds.includes(id)) {
            const index = currrentFavIds.indexOf(id);
            if (index !== -1) {
                currrentFavIds.splice(index, 1);
            }
        }
    };
    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };
    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
};

export default FavoriteContextProvider;

