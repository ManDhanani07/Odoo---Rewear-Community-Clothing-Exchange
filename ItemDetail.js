import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();

  // Dummy content for now
  const item = {
    id,
    title: 'Sample Jacket',
    description: 'A lightly used stylish denim jacket.',
    image: 'https://via.placeholder.com/300',
    uploader: 'Jane Doe',
    status: 'Available'
  };

  return (
    <div style={styles.container}>
      <img src={item.image} alt={item.title} style={styles.image} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>Uploaded by:</strong> {item.uploader}</p>
      <p><strong>Status:</strong> {item.status}</p>
      <button style={styles.button}>Request Swap</button>
      <button style={styles.button}>Redeem via Points</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  image: {
    width: '100%',
    borderRadius: '6px'
  },
  button: {
    marginTop: '1rem',
    marginRight: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '4px'
  }
};

export default ItemDetail;
