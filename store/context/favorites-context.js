import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesIds, setFavoritesIds] = useState([]);

  function addFavorites(id) {
    setFavoritesIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorites(id) {
    setFavoritesIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId != id)
    );
  }

  const value = {
    ids: favoritesIds,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
