import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, Sort, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

const Home = React.memo(function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSort = React.useCallback((name) => {
    dispatch(setSortBy(name));
  }, []);

  const handleAddPizza = React.useCallback((obj) => {
    dispatch(addPizzaToCart(obj));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <Sort
          activeSort={sortBy}
          items={sortItems}
          onClickSort={onSelectSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizza}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                key={obj.id}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
});

export default Home;
