import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.title} style={styles.image} />
      <h3>{item.title}</h3>
      <p>{item.category}</p>
      <Link to={`/item/${item.id}`}>View Details</Link>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px'
  }
};

export default ItemCard;
