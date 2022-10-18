import { createSelector } from "reselect";

// we use the createSelector function to create a memoized selector which caches the result of the function and only re-runs the function if the input state has changed
const selectCategoryReducer = (state) => state.categories;

// we will use this selector to get the categories from the state
export const selectCategories = createSelector(
  // the first argument will be an array of input selectors
  [selectCategoryReducer],
  // the second argument will be a function that will return the value we want out of the selector
  // this selector is our memoized selector
  // It only runs if the input state coming from the input selectors has changed
  (categoriesSlice) => categoriesSlice.categories
);

// so we are teiling it, as long as the categories array does not change in the state, do not re-run this function and give back the previous value
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
