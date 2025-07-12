import React from 'react';
import ItemCard from '../components/ItemCard';

const dummyItems = [
  { id: 1, title: 'Blue Denim Jacket', category: 'Jackets', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Red T-shirt', category: 'Tops', image: 'https://via.placeholder.com/150' }
];

const BrowseItems = () => {
  return (
    <div style={styles.grid}>
      {dummyItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '2rem'
  }
};

export default BrowseItems;
