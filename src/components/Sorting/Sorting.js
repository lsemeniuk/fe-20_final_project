import React from 'react';
import styles from './Sorting.module.scss';

const sortBy = [
  { name: 'новинкам', type: 'newItems', order: 'desc' },
  { name: 'уменьшению цены', type: 'priceMin', order: 'desc' },
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'увеличению цены', type: 'priceMin', order: 'asc' },
];

const Sorting = () => {
  return (
    <div className={styles.sort}>
      Сортировать по:
      <select className={styles.sortField} onChange={e => JSON.parse(e.target.value)} name='' id=''>
        {sortBy.map(sort => (
          <option value={JSON.stringify(sort)}>{sort.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
