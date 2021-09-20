import React from 'react';

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickItem,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onClickItem(index)}
              key={`${name}_${index}`}
              className={activeCategory === index ? 'active' : ''}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
