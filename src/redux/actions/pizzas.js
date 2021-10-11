import axios from 'axios';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}&_order=desc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const setLoaded = (val) => ({
  type: 'SET_LOADED',
  payload: val,
});
