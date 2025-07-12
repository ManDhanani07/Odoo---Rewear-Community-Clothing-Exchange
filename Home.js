import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to ReWear</h1>
      <p>Exchange clothes, earn points, and promote sustainable fashion.</p>
      <div style={styles.buttons}>
        <Link to="/browse" style={styles.button}>Browse Items</Link>
        <Link to="/add" style={styles.button}>List an Item</Link>
        <Link to="/signup" style={styles.button}>Start Swapping</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center'
  },
  buttons: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#3498db',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none'
  }
};

export default Home;
